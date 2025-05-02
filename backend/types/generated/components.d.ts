import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PageAddress extends Struct.ComponentSchema {
  collectionName: 'components_page_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    lawdata: Schema.Attribute.RichText;
    phone: Schema.Attribute.String;
  };
}

export interface PagePageSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_page_seos';
  info: {
    displayName: 'Page SEO';
    icon: 'code';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu-item': MenuMenuItem;
      'page.address': PageAddress;
      'page.page-seo': PagePageSeo;
    }
  }
}
