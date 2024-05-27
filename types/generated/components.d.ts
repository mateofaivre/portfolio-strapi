import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultAbout extends Schema.Component {
  collectionName: 'components_default_abouts';
  info: {
    displayName: 'about';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Attribute.Component<'default.link'>;
  };
}

export interface DefaultFooter extends Schema.Component {
  collectionName: 'components_default_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    author: Attribute.String;
    rights: Attribute.String;
    thanks: Attribute.RichText;
  };
}

export interface DefaultIcons extends Schema.Component {
  collectionName: 'components_default_icons';
  info: {
    displayName: 'Icons';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<['email', 'twitter', 'linkedin', 'github']>;
    link: Attribute.Component<'default.link'>;
    text_to_copy: Attribute.String;
  };
}

export interface DefaultLink extends Schema.Component {
  collectionName: 'components_default_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
    target_blank: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface DefaultMessage extends Schema.Component {
  collectionName: 'components_default_messages';
  info: {
    displayName: 'Messages';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cta: Attribute.Component<'default.link'>;
  };
}

export interface DefaultProjectsItem extends Schema.Component {
  collectionName: 'components_default_projects_items';
  info: {
    displayName: 'Project';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media;
    content: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Attribute.Component<'default.link'>;
    medias: Attribute.Media;
    carousel_pagination_color: Attribute.Enumeration<['dark', 'light']>;
    project_tags: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'acf:ACF',
          'acf_extended:ACF Extended',
          'aero:Aero',
          'after_effects:After Effects',
          'figma:Figma',
          'firebase:Firebase',
          'github:Github',
          'gsap:GSAP',
          'gulp:Gulp',
          'html:HTML',
          'illustrator:Illustrator',
          'javascript:Javascript',
          'nuxtjs:Nuxt.js',
          'photoshop:Photoshop',
          'php:PHP',
          'sass:SASS',
          'sketch:Sketch',
          'timber:Timber',
          'trello:Trello',
          'twig:Twig',
          'vuejs:Vue.js',
          'wordpress:WordPress',
          'xd:XD'
        ]
      >;
    vimeo_embed_id: Attribute.BigInteger;
    project_types: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'uiux:UI/UX Design',
          'dev_en:Development',
          'motion:Motion Design',
          'dev_fr: D\u00E9veloppement'
        ]
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default.about': DefaultAbout;
      'default.footer': DefaultFooter;
      'default.icons': DefaultIcons;
      'default.link': DefaultLink;
      'default.message': DefaultMessage;
      'default.projects-item': DefaultProjectsItem;
    }
  }
}
