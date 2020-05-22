export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
  {
  type: `string`,
  name: 'menuTitle',
  title: 'Menu'
  },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      description: 'Build Submenus',
      of: [
        {
          type: 'subMenu',
        },
      ],
    },
  ],
    preview: {
    select: {
      title: 'menuTitle',
    },
  },
};
