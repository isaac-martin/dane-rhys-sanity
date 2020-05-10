export default {
  name: 'projectImage',
  type: 'object',
  title: 'Project Image',
  description: '',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Image Description',
    },
    {
      name: 'quote',
      type: 'bodyPortableText',
      title: 'Image Quote',
    },
  ],
  preview: {
    select: {
      title: 'description',
      media: 'image', // Use the userPortait image field as thumbnail
    },
    prepare(selection) {
      const {title, media} = selection;
      const firstLineOfDescription = title ? title[0].children[0].text : '';
      return {
        title: firstLineOfDescription,
        media,
      };
    },
  },
};
