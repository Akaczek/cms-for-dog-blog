import Gallery from "./Gallery";
import Link from "./Link";
import Dog from "./Dog";

export type ComponentType =
  | 'Header'
  | 'Footer'
  | 'HeroBanner'
  | 'TextWithImage'
  | 'DogItem'
  | 'Gallery'
  | 'Form'
  | 'Links';

export const addableComponentsTypes = {
  HeroBanner: 'HeroBanner',
  TextWithImage: 'TextWithImage',
  DogItem: 'DogItem',
  Gallery: 'Gallery',
  Form: 'Form',
  Links: 'Links',
};

export interface Component {
  id: number;
  title?: string;
  imageUrl?: string;
  imagePosition?: string;
  content?: string;
  type: ComponentType;
  dog?: Dog;
  gallery?: Gallery;
  links?: Link[];
  pageId?: number;
  order?: number;
}

export default Component;
