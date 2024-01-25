import { Page } from "../../../../lib/types";

export interface IPagesListItemProps {
  page: Page;
  pageType: 'page' | 'subpage' | 'subsubpage';
  handleOpenAddPageModal: (page: Page) => void;
  handleOpenDeletePageModal: (page: Page) => void;
}