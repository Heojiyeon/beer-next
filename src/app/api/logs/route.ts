import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.SECRET_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

/**
 * @returns Route Handler 생성
 */
export async function GET() {
  try {
    const data = await notion.databases.query({
      database_id: databaseId,
    });

    // 여기서 `revalidate` 옵션을 적용하지 않고, 클라이언트에서 사용
    const response = NextResponse.json(data);

    // 서버에서 `revalidate` 옵션을 적용하려면 캐시 관련 설정을 사용
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=300'
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
