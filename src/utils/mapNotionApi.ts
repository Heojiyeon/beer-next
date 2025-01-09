import { NotionData } from '@/types/notion';
import {
  DatePropertyItemObjectResponse,
  PartialDatabaseObjectResponse,
  RichTextPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function mapNotionApi(notionData: PartialDatabaseObjectResponse[]) {
  const mappedData: NotionData[] = [];

  notionData.map(rowData => {
    const handledData: NotionData = {
      title: '',
      description: '',
      createdDate: '',
    };

    Object.entries(rowData.properties).forEach(property => {
      const [propertyName, propertyValue] = property;

      if (propertyName === 'title') {
        console.log('title propertyValue: ', propertyValue);
        handledData['title'] = (
          propertyValue as unknown as RichTextPropertyItemObjectResponse
        ).rich_text.plain_text;
      } else if (propertyName === 'description') {
        console.log('description propertyValue: ', propertyValue);
        handledData['description'] = (
          propertyValue as unknown as RichTextPropertyItemObjectResponse
        ).rich_text.plain_text;
      } else if (propertyName === 'createdDate') {
        console.log('createdDate propertyValue: ', propertyValue);
        handledData['createdDate'] =
          (propertyValue as unknown as DatePropertyItemObjectResponse).date
            ?.start ?? '';
      }
    });

    console.log('handledData: ', handledData);

    mappedData.push(handledData);
  });

  return mappedData;
}
