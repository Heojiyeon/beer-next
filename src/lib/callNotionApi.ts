import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.SECRET_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

export default async function callNotionApi() {
  try {
    const data = await notion.databases.query({
      database_id: databaseId,
    });

    const response = NextResponse.json(data);

    return response;
  } catch (error) {
    console.error('Error fetching logs from Notion', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}
