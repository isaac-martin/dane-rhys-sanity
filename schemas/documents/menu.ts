export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    {
      type: `string`,
      name: 'menuTitle',
      title: 'Menu',
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
    {
      name: 'homeImages',
      title: 'Home Page Images',
      type: 'array',
      of: [
        {
          type: 'mainImage',
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
