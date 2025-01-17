'use client';

import { mapNotionApi } from '@/lib/mapNotionApi';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { useEffect, useState } from 'react';
import LogBox from './logBox';

export default function Logs() {
  const [logs, setLogs] = useState<QueryDatabaseResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/logs', {
          next: { revalidate: 60 }, // ISR 방식 사용 시 데이터 새로 고침 주기 설정
        });

        if (!res.ok) {
          setError('Failed to load logs');
          return;
        }

        const logData = await res.json();
        setLogs(logData);
      } catch (error) {
        setError('Error fetching logs');
        console.error(error);
      }
    };

    fetchLogs();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {logs ? (
        mapNotionApi(logs).map(log => <LogBox key={log.order} {...log} />)
      ) : (
        <div>로그 데이터가 존재하지 않습니다.</div>
      )}
    </div>
  );
}
