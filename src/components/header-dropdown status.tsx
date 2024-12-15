import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';


import { ChevronRight } from 'lucide-react';
import { ToolbarStatus } from './data';

export const HeaderDroppdownStatus = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex justify-between w-full items-center pl-[64px]">
          <div className="flex gap-2 items-center">
            <div className="h-4 w-4 border-2 border-white/40 rounded-full"></div>
            <p className="text-gray-light">Unknown</p>
          </div>
          <ChevronRight className="text-gray-light" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston w-[190px] hover:text-gray-light p-1 text-gray-light drop-shadow-2xl pb-3">
        {ToolbarStatus.map((item, idx) => (
          <DropdownMenuItem key={idx}>
            <div className="flex gap-2 items-center ">
              <item.icon className={item.color} />
              <p className="text-gray-light text-sm">{item.label}</p>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="bg-gray-light" />
        <DropdownMenuItem>
          <div className="flex justify-between w-full items-center">
            <p className="text-gray-light">Duration</p>
            <ChevronRight className="text-gray-light" />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-light " />
        <DropdownMenuItem>
          <p className="text-gray-light">Reset status</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
