// @flow strict
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerMediaLibrary(cloudinary);
