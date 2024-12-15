'use client';

import Image from 'next/image';
import { Grip, Search } from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

import { useAuthActions } from '@convex-dev/auth/react';

import { MainHeaderMore } from '@/components/main-header/more';
import { MoreAvatar } from '@/components/main-header/more-avatar';

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
        <MainHeaderMore />
        <div className="w-fit h-fit relative p-1">
          <MoreAvatar />
        </div>
      </div>
    </nav>
  );
};
