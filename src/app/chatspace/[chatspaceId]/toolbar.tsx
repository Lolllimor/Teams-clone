'use client';
import {
  ChevronRight,
  Ellipsis,
  FilePenLine,
  Grip,
  MapPinPlusInside,
  Search,
  SquareArrowOutUpRight,
} from 'lucide-react';
import Image from 'next/image';
import { GoHomeFill } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa6';
import { PiBuildingOfficeFill } from 'react-icons/pi';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  DropdownEllipsis,
  DropdownEllipsis2,
  ToolbarStatus,
} from '@/components/data';

const Status = () => (
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

const Location = () => (
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

export const Toolbar = () => {
  return (
    <nav className="bg-black-charcoal flex items-center justify-between h-12 px-5 py-3">
      <div className="flex-1 flex gap-5 text-black-grayish items-center">
        <Grip />
        <Image
          width={20}
          height={20}
          className="h-7 w-7 max-[946px]:hidden"
          alt="logo"
          src="/teams.svg"
        />
      </div>
      <div className="min-w-[280px] max-w-[642px] grow-[2] w-[clamp(1020vw)]shrink">
        <Button
          // onClick={() => setOpen(true)}
          size="sm"
          className="bg-white/10 hover:bg-accent-25 w-full justify-start h-8 px-8 rounded-sm"
        >
          <Search className="size-5 text-[#959595] mr-2" />
          <span className="text-[#959595] text-sm">Search (Ctrl+Alt+E)</span>
        </Button>
        <CommandDialog
        // open={open} onOpenChange={setOpen}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Channels">
              {/* {channels?.map((channel) => (
                  <CommandItem
                    key={channel._id}
                    onSelect={() => onChannelClick(channel._id)}
                  >
                    {channel.name}
                  </CommandItem>
                ))} */}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Members">
              {/* {members?.map((member) => (
                  <CommandItem
                    key={member._id}
                    onSelect={() => onMemberClick(member._id)}
                  >
                    {member.user.name}
                  </CommandItem>
                ))} */}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end gap-3">
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
        <div className="w-fit h-fit relative p-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="px-[7px] py-[7px] bg-accent/25  hover:bg-accent/25 h-fit w-fit rounded-full">
                <FaRegUser className="p-0 text-accent/50  hover:text-accent-50 size-5" />
                <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-1 bg-[#3c3d3e] right-1.5"></div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black-charleston min-w-[320px] pb-3">
              <DropdownMenuLabel className="text-white flex items-center justify-between p-3">
                <p className="truncate w-36 text-sm">
                  Afex Commodities exchange
                </p>
                <p className="font-normal text-[12px] hover:text-purple-teams cursor-pointer">
                  Sign out
                </p>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <div className="flex gap-2 items-center text-white font-normal ">
                  <Button className="p-5 bg-accent/5  hover:bg-accent/25 h-fit w-fit rounded-full">
                    <FaRegUser className="p-0 text-accent/50  hover:text-accent-50 size-7" />
                  </Button>
                  <div>
                    <div className=" hover:bg-accent/20 px-1 rounded-md cursor-pointer">
                      <p className="text-sm font-bold text-gray-light">
                        Rodiat Ololade Morin
                      </p>
                      <p className="text-[12px] text-gray-light">
                        rmorin@africaexchange.com
                      </p>
                    </div>
                    <div className="flex gap-2 items-start px-1 hover:text-purple-teams text-gray-light">
                      <p className="text-[12px] cursor-pointer ">
                        View account
                      </p>
                      <SquareArrowOutUpRight className=" size-3 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Status />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Location />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between w-full items-center pl-[64px] text-gray-light">
                  <div className="flex gap-2 items-center">
                    <FilePenLine className="size-6" />
                    <p className="">Set status message</p>
                  </div>
                  <ChevronRight />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
