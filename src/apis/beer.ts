export async function getBeerData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SAMPLE_API}`);

  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
}
