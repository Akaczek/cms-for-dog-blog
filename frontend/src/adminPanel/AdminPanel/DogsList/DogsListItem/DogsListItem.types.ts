import { Dog } from "../../../../lib/types";

export interface IDogsListItemProps {
  dog: Dog;
  onDogDelete: (dog: Dog) => void;
  onDogEdit: (dog: Dog) => void;
}
