// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import project from './documents/project';
import customLink from './documents/customLink';
import siteSettings from './documents/siteSettings';
import menu from './documents/menu';
// Object types
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import socialSharing from './objects/socialSharing';
import mainImage from './objects/mainImage';
import projectImage from './objects/projectImage';
import imageGallery from './objects/imageGallery';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project,
    mainImage,
    bodyPortableText,
    excerptPortableText,
    socialSharing,
    imageGallery,
    projectImage,
    menu,
    customLink,
    siteSettings,
  ]),
});
