export default {
  name: 'redirectItem',
  type: 'object',
  title: 'Redirect',
  description: "Urls should be paths eg /old-project not a full url eg danerhys.com/old-project",
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
