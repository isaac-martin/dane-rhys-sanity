export default {
  name: 'videoProject',
  type: 'document',
  title: 'Video Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      description: 'used to insert this project in this place',
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
    {
      name: 'vimeoId',
      type: 'string',
      title: 'Vimeo ID',
      description: 'Unique vimeo ID - can be found in the url. Generally 8 numbers long',
    },
    {
      name: 'projectDescription',
      type: 'bodyPortableText',
      title: 'Project Description',
    },
    {
      name: 'thumbnail',
      type: 'mainImage',
      title: 'Thumbnail Image',
      description: 'Used when shown in pages',
    },
    {
      name: 'socialSharing',
      type: 'socialSharing',
      title: 'Social Sharing Data',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
  },
};
