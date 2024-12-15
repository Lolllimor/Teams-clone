'use client';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';

import Tiptap from '../ui/tiptap';
import { chat } from '../data';

export const TabChat = ({ isOpen }: { isOpen?: boolean }) => {
  const [editorContent, setEditorContent] = useState('');

  return (
    <div className=" relative flex flex-col mt-2 w-full flex-1">
      <div
        className={`${isOpen ? 'pl-4 pr-8' : 'px-8'} flex flex-1 overflow-auto flex-col hide-scrollbar`}
      >
        {chat.map((item, idx) =>
          item.name ? (
            <div
              key={idx}
              className={`${idx === 1 && 'mt-5'} flex flex-col gap-0.5 h-fit items-start pt-3 `}
            >
              <div className="px-10 flex gap-2 ">
                <p className="text-xs text-gray-light">Ekene Joseph Thankgod</p>
                <p className="text-xs text-gray-light">12/10/23 15:06</p>
              </div>

              <div className="flex  gap-2 ">
                <div className="px-[8px] relative py-[8px] bg-accent/50 hover:bg-accent/50 h-fit w-fit rounded-full">
                  <FaRegUser className="p-0 text-white  hover:text-white size-4" />
                  <div className=" flex h-[11px] w-[11px] border border-accent/50 rounded-full absolute bottom-[-3px] bg-black-olive right-[2px]"></div>
                </div>
                <div className="flex w-full px-[15px] max-w-[calc(100%-118px)] py-1.5 bg-black-charleston rounded-md text-sm">
                  I'll suggest you document these ideas; everything about it -
                  the prons and cons of it
                </div>
              </div>
            </div>
          ) : (
            <div
              key={idx}
              className={`${idx === 1 && 'mt-5'} flex flex-col gap-0.5 h-fit items-end pt-3 `}
            >
              <div className="flex gap-2 ">
                <p className="text-xs text-gray-light">13/02 12:57</p>
              </div>

              <div className="flex justify-end  w-full gap-2 ">
                <div className="flex px-[15px] py-1.5 bg-purple-gunMetal rounded-md text-sm max-w-[calc(100%-118px)]">
                  I need a search param on the notification endpoint and prosper
                  said he should paginate the one on hrms; so i am guessing same
                  goes for ticketing
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex sticky bottom-0  mb-5  h-fit mx-16 pt-[2rem]">
        <Tiptap content={editorContent} setContent={setEditorContent} />
      </div>
    </div>
  );
};
