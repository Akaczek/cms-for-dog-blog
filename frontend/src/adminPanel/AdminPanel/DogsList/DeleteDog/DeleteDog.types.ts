import { Dog } from "../../../../lib/types";

export interface IDeleteDogProps {
  dog: Dog;
  onClose: () => void;
}