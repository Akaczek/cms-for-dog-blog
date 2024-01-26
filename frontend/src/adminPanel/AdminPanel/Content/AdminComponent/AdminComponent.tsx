import { FC } from "react";

import { addableComponentsTypes } from "../../../../lib/types/Component";
import { DogItem, Form, Gallery, HeroBanner, Links, Text } from "../../../../components";
import { IComponentProps } from "./AdminComponent.types";

const AdminComponent: FC<IComponentProps> = ({ component }) => {
  switch (component.type) {
    case addableComponentsTypes.DogItem:
      return <DogItem />;
    case addableComponentsTypes.Form:
      return <Form />;
    case addableComponentsTypes.Gallery:
      return <Gallery />;
    case addableComponentsTypes.HeroBanner:
      return <HeroBanner />;
    case addableComponentsTypes.Links:
      return <Links />;
    case addableComponentsTypes.TextWithImage:
      return <Text />;
    default:
      return null;
  }
};

export default AdminComponent;