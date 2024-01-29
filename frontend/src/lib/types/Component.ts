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

export interface Component {
  id: number;
  title?: string;
  imageUrl?: string;
  imagePosition?: string;
  content?: string;
  buttonContent?: string;
  path?: string;
  type: ComponentType;
  dog?: Dog;
  gallery?: Gallery;
  links?: Link[];
  pageId?: number;
  order?: number;
}

export default Component;
