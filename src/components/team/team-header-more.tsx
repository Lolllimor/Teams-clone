
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { MdModeEdit } from 'react-icons/md';
import { BiSolidHide } from 'react-icons/bi';
import { MdMoreHoriz } from 'react-icons/md';
import { BsPinAngleFill } from 'react-icons/bs';
import { IoLinkOutline } from 'react-icons/io5';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { GoSearch, GoWorkflow } from 'react-icons/go';

export const TeamHeaderMore = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2">
        <MdMoreHoriz
          size={18}
          className="hover:text-purple-teams cursor-pointer "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" bg-black-charleston w-fit  drop-shadow-2xl p-1 rounded-sm"
      >
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <GoSearch className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              See new post at top
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="h-[0.2px] bg-black-grayish" />
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <GoSearch className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Find in channel
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <FaBell className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Channel notifications
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <BsPinAngleFill className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Pin
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <BiSolidHide className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Hide
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="h-[0.2px] bg-black-grayish" />
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <FaEnvelope className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Get email address
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <IoLinkOutline className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Get link to channel
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <MdModeEdit className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Edit channel
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center group w-full">
            <GoWorkflow className="group-hover:text-purple-teams text-black-grayish" />
            <p className="text-gray-light text-sm group-hover:text-white">
              Workflows
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
