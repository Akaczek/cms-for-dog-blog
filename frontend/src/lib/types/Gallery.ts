export type GalleryItem = {
  id: number;
  title: string;
  imageUrl: string;
  path: string;
  content: string;
  buttonContent: string;
};

export interface Gallery {
  id: number;
  title: string;
  galleryItems: GalleryItem[];
}

export default Gallery;
