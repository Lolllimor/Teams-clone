import { MdMoreHoriz } from 'react-icons/md';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { dropdownData } from '../data';
import { RiDeleteBinFill } from 'react-icons/ri';
import { FaRegCircle, FaRegUser } from 'react-icons/fa6';

export const Chat = () => {
  const chatWrapper =
    'flex gap-3 ml-1 rounded-md px-4 pt-1.5 pb-[5px] w-full border-[0.2px] hover:border-[#FFFFFF1A] border-transparent hover:bg-[#242424cc] cursor-pointer group items-center';
  return (
    <div className={chatWrapper}>
      <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
        <FaRegUser className="p-0 text-white  hover:text-white size-4" />
        <div className="w-[12px] h-[12px] rounded-full absolute bottom-0 right-0 bg-black-loading  flex justify-center items-center">
          <FaRegCircle className="w-[11px] h-[11px] text-black-grayish" />
        </div>
      </div>
      <div className="flex flex-col text-black-grayish  group-hover:text-white">
        <div className=" w-full  flex justify-between">
          <p className=" text-sm line-clamp-1 w-full">Rodiat Ololade Morin</p>
          <p className="text-black-grayish group-hover:hidden text-[12px] h-full justify-start">
            07/07
          </p>
        </div>
        <span className=" text-[12px] line-clamp-1 w-full">
          You: is_paginated on my task endpoint isnt working
        </span>
      </div>
      <div className="cursor-pointer h-full items-center flex">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MdMoreHoriz
              size={18}
              className="hover:text-purple-teams cursor-pointer hidden group-hover:flex"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" bg-black-charleston w-fit drop-shadow-2xl "
            align="end"
            side="bottom"
          >
            {dropdownData.map((item, idx) => (
              <DropdownMenuItem className="px-1 py-1" key={idx}>
                <div className="flex gap-2 items-center group p-1 w-full">
                  <item.icon className="group-hover:text-purple-teams text-black-grayish" />
                  <p className="text-gray-light text-sm group-hover:text-white">
                    {item.label}
                  </p>
                </div>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator className="h-[0.1px] bg-[#525252]" />
            <DropdownMenuItem className="px-1 py-1">
              <div className="flex gap-2 items-center group p-1 w-full">
                <RiDeleteBinFill className="group-hover:text-purple-teams text-black-grayish" />
                <p className="text-gray-light text-sm group-hover:text-white">
                  Delete
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
