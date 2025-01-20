import { NextResponse } from 'next/server';

const redirectUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://localhost:3000';

// const notion = new Client({ auth: process.env.SECRET_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

/**
 * @returns Route Handler 생성
 */
export async function GET(request: Request) {
  try {
    // const data = await notion.databases.query({
    //   database_id: databaseId,
    // });

    // const response = NextResponse.json(data);

    const raw = JSON.stringify({
      grant_type: 'authorization_code',
      code: 'e202e8c9-0990-40af-855f-ff8f872b1ec6',
      redirect_uri: redirectUrl,
    });

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SECRET_NOTION_KEY}`,
      },
      body: raw,
      next: { revalidate: 600 },
    };

    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      options
    );

    return response;
  } catch (error) {
    console.error('Error fetching logs from Notion', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
