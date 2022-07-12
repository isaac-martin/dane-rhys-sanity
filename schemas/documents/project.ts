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
      title: 'Project Group',
      name: 'projGroup',
      type: 'reference',
      to: [{type: 'projectGroup'}],
    },
    {
      title: 'Order',
      name: 'Order',
      description: 'Used to order this project on the page. Numbers do not need to be sequential, and can be used multiple times',
      type: 'number',
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
      name: 'projectIntro',
      type: 'bodyPortableText',
      title: 'Project Intro',
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
      description: "If empty page won't be password protected",
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
