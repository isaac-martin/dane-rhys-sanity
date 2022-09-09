export default {
  name: 'customLink',
  type: 'document',
  title: 'External Link',
  description: 'Link to an external webpage (eg. Instagram)',
  fields: [
    {
      name: 'title',
      title: 'Link Text',
      type: 'string',
    },

    {
      name: 'url',
      title: 'Link',
      type: 'url',
    },
    {
      title: 'Project Group',
      name: 'projGroup',
      type: 'reference',
      to: [{type: 'projectGroup'}],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'used to insert this link in the pages',
    },
    {
      name: 'thumbnail',
      type: 'mainImage',
      title: 'Thumbnail Image',
      description: 'Used when shown in pages',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
