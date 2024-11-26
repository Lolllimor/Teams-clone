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
import React from 'react';


const Tiptap = ({content,setContent}:{content:any, setContent: any}) => {
    const editor = useEditor({
      editorProps: {
        attributes: {
          class:
            'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none focus:border-b-purple-teams focus:border-b-2 py-2.5 px-3  border-black-grayish bg-black-charleston rounded-md w-full ',
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
        Paragraph,

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
    });

  return (
    <div className=" text-white h-fit text-wrap w-full">
      <EditorContent editor={editor} className=" w-full" />
    </div>
  );
};

export default Tiptap;
