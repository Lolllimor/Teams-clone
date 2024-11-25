import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { GoSearch } from 'react-icons/go';
import { BsInfoSquare } from 'react-icons/bs';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { FaCaretRight } from 'react-icons/fa6';
import { MdMoreHoriz } from 'react-icons/md';
import Tiptap from '../ui/tiptap';

export const SquareInfoHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsInfoSquare
          size={14}
          className="text-gray-light h-3 hover:text-purple-slateBlue cursor-pointer"
        />
      </DropdownMenuTrigger>
      <div className="h-full">
        <DropdownMenuContent
          side="bottom"
          sideOffset={23}
          className=" bg-[#1f1f1f] w-[319px] rounded-sm p-0 hover:text-gray-light  text-gray-light drop-shadow-2xl  h-full"
        >
          <div className=" flex flex-col h-full">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-b-black-charcoal">
              <span className="text-white font-semibold text-sm">
                In this chat
              </span>
              <GoSearch />
            </div>
            <Accordion
              type="single"
              collapsible
              className="px-1.5 "
              defaultValue="Shared"
            >
              <AccordionItem value="Shared">
                <AccordionTrigger className=" pb-0">
                  <div className="flex gap-1 items-center group w-full">
                    <FaCaretRight
                      size={12}
                      className={cn(
                        ' text-[#1f1f1f] size-3 transition-transform group-hover:text-[#fff] '
                        // on && 'rotate-90'
                      )}
                    />
                    <span className="text-gray-light text-xs">Shared</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" flex flex-col gap-2 h-full">
                  <Button className="flex gap-3 py-2 h-fit bg-transparent hover:bg-accent/10 my-1 px-2 group w-full">
                    <div className="bg-red-600 w-8 h-8 shrink-0"></div>
                    <div className="flex flex-col justify-between items-start min-w-0">
                      <p className="text-sm text-white truncate w-full">
                        Screenshot 2024-06-27 131008.png
                      </p>
                      <p className="text-xs text-white">
                        Rodiat Ololade Morin, 16/07 16:42
                      </p>
                    </div>
                    <MdMoreHoriz
                      size={18}
                      className="hover:text-purple-teams group-hover:text-gray-light cursor-pointer text-[#1f1f1f]  "
                    />
                  </Button>
                  <Button className="flex gap-3 py-2 h-fit bg-transparent hover:bg-accent/10 my-1 px-2 group w-full">
                    <div className="bg-red-600 w-8 h-8 shrink-0"></div>
                    <div className="flex flex-col justify-between items-start min-w-0">
                      <p className="text-sm text-white truncate w-full">
                        Screenshot 2024-06-27 131008.png
                      </p>
                      <p className="text-xs text-white">
                        Rodiat Ololade Morin, 16/07 16:42
                      </p>
                    </div>
                    <MdMoreHoriz
                      size={18}
                      className="hover:text-purple-teams group-hover:text-gray-light cursor-pointer text-[#1f1f1f]  "
                    />
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* <div className="h-full flex flex-col my-3 px-1.5">
              <Button className="flex gap-2 py-2.5 bg-transparent hover:bg-accent/10">
                <div className="bg-red-600 w-8 h-8"></div>
                <div className="flex flex-col justify-between items-start">
                  <p className="text-sm text-white">
                    Screenshot 2024-06-27 131008.png
                  </p>
                  <p className="text-xs text-white">
                    Rodiat Ololade Morin, 16/07 16:42
                  </p>
                </div>
              </Button>
            </div> */}
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};
