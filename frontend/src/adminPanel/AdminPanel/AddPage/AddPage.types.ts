import { Page } from "../../../lib/types";

export interface IAddPageProps {
  parentPage: Page | null;
  onClose: () => void;
  isAddingToMainPage: boolean;
}