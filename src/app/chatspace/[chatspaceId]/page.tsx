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
import { Button } from '@/components/ui/button';

const Chatspace = () => {
  const tabName = [
    { name: 'Chat', value: 'chat' },
    { name: 'Shared', value: 'shared' },
  ];
  const [editorContent, setEditorContent] = useState('');

  const [currentTab, setCurrentTab] = useState('chat');
  return (
    <Tabs
      orientation="vertical"
      defaultValue="chat"
      onValueChange={(value) => setCurrentTab(value)}
      className="h-full w-full overflow-auto flex flex-col "
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
      <div className="flex-1 h-full overflow-hidden w-full">
        <TabsContent value="chat" className="flex w-full overflow-auto h-full">
          <div className=" relative flex flex-col  w-full flex-1">
            <div className=" flex flex-1 overflow-auto flex-col px-8">
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3 mt-5">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] max-w-[calc(100%-118px)] py-1.5 bg-black-charleston rounded-md text-sm">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    I need a search param on the notification endpoint and
                    prosper said he should paginate the one on hrms; so i am
                    guessing same goes for ticketing
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] py-1.5 bg-black-charleston rounded-md text-sm max-w-[calc(100%-118px)]">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    It isn't working still
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] py-1.5 bg-black-charleston rounded-md text-sm">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    It isn't working still
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] py-1.5 bg-black-charleston rounded-md text-sm max-w-[calc(100%-118px)]">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    It isn't working still
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] py-1.5 bg-black-charleston rounded-md text-sm max-w-[calc(100%-118px)]">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    It isn't working still
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-start pt-3">
                <div className="px-10 flex gap-2 ">
                  <p className="text-xs text-gray-light">
                    Ekene Joseph Thankgod
                  </p>
                  <p className="text-xs text-gray-light">12/10/23 15:06</p>
                </div>

                <div className="flex  gap-2 ">
                  <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                    <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-[#3c3d3e] right-[2px]"></div>
                  </div>
                  <div className="flex w-full px-[15px] py-1.5 bg-black-charleston rounded-md text-sm max-w-[calc(100%-118px)]">
                    I'll suggest you document these ideas; everything about it -
                    the prons and cons of it
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-0.5 h-fit items-end pt-3">
                <div className="flex gap-2 ">
                  <p className="text-xs text-gray-light">13/02 12:57</p>
                </div>

                <div className="flex justify-end  w-full gap-2 ">
                  <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                    It isn't working still
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sticky bottom-0  mb-5  h-fit mx-16 pt-[2rem]">
              <Tiptap content={editorContent} setContent={setEditorContent} />
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Chatspace;
