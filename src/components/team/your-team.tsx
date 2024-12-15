import { useToggle } from 'react-use';
import { FaStaylinked } from 'react-icons/fa';
import { MdGroupAdd, MdLockOutline, MdMoreHoriz } from 'react-icons/md';
import { FaCaretRight, FaGlasses } from 'react-icons/fa6';
import { FaPeopleGroup } from 'react-icons/fa6';

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsGraphUpArrow } from 'react-icons/bs';

type T = {
  type: 'general' | 'private' | 'shared';
  name: string;
};

const TeamDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="hidden group-hover:flex">
      <MdMoreHoriz
        size={18}
        className="hover:text-purple-teams cursor-pointer"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className=" bg-black-charleston w-fit drop-shadow-2xl "
      align="end"
      side="bottom"
    >
      <DropdownMenuItem className="px-1 py-1">
        <div className="flex gap-2 items-center group p-1 w-full">
          <FaGlasses className="group-hover:text-purple-teams text-black-grayish" />
          <p className="text-gray-light text-sm group-hover:text-white">
            Mark all as read
          </p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator className="h-[0.1px] bg-black-grayish" />
      <DropdownMenuItem className="px-1 py-1">
        <div className="flex gap-2 items-center group p-1 w-full">
          <IoSettingsSharp className="group-hover:text-purple-teams text-black-grayish" />
          <p className="text-gray-light text-sm group-hover:text-white">
            Your teams and channels
          </p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="px-1 py-1">
        <div className="flex gap-2 items-center group p-1 w-full">
          <MdGroupAdd className="group-hover:text-purple-teams text-black-grbg-black-grayish" />
          <p className="text-gray-light text-sm group-hover:text-white">
            Pending invites
          </p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="px-1 py-1">
        <div className="flex gap-2 items-center group p-1 w-full">
          <BsGraphUpArrow className="group-hover:text-purple-teams text-black-grbg-black-grayish" />
          <p className="text-gray-light text-sm group-hover:text-white">
            Analytics
          </p>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const YourTeam = ({
  groupName,
  subName,
}: {
  groupName: string;
  subName: Array<T>;
}) => {
  const [on, toggle] = useToggle(true);

  const styles = {
    ptagDefault: 'text-black-grayish text-sm group-hover:text-white',
    genaralTab:
      ' py-1 border-transparent border-[0.05px] hover:bg-accent/5 hover:border-[#FFFFFF1A] rounded-sm cursor-pointer group  pl-[1.9rem] ',
    groupWrapper:
      'flex justify-between pr-[2rem] w-full group items-center border-[0.05px] hover:border-[#FFFFFF1A] bg-transparent hover:bg-accent/5 border-transparent rounded-sm ',
  };

  return (
    <div className="flex flex-col hide-scrollbar gap-2  ">
      <div className="flex flex-col w-full ">
        <div className="flex  flex-col  w-full">
          <div className={styles.groupWrapper}>
            <span
              className="flex gap-1 px-1 cursor-pointer group  p-1 justify-start  w-full  items-start "
              onClick={toggle}
            >
              <div className="flex items-center justify-center h-7 border-0 background-none">
                <FaCaretRight
                  size={10}
                  className={cn(
                    ' text-[#fff] size-3 transition-transform',
                    on && 'rotate-90'
                  )}
                />
              </div>
              <div className="flex gap-2.5 items-center w-full">
                <div className=" rounded-sm h-7 w-7 flex justify-center items-center bg-gray-spanish text-white">
                  <FaPeopleGroup />
                </div>

                <p className={styles.ptagDefault}>{groupName}</p>
              </div>
            </span>

            <TeamDropdown />
          </div>
          <div className=" flex flex-col gap-3 ">
            {on && (
              <div className="  ">
                <div className={styles.genaralTab}>
                  <div className="px-[2rem] justify-between flex items-center ">
                    <div className="gap-3 flex items-center">
                      <p className={styles.ptagDefault}>General</p>
                    </div>

                    <TeamDropdown />
                  </div>
                </div>
                {subName.map((item, idx) => (
                  <div
                    key={idx}
                    className={styles.genaralTab}
                  >
                    <div className="px-[2rem] justify-between flex items-center ">
                      <div className="gap-3 flex items-center">
                        <p className={styles.ptagDefault}>{item.name}</p>
                        {item.type === 'private' ? (
                          <MdLockOutline className="w-3 group-hover:text-white text-black-grayish " />
                        ) : item.type === 'shared' ? (
                          <FaStaylinked className="w-2.5 group-hover:text-white text-black-grayish " />
                        ) : null}
                      </div>

                      <TeamDropdown />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
