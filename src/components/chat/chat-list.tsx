'use client';
import { useToggle } from 'react-use';

import { LiaEdit } from 'react-icons/lia';
import { IoFilter } from 'react-icons/io5';
import { FaCaretRight } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { FaGlasses } from 'react-icons/fa6';

export const ChatList = ({
  pinnedchildren,
  recentChildren,
}: {
  pinnedchildren: React.ReactNode;
  recentChildren: React.ReactNode;
}) => {
  const [on, toggle] = useToggle(true);
  const [onRecent, Recenttoggle] = useToggle(true);

  return (
    <div className="bg-black-almost w-full flex flex-col ">
      <div className="flex items-center justify-between border-b border-b-black-charcoal p-4">
        <h1 className="text-lg font-bold">Chat </h1>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdMoreHoriz
                size={18}
                className="hover:text-purple-teams cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black-charleston w-[173px]  drop-shadow-2xl p-1">
              <DropdownMenuItem>
                <div className="flex gap-2 items-center group">
                  <FaGlasses className="group-hover:text-purple-teams text-black-grayish" />
                  <p className="text-gray-light text-sm group-hover:text-white">
                    Mark all as read
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <IoFilter
            size={18}
            className="hover:text-purple-teams cursor-pointer"
          />
          <LiaEdit
            size={18}
            className="hover:text-purple-teams cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col overflow-auto hide-scrollbar">
        <div className="flex flex-col w-full ">
          <div className="flex cursor-pointer ">
            <span
              className="flex gap-1 px-2 pt-4 group bg-transparent w-full justify-start hover:bg-transparent first-letter items-center"
              onClick={toggle}
            >
              <FaCaretRight
                size={10}
                className={cn(
                  'group-hover:text-[#fff] text-black-grayish size-3 transition-transform',
                  on && 'rotate-90'
                )}
              />
              <p className="group-hover:text-[#fff] text-black-grayish text-[12px]">
                Pinned
              </p>
            </span>
          </div>

          <div className="pr-4 pt-2 flex flex-col">{on && pinnedchildren}</div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex cursor-pointer ">
            <span
              className="flex gap-1 px-2 pt-4 group bg-transparent w-full justify-start hover:bg-transparent first-letter items-center"
              onClick={Recenttoggle}
            >
              <FaCaretRight
                size={10}
                className={cn(
                  'group-hover:text-[#fff] text-black-grayish size-3 transition-transform',
                  onRecent && 'rotate-90'
                )}
              />
              <p className="group-hover:text-[#fff] text-black-grayish text-xs">
                Recent
              </p>
            </span>
          </div>

          <div className="pr-4 pt-2 flex flex-col">
            {onRecent && recentChildren}
          </div>
        </div>
      </div>
    </div>
  );
};
