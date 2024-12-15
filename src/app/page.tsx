'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';

import 'aos/dist/aos.css';

import LoopingText from '@/components/loopingText';

export default function Chatspace() {
  const router = useRouter();

  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    router.replace(`/chatspace/${999}`);
  }, []);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShowHeading(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showHeading]);

  return (
    <div className="h-full flex items-center justify-center bg-black-loading w-full flex-col">
      <div className="group relative inline-flex h-[149px] w-[149px] items-center justify-center overflow-hidden rounded-md m-12 font-medium text-neutral-200 teams-bg"></div>

      <h1
        id="loading"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="2000"
        className={` ${showHeading ? 'opacity-100' : 'opacity-0 '}   `}
      >
        <LoopingText />
      </h1>
    </div>
  );
}
