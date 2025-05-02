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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu-item': MenuMenuItem;
    }
  }
}
