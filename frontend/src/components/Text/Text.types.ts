export enum ImagePosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

export interface TextWrapperProps {
  $imagePosition?: ImagePosition;
}
