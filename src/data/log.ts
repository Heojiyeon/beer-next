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
      return;
    }

    const logData = await res.json();
    return logData;
  } catch (error) {
    console.error('Error fetching logs');
    return;
  }
}
