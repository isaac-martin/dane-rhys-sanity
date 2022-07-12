export default {
  name: 'projectGroup',
  type: 'document',
  title: 'Project Group',
  description: 'Group Projects',
  fields: [
    {
      name: 'title',
      title: 'Project Group Title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
