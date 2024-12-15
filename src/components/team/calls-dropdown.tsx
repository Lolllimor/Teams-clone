import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { IoIosArrowDown } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CalendarPlus } from 'lucide-react';

export const VideoDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoIosArrowDown
          size={14}
          className="text-gray-light h-3 hover:text-purple-slateBlue cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston w-fit rounded-sm hover:text-gray-light p-1 text-gray-light drop-shadow-2xl ">
        <DropdownMenuItem>
          <div className="flex gap-3 w-full items-center text-gray-light group cursor-pointer">
            <FaVideo className="text-gray-light group-hover:text-purple-slateBlue" />
            <p className="text-gray-light text-sm">Meet now</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-3 w-full items-center group text-gray-light  cursor-pointer">
            <CalendarPlus className="text-gray-light group-hover:text-purple-slateBlue" />
            <p className="text-gray-light text-sm">Schedule a meeting</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
