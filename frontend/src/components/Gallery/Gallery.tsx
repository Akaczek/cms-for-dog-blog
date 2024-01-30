import { FC, useEffect, useState } from 'react';

import {
  GalleryWrapper,
  GalleryItem,
  GalleryItemImg,
  GalleryItemTitle,
  GalleryItemButton,
  GalleryItemText,
  SwipeLeftButton,
  SwipeRightButton,
} from './Gallery.styles';
import dogPaw from '../../assets/paw.svg';
import { useWindowSize } from '../../lib/hooks';
import { arrow_left, arrow_right } from '../../assets/icons';
import { IComponentProps } from '../components.types';
import { backendURL } from '../../lib/constants';

const Gallery: FC<IComponentProps> = ({component}) => {
  const [galleryItems, setGalleryItems] = useState(component.gallery?.galleryItems || []);
  const [max_items, setMaxItems] = useState(4);
  const [max_pages, setMaxPages] = useState(
    Math.ceil(galleryItems.length / max_items)
  );
  const [current_page, setCurrentPage] = useState(1);
  const [current_items, setCurrentItems] = useState(
    galleryItems.slice(0, max_items)
  );

  const windowSize = useWindowSize();

  useEffect(() => {
    setGalleryItems(component.gallery?.galleryItems || []);
  }, [component]);

  useEffect(() => {
    if (windowSize.width < 600) {
      setMaxItems(1);
    } else if (windowSize.width < 900) {
      setMaxItems(2);
    } else if (windowSize.width < 1280) {
      setMaxItems(3);
    } else {
      setMaxItems(4);
    }
  }, [windowSize]);

  useEffect(() => {
    setMaxPages(Math.ceil(galleryItems.length / max_items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max_items]);

  useEffect(() => {
    setCurrentItems(
      galleryItems.slice(
        current_page * max_items - max_items,
        current_page * max_items
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, max_items]);

  useEffect(() => {
    if (current_page > max_pages) setCurrentPage(max_pages);
  }, [max_pages, current_page]);

  const nextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, max_pages));
  };

  const prevPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  return (
    <GalleryWrapper>
      {galleryItems.length > max_items && (
        <SwipeLeftButton onClick={prevPage} disabled={current_page === 1}>
          <img src={arrow_left} alt='left arrow' />
        </SwipeLeftButton>
      )}
      {current_items.map((item) => (
        <GalleryItem key={item.id}>
          <GalleryItemImg src={`${backendURL}/images/${item?.imageUrl}`} onError={
            ({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = dogPaw;
            }
          } alt='dog image' />
          <GalleryItemTitle>{item.title}</GalleryItemTitle>
          <GalleryItemText>{item.content}</GalleryItemText>
          {item?.buttonContent && (
            <GalleryItemButton href={item.path}>
              {item.buttonContent}
            </GalleryItemButton>
          )}
        </GalleryItem>
      ))}
      {galleryItems.length > max_items && (
        <SwipeRightButton
          onClick={nextPage}
          disabled={current_page === max_pages}
        >
          <img src={arrow_right} alt='right arrow' />
        </SwipeRightButton>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
