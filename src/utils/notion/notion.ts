const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

export async function queryNotionDatabase(databaseId: string) {
	const resp = await fetch(`${NOTION_API_BASE}/databases/${databaseId}/query`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.NOTION_KEY}`,
			"Notion-Version": NOTION_VERSION,
			"Content-Type": "application/json",
		},
		cache: "no-store",
		body: JSON.stringify({ page_size: 100 }),
	});
	if (!resp.ok) {
		const text = await resp.text();
		throw new Error(`Notion DB query failed ${resp.status}: ${text}`);
	}
	return resp.json();
}
