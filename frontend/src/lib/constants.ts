export const backendURL = 'http://localhost:8080';

export const addableComponentsTypes = {
  HeroBanner: 'HeroBanner',
  TextWithImage: 'TextWithImage',
  DogItem: 'DogItem',
  Gallery: 'Gallery',
  Form: 'Form',
  Links: 'Links',
};

export const thingsToBeEdited = {
  title: 'title',
  imageUrl: 'imageUrl',
  imagePosition: 'imagePosition',
  content: 'content',
  path: 'path',
  dogId: 'dogId',
  galleryId: 'galleryId',
  links: 'links',
  buttonContent: 'buttonContent',
};

interface whatCanBeEditedMap {
  [key: string]: string[];
}

export const whatCanBeEdited: whatCanBeEditedMap = {
  'HeroBanner': [thingsToBeEdited.title, thingsToBeEdited.imageUrl],
  'TextWithImage': [
    thingsToBeEdited.title,
    thingsToBeEdited.imageUrl,
    thingsToBeEdited.imagePosition,
    thingsToBeEdited.content,
    thingsToBeEdited.buttonContent,
    thingsToBeEdited.path,
  ],
  'DogItem': [thingsToBeEdited.dogId],
  'Gallery': [thingsToBeEdited.galleryId],
  'Form': [] as const,
  'Links': [thingsToBeEdited.title, thingsToBeEdited.links, thingsToBeEdited.imageUrl],
};
