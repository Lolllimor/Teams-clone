'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { FaRegUser } from 'react-icons/fa6';
import { ChevronRight, FilePenLine, SquareArrowOutUpRight } from 'lucide-react';
import { HeaderDroppdownStatus } from '../header-dropdown status';
import { LocationDropdownHeader } from '../location-dropdown-header';
import { useAuthActions } from '@convex-dev/auth/react';
import { useCurrentUser } from '@/app/features/auth/api/use-current-user';

export const MoreAvatar = () => {
  const { signOut } = useAuthActions();

  const { data, isLoading } = useCurrentUser();
  if (!data) {
    return null;
  }

  const { name, email, image } = data;
  const online = window.navigator.onLine;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {data.image ? (
          <Button className="relative flex bg-transparent hover:bg-transparent h-fit w-fit rounded-full p-0">
            <img
              src={image}
              alt="profile img"
              width={34}
              height={34}
              className="rounded-full"
            />
            <div
              className={`${online ? 'bg-green-600' : 'bg-[#3c3d3e] border border-accent/50 '} flex h-[11px] w-[11px] rounded-full absolute bottom-0 right-[-3px]`}
            ></div>
          </Button>
        ) : (
          <Button className="px-[7px] py-[7px] bg-accent/25  hover:bg-accent/25 h-fit w-fit rounded-full">
            <FaRegUser className="p-0 text-accent/50  hover:text-accent-50 size-5" />
            <div
              className={`${online ? 'bg-green-600' : 'bg-[#3c3d3e]'} flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-1  right-1.5`}
            ></div>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black-charleston min-w-[320px] pb-3">
        <DropdownMenuLabel className="text-white flex items-center justify-between p-3 ">
          <p className="truncate w-36 text-sm font-bold">General</p>
          <p
            onClick={() => {
              signOut();
            }}
            className="font-normal text-xs text-gray-light hover:text-purple-teams cursor-pointer"
          >
            Sign out
          </p>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="pt-[3px]">
          <div className="flex gap-2 items-center text-white font-normal ">
            {data.image ? (
              <img
                src={image}
                alt="profile img"
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <Button className="p-3.5 bg-accent/5  hover:bg-accent/25 h-fit w-fit rounded-full">
                <FaRegUser className="p-0 text-accent/50  hover:text-accent-50 size-5" />
              </Button>
            )}

            <div>
              <div className=" hover:bg-accent/20 px-1 rounded-md cursor-pointer">
                <p className="text-sm font-bold text-gray-light">{name}</p>
                <p className="text-[12px] text-gray-light">{email}</p>
              </div>
              <div className="flex gap-2 items-center px-1 hover:text-purple-teams text-gray-light ">
                <p className="text-[12px] cursor-pointer ">View account</p>
                <SquareArrowOutUpRight className=" size-3 cursor-pointer" />
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <HeaderDroppdownStatus />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LocationDropdownHeader />
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
  );
};
