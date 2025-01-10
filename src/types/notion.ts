import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type NotionData = {
  [key: string]: string;
  order: string;
  title: string;
  description: string;
  createdDate: string;
};

export type NotionDataProperty =
  | {
      type: 'date';
      date: {
        start: string;
        end: string | null;
        time_zone: null;
      } | null;
      id: string;
    }
  | {
      type: 'rich_text';
      rich_text: Array<RichTextItemResponse>;
      id: string;
    }
  | {
      type: 'title';
      title: Array<RichTextItemResponse>;
      id: string;
    };
