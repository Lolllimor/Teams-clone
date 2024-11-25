import Image from 'next/image';
import { useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import { FaGlasses } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { EmptyStateActivity } from './empty-state';

export const ActivityList = () => {
  const [activeStates, setActiveStates] = useState({
    unread: false,
    mentions: false,
  });

  const handleToggle = (key: keyof typeof activeStates) => {
    setActiveStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
	};
	
  const styles = {
    dropdownIcon: 'group-hover:text-purple-teams text-black-grayish',
    defaultBtn:
      ' hover:text-purple-periwinkle hover:border-purple-darkperiwinkle hover:bg-gray-slate h-fit py-1.5 px-3  border border-black-onyx rounded-full text-sm',
    activeBtn:
      'border-purple-darkperiwinkle text-purple-periwinkle bg-gray-slate',
    ptagDefault: 'text-gray-light text-sm group-hover:text-white',
  };

  return (
    <div className="bg-black-almost w-full flex flex-col ">
      <div className="flex items-center justify-between border-b border-b-black-charcoal p-4">
        <h1 className="text-lg font-bold">Activity </h1>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdMoreHoriz
                size={18}
                className="hover:text-purple-teams cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black-charleston w-[173px]  drop-shadow-2xl p-1">
              <DropdownMenuItem>
                <div className="flex gap-2 items-center group">
                  <FaGlasses className={styles.dropdownIcon} />
                  <p className={styles.ptagDefault}>Mark all as read</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex gap-2 items-center group">
                  <IoSettingsSharp className={styles.dropdownIcon} />
                  <p className={styles.ptagDefault}>Notification settings</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <IoFilter
            size={18}
            className="hover:text-purple-teams cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-6 flex-col overflow-auto hide-scrollbar py-2 pl-4 flex-1 ">
        <div className="flex gap-2 items-center ">
          <Button
            onClick={() => handleToggle('unread')}
            className={`${activeStates.unread ? styles.activeBtn : 'bg-transparent'} ${styles.defaultBtn}`}
          >
            Unread
          </Button>
          <Button
            onClick={() => handleToggle('mentions')}
            className={`${activeStates.mentions ? styles.activeBtn : 'bg-transparent '} ${styles.defaultBtn}`}
          >
            @Mentions
          </Button>
        </div>
        <div
          className={`${activeStates.unread && !activeStates.mentions ? 'flex-1 items-center' : 'items-start'} flex  justify-center  h-full`}
        >
          <EmptyStateActivity activeStates={activeStates} />
        </div>
      </div>
    </div>
  );
};
