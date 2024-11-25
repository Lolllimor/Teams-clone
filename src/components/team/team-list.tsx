import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { cn } from '@/lib/utils';
import { BsStars } from 'react-icons/bs';
import { FaCaretRight, FaGlasses } from 'react-icons/fa6';
import { MdGroupAdd } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { IoFilter, IoSettingsSharp } from 'react-icons/io5';
import { useToggle } from 'react-use';
import { TeamDropdown } from '../data';

export const TeamList = ({
  yourTeams,
  hiddenTeams,
}: {
  yourTeams: React.ReactNode;
  hiddenTeams: React.ReactNode;
}) => {
  const [on, toggle] = useToggle(true);
  const [onHidden, Hiddentoggle] = useToggle(true);

  const styles = {
    dropdownIcons: 'group-hover:text-purple-teams text-black-grayish',
    dropdownP: 'text-gray-light text-sm group-hover:text-white',
    span: 'flex gap-1 px-1 pt-4 group bg-transparent w-full justify-start hover:bg-transparent items-center',
    header:
      'flex items-center justify-between border-b border-b-black-charcoal p-4',
    discoverWrapper:
      'flex gap-3 items-center p-1 w-full cursor-pointer group hover:bg-accent/10 rounded-sm pl-6 py-1.5',
  };

  return (
    <div className="bg-black-almost w-full flex flex-col ">
      <div className={styles.header}>
        <h1 className="text-lg font-bold">Teams </h1>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
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
                  <FaGlasses className={styles.dropdownIcons} />
                  <p className={styles.dropdownP}>Mark all as read</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="h-[0.1px] bg-black-grayish" />
              {TeamDropdown.map((item, idx) => (
                <DropdownMenuItem className="px-1 py-1" key={idx}>
                  <div className="flex gap-2 items-center group p-1 w-full">
                    <item.icon className={styles.dropdownIcons} />
                    <p className={styles.dropdownP}>{ item.label}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <IoFilter
            size={18}
            className="hover:text-purple-teams cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-b-black-charcoal py-2 px-1">
        <div className={styles.discoverWrapper}>
          <BsStars className="group-hover:text-white text-black-grayish" />
          <p className={styles.dropdownP}>Discover</p>
        </div>
      </div>
      <div className="flex flex-col overflow-auto hide-scrollbar gap-1 h-full w-full ">
        <div className="flex flex-col w-auto gap-1 mx-1">
          <div className="flex cursor-pointer w-full ">
            <span
              className={styles.span}
              onClick={toggle}
            >
              <FaCaretRight
                size={10}
                className={cn(
                  ' text-white size-3 transition-transform',
                  on && 'rotate-90'
                )}
              />
              <p className=" text-white text-xs">Your teams</p>
            </span>
          </div>
          {on && yourTeams}
        </div>
        <div className="flex flex-col w-auto gap-1 mx-1">
          <div className="flex cursor-pointer ">
            <span
              className={styles.span}
              onClick={Hiddentoggle}
            >
              <FaCaretRight
                size={10}
                className={cn(
                  ' text-white size-3 transition-transform',
                  on && 'rotate-90'
                )}
              />
              <p className=" text-white text-[12px]">Hidden teams</p>
            </span>
          </div>
          {onHidden && hiddenTeams}
        </div>
      </div>
    </div>
  );
};
