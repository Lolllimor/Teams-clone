"use client"
import {
  IPopoverContext,
  PopoverContext,
} from '@/components/providers/sidebarContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useContext } from 'react';
import { IconType } from 'react-icons/lib';

interface SidebarButtonProps {
  icon: LucideIcon | IconType;
  label?: string;
  isActive?: boolean;
}

export const SidebarButton = ({
  icon: Icon,
  label,
  isActive,
}: SidebarButtonProps) => {
  const { popoverState, setPopoverState } = useContext(
    PopoverContext
  ) as IPopoverContext;

  return (
    <div
      className={`${isActive && ''} flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group w-full`}
    >
      <Button
        onClick={() =>
          setPopoverState((prevState) => ({
            ...prevState,
            name: label,
          }))
        }
        className={cn(
          ' p-2 group-hover:bg-black-almost flex flex-col h-[56px] w-full rounded-none bg-transparent gap-0',
          popoverState.name === label ? 'border-l-2 border-l-purple-teams ':""
        )}
      >
        <Icon
          className={` ${popoverState.name === label ? 'text-purple-teams border-l-purple-teams' : 'text-black-grayish'}  !size-[20px] group-hover:text-purple-teams border-l-purple-teams  transition-all`}
        />
        <span
          className={` ${popoverState.name === label ? 'text-purple-teams border-l-purple-teams' : 'text-black-grayish'} w-full text-[11px]  group-hover:text-purple-teams border-l-purple-teams truncate`}
        >
          {label}
        </span>
      </Button>
      
    </div>
  );
};
