'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none focus:border-b-purple-teams focus:border-b-2 py-2.5 pl-3  border-black-grayish bg-black-charleston rounded-md w-full',
      },
    },
    extensions: [StarterKit],
    content: 'Hello',
  });

  return (
    <EditorContent
      editor={editor}
      className=" "
    />
  );
};

export default Tiptap;
