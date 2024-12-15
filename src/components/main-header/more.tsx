import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Ellipsis } from 'lucide-react';
import { DropdownEllipsis, DropdownEllipsis2 } from '../data';

export const MainHeaderMore = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="smallest"
          className="group hover:bg-accent/20 px-2 py-2 rounded-[2px] bg-transparent"
        >
          <Ellipsis className="text-white size-4 group-hover:size-5 group-hover:text-purple-teams focus:text-purple-teams" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston ">
        {DropdownEllipsis.map((item, idx) => (
          <DropdownMenuItem key={idx}>
            <div className="flex justify-between w-full items-center group">
              <div className="flex gap-2 items-center text-sm">
                <item.icon className="text-gray-light group-hover:text-white" />
                <p className="text-gray-light group-hover:text-white ">
                  {item.label}
                </p>
              </div>
              {item.extraIcon && (
                <item.extraIcon className="text-gray-light group-hover:text-white" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuLabel className="text-gray-light text-sm">
          Keyboard shortcuts
        </DropdownMenuLabel>
        {DropdownEllipsis2.map((item, idx) => (
          <DropdownMenuItem key={idx}>
            <div className="flex justify-between w-full items-center group">
              <div className="flex gap-2 items-center text-sm">
                <item.icon className="text-gray-light group-hover:text-white" />
                <p className="text-gray-light group-hover:text-white ">
                  {item.label}
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
