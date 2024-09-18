import { Node, mergeAttributes } from '@tiptap/core';

const Emoji = Node.create({
  name: 'emoji',

  group: 'inline',

  inline: true,

  atom: true,

  addAttributes() {
    return {
      emoji: {
        default: '😊',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-emoji]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-emoji': '' }), HTMLAttributes.emoji];
  },

  addCommands() {
    return {
      insertEmoji:
        (emoji) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { emoji },
          });
        },
    };
  },
});

export default Emoji;
