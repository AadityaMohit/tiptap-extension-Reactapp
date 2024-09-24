import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlock from '@tiptap/extension-code-block';
import Emoji from './EmojiExtension';
import './TiptapEditor.css'; 

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Emoji, 
      CodeBlock.configure({
        exitOnTripleEnter: true, 
        languageClassPrefix: 'language-',
      }),
    ],
    content: '',
  });

  return (
    <div>
      <h2>Tiptap Editor with CodeBlock and Emoji Extension</h2>

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
      <div style={{ marginTop: '10px' }}>

        <button onClick={() => editor && editor.chain().focus().insertEmoji('😊').run()}>Insert 😊</button>
        <button onClick={() => editor && editor.chain().focus().insertEmoji('🎉').run()}>Insert 🎉</button>
      </div>
    </div>
  );
};

export default TiptapEditor;
