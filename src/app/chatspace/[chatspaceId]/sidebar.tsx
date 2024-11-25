'use client';
import React, { useContext, useState } from 'react';

import { SidebarButton } from './sidebar-button';

import useWindowSize from '../../../../hooks/useWindowSize';

import { Chat } from '@/components/chat/chat';
import {
  IPopoverContext,
  PopoverContext,
} from '@/components/providers/sidebarContext';
import { ChatList } from '@/components/chat/chat-list';
import { ActivityList } from '@/components/activity/activity-list';
import { TeamList } from '@/components/team/team-list';
import { YourTeam } from '@/components/team/your-team';
import { sidebarData } from '@/components/data';

const Sidebar = () => {
  const { popoverState, setPopoverState } = useContext(
    PopoverContext
  ) as IPopoverContext;

  const windowSize = useWindowSize();
  const [hovered, setHovered] = useState(false);

  const handleHover = (state: boolean) => isSmallScreen && setHovered(state);

  const isSmallScreen = windowSize.width < 946;

  return (
    <aside className=" h-full flex">
      <div
        className="w-[4.3rem]  bg-black-charcoal flex flex-col h-full items-center  gap-y-1 "
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {sidebarData.map((item, idx) => (
          <SidebarButton key={idx} icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className="relative h-full">
        <div
          onMouseEnter={() => isSmallScreen && setHovered(true)}
          onMouseLeave={() => isSmallScreen && setHovered(false)}
          className={`bg-black-almost w-[280px] h-full 
            ${hovered || !isSmallScreen ? 'flex ' : 'hidden'} ${hovered || (isSmallScreen && 'absolute z-30')}`}
        >
          {popoverState.name === 'Chat' ? (
            <ChatList
              pinnedchildren={<Chat />}
              recentChildren={
                <>
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                  <Chat />
                </>
              }
            />
          ) : popoverState.name === 'Activity' ? (
            <ActivityList />
          ) : (
            <TeamList
              yourTeams={
                <YourTeam
                  groupName="Innovation and Technology"
                  subName={[
                    { type: 'shared', name: 'New Shared' },
                    { type: 'private', name: 'New Private' },
                    { type: 'general', name: 'New General' },
                    { type: 'general', name: 'New' },
                  ]}
                />
              }
              hiddenTeams={
                <YourTeam
                  groupName="Main Grouping System"
                  subName={[{ type: 'shared', name: 'New' }]}
                />
              }
            />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
