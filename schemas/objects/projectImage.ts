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
};
