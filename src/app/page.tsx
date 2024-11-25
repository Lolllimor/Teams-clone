'use client';

import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Chatspace() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/chatspace/${999}`);
  },[]);
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="size-8 animate-spin text-muted-foreground" />
    </div>
  );
}
