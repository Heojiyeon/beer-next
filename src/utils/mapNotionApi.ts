import { NotionData, NotionDataProperty } from '@/types/notion';
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function mapNotionApi(notionData: QueryDatabaseResponse) {
  const mappedData: NotionData[] = [];

  const { results } = notionData;

  (results as unknown as PageObjectResponse[]).forEach(result => {
    const { properties } = result;

    const handledData: NotionData = {
      order: '',
      title: '',
      description: '',
      createdDate: '',
    };

    console.log(properties);

    Object.entries(properties as unknown as NotionDataProperty).forEach(
      property => {
        switch (property[0]) {
          case 'order':
            handledData.order = property[1].title[0].plain_text;
            break;
          case 'title':
            handledData.title = property[1].rich_text[0].plain_text;
            break;

          case 'description':
            handledData.description = property[1].rich_text[0].plain_text;
            break;

          case 'createdDate':
            handledData.createdDate = property[1].date.start;
            break;

          default:
            break;
        }
      }
    );

    mappedData.push(handledData);
  });

  return mappedData.sort((a, b) => Number(b.order) - Number(a.order));
}
