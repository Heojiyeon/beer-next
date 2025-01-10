import 'server-only';

import { mapNotionApi } from '@/utils/mapNotionApi';
import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

/**
 * @returns 학습 로그 리스트 서버 컴포넌트
 */
export default async function Logs() {
  const logData = await notion.databases
    .query({
      database_id: databaseId,
    })
    .then(res => {
      return mapNotionApi(res as unknown as QueryDatabaseResponse);
    });

  return (
    <>
      {logData.map(log => {
        return (
          <div className="flex">
            {log.title} | {log.description} | {log.createdDate}
          </div>
        );
      })}
    </>
  );
}
