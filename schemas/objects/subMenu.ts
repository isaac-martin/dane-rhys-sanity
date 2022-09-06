export default {
  name: 'subMenu',
  type: 'object',
  title: 'Menu Group',
  fields: [
    {
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleLink',
      title: 'Menu Title Link',
      type: 'reference',
      description: 'Not required',
      to: [{type: 'page'}, {type: 'project'}, {type: 'customLink'}, {type: 'videoProject'}, {type: 'projectGroup'}],
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      description: 'Build Submenus',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}, {type: 'project'}, {type: 'customLink'}, {type: 'videoProject'}],
        },
      ],
    },
  ],
};
