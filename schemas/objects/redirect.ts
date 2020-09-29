export default {
  name: 'redirectItem',
  type: 'object',
  title: 'Redirect',
  fields: [
   {
      name: 'from',
      title: 'From URL',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'to',
      title: 'To Url',
      type: 'string',
       validation: Rule => Rule.required()
    },
  ],
};
