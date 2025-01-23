import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex-1 min-h-[80vh] flex flex-col justify-center items-center">
      <Skeleton className="h-4 min-w-[300px]" />
      <p className="mt-4 text-pageSubHead text-card-description">Loading..</p>
    </div>
  );
}
