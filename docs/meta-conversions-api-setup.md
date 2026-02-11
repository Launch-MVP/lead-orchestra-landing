# Meta Conversions API Setup

This project now supports server-side Meta Conversions API events using the official `facebook-nodejs-business-sdk`.

## 1. Install Dependency

```bash
pnpm add facebook-nodejs-business-sdk
```

## 2. Add Environment Variables

```env
META_CAPI_ENABLED=true
META_CAPI_ACCESS_TOKEN=EAAB...
META_PIXEL_ID=123456789012345

# Optional: enables Test Events in Events Manager
META_TEST_EVENT_CODE=TEST12345
```

Supported fallbacks:

- `FACEBOOK_CONVERSIONS_API_ACCESS_TOKEN` (for access token)
- `FACEBOOK_PIXEL_ID` (for pixel id)

## 3. Where Events Are Sent

- `POST /api/contact/intake`
  - Sends `Lead` when intake form is submitted
- `POST /api/contact`
  - Sends `Lead` when contact payload is accepted

Both routes send CAPI asynchronously so form submission is not blocked if Meta is unavailable.

## 4. Deduplication With Pixel

Frontend forms now generate a shared `metaEventId` and:

- pass it to browser pixel via `eventID`
- pass it to server via API payload (`metaEventId`)

This enables Pixel + CAPI deduplication in Meta Events Manager.

## 5. Key Server Module

- `src/lib/analytics/meta-conversions-api.ts`

Use `sendMetaConversionEvent(...)` from this module for any new server route that should report Meta conversions.
