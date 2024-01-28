import { Component } from "../../../../lib/types";

export interface IDeleteComponentProps {
  component: Component;
  onClose: () => void;
}