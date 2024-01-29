import { FC } from "react";

import { DogItem, Form, Gallery, HeroBanner, Links, Text } from "../../../components";
import { IPublicComponentProps } from "./PublicComponent.types";
import { addableComponentsTypes } from "../../../lib/constants";
import { PublicComponentWrapper } from "./PublicComponent.styles";

const PublicComponent: FC<IPublicComponentProps> = ({ component }) => {
  const renderComponent = () => {
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

  return <PublicComponentWrapper>{renderComponent()}</PublicComponentWrapper>;
};

export default PublicComponent;