export async function searchLoader({ request }: any) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return { search: q };
}