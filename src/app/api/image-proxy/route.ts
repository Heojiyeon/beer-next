import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) return new NextResponse('Missing url', { status: 400 });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Image not found');

    const blob = await res.arrayBuffer();

    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': res.headers.get('Content-Type') || 'image/jpeg',
      },
    });
    
  } catch (e) {
    const fallbackUrl = new URL('/defaultBeer.jpg', req.url);

    const fallbackRes = await fetch(fallbackUrl);
    const fallbackBlob = await fallbackRes.arrayBuffer();

    return new NextResponse(fallbackBlob, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
      },
    });
  }
}
