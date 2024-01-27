import { Dog } from "../../../../lib/types";

export interface IAddEditDogProps {
  dog?: Dog;
  onClose: () => void;
}