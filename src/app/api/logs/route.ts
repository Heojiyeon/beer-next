import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.SECRET_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://staging-beer-next.vercel.app'
    : 'http://localhost:3000';

/**
 * @returns Route Handler 생성
 */
export async function GET() {
  try {
    const data = await notion.databases.query({
      database_id: databaseId,
    });

    const response = NextResponse.json(data);

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=300'
    );

    response.headers.set('Access-Control-Allow-Origin', API_BASE_URL);
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
