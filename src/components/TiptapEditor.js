import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Emoji from './EmojiExtension';  // Import the Emoji extension

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Emoji],  // Add Emoji to the editor
    content: '<p>Add some emojis!</p>',
  });

  return (
    <div>
      <h2>Tiptap Editor with Emoji Extension</h2>
      <EditorContent editor={editor} />
      <div style={{ marginTop: '10px' }}>
        {/* Check if editor is available before inserting emojis */}
        <button onClick={() => editor && editor.chain().focus().insertEmoji('😊').run()}>Insert 😊</button>
        <button onClick={() => editor && editor.chain().focus().insertEmoji('🎉').run()}>Insert 🎉</button>
      </div>
    </div>
  );
};

export default TiptapEditor;
