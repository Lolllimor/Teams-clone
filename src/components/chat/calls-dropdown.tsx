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

export const CallsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoIosArrowDown
          size={14}
          className="text-gray-light h-3 hover:text-purple-slateBlue cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston w-[138px] rounded-sm hover:text-gray-light p-1 text-gray-light drop-shadow-2xl ">
        <DropdownMenuItem>
          <div className="flex gap-3 w-full items-center text-gray-light group cursor-pointer">
            <FaVideo className="text-gray-light group-hover:text-purple-slateBlue" />
            <p className="text-gray-light text-sm">Video call</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-3 w-full items-center group text-gray-light  cursor-pointer">
            <BsFillTelephoneFill className="text-gray-light group-hover:text-purple-slateBlue" />
            <p className="text-gray-light text-sm">Audio call</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
