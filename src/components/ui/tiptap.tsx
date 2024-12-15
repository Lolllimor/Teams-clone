'use client';
import { EditorContent, useEditor } from '@tiptap/react';
// Tiptap STraterKit
import StarterKit from '@tiptap/starter-kit';
// Document & Paragraph
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
// For Link Adding
import Link from '@tiptap/extension-link';
// Text Styles & Formating
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import React, { useEffect, useState } from 'react';

import { useToggle } from 'react-use';
import {
  PiTextUnderline,
  PiListBulletsLight,
  PiTextStrikethroughLight,
} from 'react-icons/pi';
import {
  RiFontSize2,
  RiDoubleQuotesR,
  RiMicrosoftLoopLine,
} from 'react-icons/ri';
import { ImBold } from 'react-icons/im';
import { FaPlus } from 'react-icons/fa6';
import { LiaEdit } from 'react-icons/lia';
import { BiFontColor } from 'react-icons/bi';
import { IoLinkOutline } from 'react-icons/io5';
import { MdOutlineFormatListNumbered } from 'react-icons/md';
import { LuSendHorizonal, LuHighlighter } from 'react-icons/lu';
import { GoSmiley, GoItalic, GoCodeSquare } from 'react-icons/go';
import { Button } from './button';

const Tiptap = ({ content, setContent }: { content: any; setContent: any }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none w-full  ',
      },
    },
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      Underline,
      Document,

      Link.configure({
        openOnClick: true,
        validate: (href) => /^https?:\/\//.test(href),
        HTMLAttributes: {
          class: 'link',
        },
      }),
    ],
    content: content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
    immediatelyRender: false,
  });

  const menuData = [
    {
      name: 'bold',
      icon: ImBold,
      funct: () => editor?.chain().focus().toggleBold().run(),
      disabled: !editor?.can().chain().focus().toggleBold().run(),
    },
    {
      name: 'italic',
      icon: GoItalic,
      funct: () => editor?.chain().focus().toggleItalic().run(),
      disabled: !editor?.can().chain().focus().toggleItalic().run(),
    },
    {
      name: 'underline',
      icon: PiTextUnderline,
      funct: () => editor?.chain().focus().toggleUnderline().run(),
      disabled: !editor?.can().chain().focus().toggleUnderline().run(),
    },
    {
      name: 'strikethrough',
      icon: PiTextStrikethroughLight,
      funct: () => editor?.chain().focus().toggleStrike().run(),
      disabled: !editor?.can().chain().focus().toggleStrike().run(),
    },
  ];
  const menuData2 = [
    {
      name: 'BulletList',
      icon: MdOutlineFormatListNumbered,
      funct: () => editor?.chain().focus().toggleBulletList().run(),
      disabled: !editor?.can().chain().focus().toggleBulletList().run(),
    },
    {
      name: 'NumberedList',
      icon: PiListBulletsLight,
      funct: () => editor?.chain().focus().toggleOrderedList().run(),
      disabled: !editor?.can().chain().focus().toggleOrderedList().run(),
    },
  ];

  const menuData3 = [
    {
      name: 'Highlight',
      icon: LuHighlighter,
      funct: () => editor?.chain().focus().toggleHighlight().run(),
      disabled: !editor?.can().chain().focus().toggleHighlight().run(),
    },
    {
      name: 'FontColor',
      icon: BiFontColor,
      funct: () => editor?.chain().focus().toggleUnderline().run(),
      disabled: !editor?.can().chain().focus().toggleHighlight().run(),
    },
  ];
  const Menu = () => (
    <div className="flex gap-2">
      {menuData.map((item, idx) => (
        <Button
          key={idx}
          className="bg-transparent hover:bg-transparent p-0"
          onClick={item.funct}
          disabled={item.disabled}
        >
          <item.icon
            size={16}
            className={`${editor?.isActive(item.name) && 'text-purple-teams'}`}
          />
        </Button>
      ))}
    </div>
  );

  const [on, toggle] = useToggle(false);

  return (
    <div
      onClick={() => {
        if (!editor?.isFocused) {
          editor?.chain().focus().run();
        }
      }}
      className={`${on && 'flex-col '} ${editor?.isFocused && 'border-b-purple-teams border-b-2'} flex gap-4 text-white h-fit text-wrap w-full py-2.5 px-3  border-black-grayish bg-black-charleston rounded-md items-end justify-between`}
    >
      <div className={`${on ? 'w-full' : 'w-[73%]'} flex flex-col items-start`}>
        {on && <Menu />}
        <EditorContent editor={editor} className={` w-full flex  shrink`} />
      </div>
      <div
        className={`${on ? 'w-full' : 'w-fit'} flex gap-3 items-center h-full shrink-0 justify-end`}
      >
        <LiaEdit
          onClick={toggle}
          size={20}
          className={`${on ? 'text-purple-teams' : 'text-black-grayish'}  hover:text-purple-teams cursor-pointer`}
        />
        <GoSmiley
          size={20}
          className="text-black-grayish hover:text-purple-teams cursor-pointer"
        />
        <RiMicrosoftLoopLine
          size={20}
          className="text-black-grayish hover:text-purple-teams cursor-pointer"
        />
        <FaPlus
          size={20}
          className="text-black-grayish hover:text-purple-teams cursor-pointer"
        />
        <div className="h-[24px] w-[1px] bg-black-grayish"></div>
        <LuSendHorizonal
          size={20}
          className="text-black-grayish hover:text-purple-teams cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Tiptap;
