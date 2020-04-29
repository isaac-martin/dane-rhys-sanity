export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      name: 'title',
      title: 'Menu Name',
      type: 'string',
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      description: 'You can select a project, another menu (to build a submenu) or a custom link',
      of: [
        {
          type: 'reference',
          to: [{type: 'menu'}, {type: 'project'}, {type: 'customLink'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
