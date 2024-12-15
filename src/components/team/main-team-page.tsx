'use client';
import { useState } from 'react';
import { useToggle } from 'react-use';
import { GoSearch } from 'react-icons/go';
import { FaRegCircle } from 'react-icons/fa';
import { BsInfoSquare } from 'react-icons/bs';
import { MdMoreHoriz, MdOutlineAddBox } from 'react-icons/md';
import {
  FaBell,
  FaCaretRight,
  FaPeopleGroup,
  FaRegUser,
  FaVideo,
} from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';
import { VideoDropdown } from './calls-dropdown';
import { TeamHeaderMore } from './team-header-more';
import { TabChat } from '@/components/chat/tab-chat';
import { TabShared } from '@/components/chat/tab-shared';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AddMemberIcon } from '../add-member-icon';
import { IoSettingsSharp } from 'react-icons/io5';

export const MainTeamPage = () => {
  const tabName = [
    { name: 'Posts', value: 'posts' },
    { name: 'Files', value: 'files' },
  ];

  const [currentTab, setCurrentTab] = useState('posts');
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <Tabs
      orientation="vertical"
      defaultValue={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
      className="h-full w-full overflow-auto flex flex-col "
    >
      <div className="flex items-center justify-between border-b border-b-black-charcoal px-5 h-[60px] w-full">
        <div className="flex items-center gap-4 w-full h-full">
          <div className="flex items-center gap-3">
            <div className=" rounded-sm h-8 w-8 flex justify-center items-center bg-gray-spanish text-white">
              <FaPeopleGroup size={18} />
            </div>
            <h1 className="text-lg font-bold">General </h1>
          </div>

          <div className="flex gap-4 items-center h-full">
            <TabsList
              className={cn('flex gap-4 w-full bg-transparent h-full p-0')}
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
          <FaVideo
            className="text-gray-light hover:text-purple-slateBlue cursor-pointer"
            size={16}
          />
          <VideoDropdown />

          <TeamHeaderMore />
          {currentTab === 'posts' && (
            <div className="flex gap-3 items-center">
              <div className="flex h-5 w-[1px] bg-gray-light"></div>
              <BsInfoSquare
                onClick={toggleIsOpen}
                size={14}
                className="text-gray-light h-3 hover:text-purple-slateBlue cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <TabsContent
        value="posts"
        className="flex data-[state=active]:w-full overflow-auto data-[state=active]:h-full "
      >
        <TabChat isOpen />
        {isOpen ? (
          <div className=" flex flex-col bg-black-loading border-l border-l-black-charcoal gap-3 overflow-auto ">
            <div className="flex items-center justify-between px-5 py-3.5 border-b  border-b-black-charcoal w-full">
              <span className="text-white font-semibold text-sm">
                In this chat
              </span>
              <GoSearch className="hover:text-purple-slateBlue cursor-pointer" />
            </div>
            <div className="flex flex-col gap-3 overflow-auto w-full">
       
              <Accordion
                type="single"
                collapsible
                className="px-1.5 h-fit"
                defaultValue="Shared"
              >
                <AccordionItem value="Shared">
                  <AccordionTrigger asChild className=" py-2  w-fit">
                    <div className="flex gap-[2px] cursor-pointer  group">
                      <FaCaretRight
                        size={12}
                        className={cn(
                          ' text-black-loading size-3 transition-transform group-hover:text-[#fff]'
                        )}
                      />
                      <span className="text-gray-light text-xs font-normal">
                        People (63)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" flex flex-col gap-2 h-full px-3.5 pb-1">
                    <div className="flex gap-2">
                      <AddMemberIcon />
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                    </div>
                    <span className="text-purple-teams text-sm cursor-pointer">
                      See all
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="px-1.5 h-fit"
                defaultValue="Shared"
              >
                <AccordionItem value="Shared">
                  <AccordionTrigger asChild className=" py-1  w-fit">
                    <div className="flex gap-[2px] cursor-pointer  group">
                      <FaCaretRight
                        size={12}
                        className={cn(
                          ' text-black-loading size-3 transition-transform group-hover:text-[#fff]'
                        )}
                      />
                      <span className="text-gray-light text-xs font-normal">
                        Description
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" flex flex-col gap-2 h-fit px-3.5 pb-1">
                    <span className="text-sm">
                      All squad groups (All Tribe members)
                    </span>
                    <span className="text-purple-teams text-sm cursor-pointer">
                      Edit description
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="px-1.5 h-fit"
                defaultValue="Shared"
              >
                <AccordionItem value="Shared">
                  <AccordionTrigger asChild className=" py-1  w-fit">
                    <div className="flex gap-[2px] cursor-pointer  group">
                      <FaCaretRight
                        size={12}
                        className={cn(
                          ' text-black-loading size-3 transition-transform group-hover:text-[#fff]'
                        )}
                      />
                      <span className="text-gray-light text-xs font-normal">
                        Pinned
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" flex flex-col gap-2 h-fit px-1.5 pb-1">
                    <Button className="flex gap-3 py-2 h-fit bg-transparent hover:bg-accent/10 my-1 px-2 group w-[295px]">
                      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
                          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-start min-w-0">
                        <p className="text-sm text-white w-full  truncate">
                          Lorem ipsum dolor sit amet, consectetur adipisci
                          elit...
                        </p>
                        <p className="text-xs text-white">
                          Rodiat Ololade Morin, 16/07 16:42
                        </p>
                      </div>
                
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="px-1.5 h-fit"
                defaultValue="Shared"
              >
                <AccordionItem value="Shared">
                  <AccordionTrigger asChild className=" py-1  w-fit">
                    <div className="flex gap-[2px] cursor-pointer  group">
                      <FaCaretRight
                        size={12}
                        className={cn(
                          ' text-black-loading size-3 transition-transform group-hover:text-[#fff]'
                        )}
                      />
                      <span className="text-gray-light text-xs font-normal">
                        Options
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" flex flex-col gap-2 h-fit px-1.5 mt-1 pb-1">
                    <Button className="flex gap-3 h-fit bg-transparent hover:bg-transparent  px-2 group w-fit py-0">
                      <div className="flex gap-2 items-center group w-full">
                        <GoSearch className="group-hover:text-purple-teams text-black-grayish" />
                        <p className="text-gray-light text-sm group-hover:text-purple-teams font-normal">
                          Find in channel
                        </p>
                      </div>
                    </Button>
                    <Button className="flex gap-3  h-fit bg-transparent hover:bg-transparent px-2 group w-fit py-0">
                      <div className="flex gap-2 items-center group w-full">
                        <IoSettingsSharp className="group-hover:text-purple-teams text-black-grayish" />
                        <p className="text-gray-light text-sm group-hover:text-purple-teams font-normal">
                          Manage channel
                        </p>
                      </div>
                    </Button>
                    <Button className="flex gap-3  h-fit bg-transparent hover:bg-transparent px-2 group w-fit py-0">
                      <div className="flex gap-2 items-center group w-full">
                        <FaBell className="group-hover:text-purple-teams text-black-grayish" />
                        <p className="text-gray-light text-sm group-hover:text-purple-teams font-normal">
                          Channel notifications
                        </p>
                      </div>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="px-1.5 h-fit"
                defaultValue="Shared"
              >
                <AccordionItem value="Shared">
                  <AccordionTrigger asChild className=" py-1  w-fit">
                    <div className="flex gap-[2px] cursor-pointer  group">
                      <FaCaretRight
                        size={12}
                        className={cn(
                          ' text-black-loading size-3 transition-transform group-hover:text-[#fff]'
                        )}
                      />
                      <span className="text-gray-light text-xs font-normal">
                        Updates
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" flex flex-col gap-3 h-fit px-3.5 mt-2 ">
                    <p className="text-xs">
                      Abdulbasit Damilola Alabi joined the team.
                    </p>
                    <p className="text-xs">
                      Abdulbasit Damilola Alabi joined the team.
                    </p>
                    <span className="text-purple-teams text-sm cursor-pointer">
                      See all
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ) : null}
      </TabsContent>
      <TabsContent
        value="files"
        className="flex data-[state=active]:w-full overflow-auto data-[state=active]:h-full"
      >
        <TabShared />
      </TabsContent>
    </Tabs>
  );
};
