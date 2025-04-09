import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list';
import * as React from 'react';

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'project'}),
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
      name: 'featuredImage',
      type: 'mainImage',
      title: 'Featured Image',
      // validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      group: 'projGroup.title',
      imgUrl: 'featuredImage.asset.url',
    },
    prepare(selection) {
      const {title, group, imgUrl} = selection;
      return {
        title: title,
        subtitle: `Group: ${group ? group : 'None'}`,
        media: <img src={imgUrl} />,
      };
    },
  },
};
