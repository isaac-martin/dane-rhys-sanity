export default {
  name: 'homeFeatured',
  type: 'object',
  title: 'HomeFeatured',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }, { type: 'videoProject' }, { type: 'customLink' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'project.title',
      media: 'image',
    },
  }
};
