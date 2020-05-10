export default {
  name: 'imageGallery',
  type: 'array',
  title: 'Gallery',
  of: [{type: 'projectImage'}],
  preview: {
    select: {
      name: 'isaac',
      media: 'projectImage', // Use the userPortait image field as thumbnail
    },
  },
};
