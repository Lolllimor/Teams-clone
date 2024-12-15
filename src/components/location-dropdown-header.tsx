import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronRight, MapPinPlusInside } from 'lucide-react';
import { GoHomeFill } from 'react-icons/go';
import { PiBuildingOfficeFill } from 'react-icons/pi';

export const LocationDropdownHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex justify-between w-full items-center pl-[64px] ">
          <div className="flex gap-2 items-center text-gray-light">
            <MapPinPlusInside className="size-6 " />
            <p className="text-gray-light">Set work location</p>
          </div>
          <ChevronRight className="text-gray-light" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black-charleston hover:text-gray-light min-w-[190px] p-1 text-gray-light drop-shadow-2xl pb-3">
        <DropdownMenuLabel>
          <p className="text-[12px] text-black-grayish ">For today</p>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full ">
            <PiBuildingOfficeFill className="text-gray-light group-hover:text-purple-teams" />
            <p className="text-gray-light text-sm">Office</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <GoHomeFill className="text-gray-light group-hover:text-purple-teams" />
            <p className="text-gray-light text-sm">Remote</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
