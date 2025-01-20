import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.SECRET_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

/**
 * @returns Route Handler 생성
 */
export async function GET(request: Request) {
  try {
    const data = await notion.databases.query({
      database_id: databaseId,
    });

    const response = NextResponse.json(data);

    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE'
    );

    const allowedOrigins = 'https://staging-beer-next.vercel.app';

    response.headers.set('Access-Control-Allow-Origin', allowedOrigins); // 요청된 Origin에 대해 CORS 허용
    response.headers.set('Access-Control-Allow-Headers', 'Authorization'); // 헤더 추가

    return response;
  } catch (error) {
    console.error('Error fetching logs from Notion', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
