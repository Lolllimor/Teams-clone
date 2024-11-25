import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { MdMoreHoriz } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { VscNewFolder } from 'react-icons/vsc';
import { BsPinAngleFill } from 'react-icons/bs';
import { FaBellSlash } from 'react-icons/fa6';
import { TbDeviceDesktopShare } from 'react-icons/tb';
import { RiDeleteBinFill } from 'react-icons/ri';

export const ChatHeaderMore = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2">
        <MdMoreHoriz
          size={18}
          className="hover:text-purple-teams cursor-pointer "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston w-[173px]  drop-shadow-2xl p-1 rounded-sm">
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <GoSearch className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Find in chat
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <VscNewFolder className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Schedule meeting
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <TbDeviceDesktopShare className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Screen sharing
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="h-[0.2px] bg-black-grayish" />
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <GoSearch className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Mark as unread
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <BsPinAngleFill className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Pin
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <FaBellSlash className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Mute
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="h-[0.2px] bg-black-grayish" />
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group">
            <RiDeleteBinFill className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Delete
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
