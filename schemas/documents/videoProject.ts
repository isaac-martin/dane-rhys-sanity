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
