export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 } // Cache for 60 seconds
  });
  const json = await res.json();
  if (json.errors) { console.error(json.errors); throw new Error('Failed to fetch API'); }
  return json.data;
}
