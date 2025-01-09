import 'server-only';

import { mapNotionApi } from '@/utils/mapNotionApi';
import { Client } from '@notionhq/client';
import { PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
const databaseId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID ?? '';

/**
 * TEMP: 데이터 임시 연결 테스트
 * @returns 학습 로그 리스트 서버 컴포넌트
 */
export default async function Logs() {
  await notion.databases
    .query({
      database_id: databaseId,
    })
    .then(res => {
      const logsData = mapNotionApi(
        res.results as PartialDatabaseObjectResponse[]
      );

      return logsData;
    });

  return <div>hi!</div>;
}
