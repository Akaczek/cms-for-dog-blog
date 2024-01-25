import Gallery from "./Gallery";
import Link from "./Link";

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
  title: string;
  imageUrl?: string;
  imagePosition?: string;
  content?: string;
  type: ComponentType;
  dog?: number;
  gallery?: Gallery;
  links?: Link[];
  pages?: number[];
}

export default Component;
