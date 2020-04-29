export default {
  name: 'project',
  type: 'document',
  title: 'Project',
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
      name: 'projectDescription',
      type: 'bodyPortableText',
      title: 'Project Description',
    },
    {
      name: 'images',
      type: 'imageGallery',
      title: 'Project Images',
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
