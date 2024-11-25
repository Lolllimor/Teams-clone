'use client';
import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineAddBox } from 'react-icons/md';

import { cn } from '@/lib/utils';

import { CallsDropdown } from '@/components/chat/calls-dropdown';
import { ChatHeaderMore } from '@/components/chat/chat-header-more';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SquareInfoHeader } from '@/components/chat/square-info-header';
import Tiptap from '@/components/ui/tiptap';

const Chatspace = () => {
  const tabName = [
    { name: 'Chat', value: 'chat' },
    { name: 'Shared', value: 'shared' },
  ];

  const [currentTab, setCurrentTab] = useState('chat');
  return (
    // <div className=" flex items-center justify-center flex-col flex-1 gap-2">
    //   <TriangleAlert className="size-6 text-muted-foreground" />
    //   <span className="text-sm text-muted-foreground">No channel found</span>
    // </div>
    <div className="flex flex-col w-full h-full">
      <Tabs
        defaultValue="chat"
        onValueChange={(value) => setCurrentTab(value)}
        className="h-full w-full"
      >
        <div className="flex items-center justify-between border-b border-b-black-charcoal px-5 h-[60px] w-full">
          <div className="flex items-center gap-4 w-full h-full">
            <div className="flex items-center gap-3">
              <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
              </div>
              <h1 className="text-lg font-bold">New User </h1>
            </div>

            <div className="flex gap-4 items-center h-full">
              <TabsList
                className={cn('flex gap-3 w-full bg-transparent h-full p-0')}
              >
                {tabName.map((item, idx) => (
                  <TabsTrigger
                    key={idx}
                    className={cn(
                      'data-[state=active]:bg-transparent data-[state=active]:border-b-[3px] h-full data-[state=active]:border-b-purple-slateBlue data-[state=active]:text-white data-[state=active]:font-semibold px-0 w-fit rounded-none text-gray-light '
                    )}
                    value={item.value}
                  >
                    {item.name}
                  </TabsTrigger>
                ))}

                <div className=" text-gray-light hover:text-purple-slateBlue cursor-pointer">
                  <MdOutlineAddBox />
                </div>
              </TabsList>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <FiPhone
              className="text-gray-light hover:text-purple-slateBlue cursor-pointer"
              size={16}
            />
            <CallsDropdown />
            <MdOutlineGroupAdd
              size={20}
              className="text-gray-light hover:text-purple-slateBlue cursor-pointer"
            />
            <ChatHeaderMore />
            {currentTab === 'chat' && (
              <div className="flex gap-3 items-center">
                <div className="flex h-5 w-[1px] bg-gray-light"></div>
                <SquareInfoHeader />
              </div>
            )}
          </div>
        </div>

        <TabsContent value="chat" className="flex-1 w-full flex overflow-auto ">
          <div className=" relative flex flex-col overflow-auto h-full w-full mx-8 mt-5">
            <div className="overflow-auto h-full ">H full</div>
            <div className="fixed bottom-0 mb-5  w-full">
              <div className=" focus:border-b-purple-teams text-white  h-fit w-4/5   text-wrap">
                <Tiptap />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chatspace;
