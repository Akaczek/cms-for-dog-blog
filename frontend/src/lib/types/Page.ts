import User from "./User";
import Component from "./Component";

export interface Page {
  id: number;
  path: string;
  name: string;
  lastEditedAt: string;
  lastEditedBy: User;
  parentPageId?: number;
  subpages?: Page[];
  components?: Component[];
  inHeader?: boolean;
}

export default Page;