'use client';

import { MainActivityPage } from '@/components/activity/main-activity';
import {
  IPopoverContext,
  PopoverContext,
} from '@/components/providers/sidebarContext';
import { useContext, useState } from 'react';
import { Chatspace } from './chat';
import { MainTeamPage } from '@/components/team/main-team-page';

const ChatspacePage = () => {
  const { popoverState } = useContext(PopoverContext) as IPopoverContext;

  return (
    <>
      {popoverState.name === 'Chat' ? (
        <Chatspace />
      ) : popoverState.name === 'Activity' ? (
        <MainActivityPage />
      ) : (
        <MainTeamPage/>
      )}
    </>
  );
};

export default ChatspacePage;
