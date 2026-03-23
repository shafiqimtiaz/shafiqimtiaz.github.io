export const contactFormFields = [
  {
    name: 'name',
    label: 'Name',
    prefix: 'guest@system:~$',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    prefix: 'visitor@portfolio:~$',
    type: 'email',
    placeholder: 'your.email@example.com',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    prefix: 'visitor@portfolio:~$',
    type: 'textarea',
    placeholder: 'Tell me about your project or question',
    rows: 4,
    required: true,
  },
];
