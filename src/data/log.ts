const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

export async function getLogData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/logs`, {
      method: 'GET',
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error('Failed to load logs');
      throw new Error('Failed to load logs');
    }

    console.log('Response :', res);

    return await res.text();
  } catch (error) {
    console.error('Error fetching logs', error);
    throw error;
  }
}
