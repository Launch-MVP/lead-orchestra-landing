# Redirects Database Schema

This is the Notion database schema expected by [route.ts](C:/Users/tyriq/Documents/Github/launchMVPLanding/src/app/api/redirect/route.ts).

## Environment

```bash
NOTION_KEY=your_notion_integration_token
NOTION_REDIRECTS_ID=your_redirects_database_id
```

## What The Redirect Route Supports

The route supports two modes:

1. Direct destination mode

```text
/api/redirect?to=https://example.com
```

2. Database-backed slug mode

```text
/api/redirect?slug=launch-mvp
```

In slug mode, the route queries the redirects database, finds the matching row by `Slug`, reads the destination, applies any stored UTM defaults from Notion, and then increments `Redirects (Calls)` on the matching page.

## Required Properties

| Property | Type | Required | Purpose |
|---|---|---:|---|
| `Slug` | `title` | Yes | Lookup key for `/api/redirect?slug=...` |
| `Destination` | `url` or `rich_text` | Yes | Final redirect target |
| `Redirects (Calls)` | `number` | Recommended | Incremented when `pageId` or DB-backed slug resolves a page |

## Recommended Properties

| Property | Type | Purpose |
|---|---|---|
| `Title` | `rich_text` or `title` | Human-readable label |
| `Description` | `rich_text` | Internal notes or display metadata |
| `Category` | `select` | Organizing redirects |
| `Status` | `status` or `select` | Operational state |
| `Redirect Type` | `select` | `Internal` / `External` classification |
| `Redirects (Clicks)` | `number` | Optional downstream metric |

## Optional Stored Tracking Defaults

These are read from Notion and merged into the redirect URL only when the incoming request does not already provide the same tracking parameter.

| Property | Type |
|---|---|
| `utm_source` | `select` |
| `utm_medium` | `select` |
| `utm_campaign` | `select` |
| `utm_content` | `select` |
| `utm_term` | `select` |
| `utm_offer` | `select` |
| `utm_icp` | `select` |
| `gclid` | `select` |

Merge precedence:

1. Incoming request tracking params
2. Existing destination query params
3. Stored params from Notion

That means Notion values are fill-only defaults, except where the destination is missing them.

## Minimal Working Schema

| Property | Type |
|---|---|
| `Slug` | `title` |
| `Destination` | `url` |
| `Redirects (Calls)` | `number` |
| `utm_source` | `select` |
| `utm_medium` | `select` |
| `utm_campaign` | `select` |
| `utm_content` | `select` |
| `utm_term` | `select` |
| `utm_offer` | `select` |
| `utm_icp` | `select` |
| `gclid` | `select` |

## Example Rows

### Launch MVP qualification

| Slug | Destination | utm_source | utm_campaign |
|---|---|---|---|
| `launch-mvp-qualification` | `https://launchmvp.com/contact?tab=prequalification` | `notion` | `launch_mvp_redirects` |

### Launch MVP deposit

| Slug | Destination | utm_source | utm_campaign |
|---|---|---|---|
| `launch-mvp-deposit` | `https://launchmvp.com/contact` | `notion` | `launch_mvp_deposit` |

## Notes

- `Slug` should be unique.
- `Destination` may be absolute (`https://...`) or a relative path if you intend to redirect within the same origin.
- If you use `pageId` directly in the request, the route skips DB lookup and only uses it for incrementing `Redirects (Calls)`.
