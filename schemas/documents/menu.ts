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
      name: 'homeFeaturedItems',
      title: 'Home Page Featured Items',
      type: 'array',
      of: [
        {
          type: 'homeFeatured',
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
