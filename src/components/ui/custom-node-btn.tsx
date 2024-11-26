import { Node } from '@tiptap/core';

export const ButtonNode = Node.create({
  name: 'button',

  group: 'inline', // Inline element
  inline: true,

  addAttributes() {
    return {
      text: {
        default: 'Click Me',
      },
      action: {
        default: () => alert('Button clicked!'),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'button',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['button', { ...HTMLAttributes }, HTMLAttributes.text || 'Click Me'];
  },

    addNodeView() {
        return ({ node }) => {
            const button = document.createElement('button');
            button.textContent = node.attrs.text || 'Click Me';
            button.className = 'bg-blue-500 text-white px-4 py-2 rounded';
            button.addEventListener('click', () => {
                alert('Button inside editor clicked!');
            });

            // Return a NodeView object with the `dom` property
            return {
                dom: button,
            };
        };
    }
});
