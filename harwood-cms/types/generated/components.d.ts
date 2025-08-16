import type { Schema, Struct } from '@strapi/strapi';

export interface SharedGridComponents extends Struct.ComponentSchema {
  collectionName: 'components_shared_grid_components';
  info: {
    displayName: 'Grid components';
    icon: 'bulletList';
  };
  attributes: {
    Header: Schema.Attribute.String;
    Paragraphs: Schema.Attribute.Component<'shared.paragraphs', true>;
  };
}

export interface SharedH2Texts extends Struct.ComponentSchema {
  collectionName: 'components_shared_h2_texts';
  info: {
    displayName: 'h2 texts';
    icon: 'bulletList';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraphs';
    icon: 'archive';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTitleAndInputPlaceholderText
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_and_input_placeholder_texts';
  info: {
    displayName: 'TitleAndInputPlaceholderText';
    icon: 'book';
  };
  attributes: {
    PlaceholderText: Schema.Attribute.String;
    TitleText: Schema.Attribute.String;
  };
}

export interface SharedTwoInputs extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_inputs';
  info: {
    displayName: 'Two Inputs';
    icon: 'alien';
  };
  attributes: {
    Title: Schema.Attribute.String;
    TitleAndInputPlaceholderText: Schema.Attribute.Component<
      'shared.title-and-input-placeholder-text',
      false
    >;
    TitleAndInputPlaceholderText2: Schema.Attribute.Component<
      'shared.title-and-input-placeholder-text',
      false
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.grid-components': SharedGridComponents;
      'shared.h2-texts': SharedH2Texts;
      'shared.media': SharedMedia;
      'shared.paragraphs': SharedParagraphs;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.title-and-input-placeholder-text': SharedTitleAndInputPlaceholderText;
      'shared.two-inputs': SharedTwoInputs;
    }
  }
}
