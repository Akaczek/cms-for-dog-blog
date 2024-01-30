import { FC } from "react";

import { DogItem, Form, Gallery, HeroBanner, Links, Text } from "../../../components";
import { IPublicComponentProps } from "./PublicComponent.types";
import { addableComponentsTypes } from "../../../lib/constants";
import { PublicComponentWrapper } from "./PublicComponent.styles";

const PublicComponent: FC<IPublicComponentProps> = ({ component }) => {
  const renderComponent = () => {
    switch (component.type) {
      case addableComponentsTypes.DogItem:
        return <DogItem component={component}/>;
      case addableComponentsTypes.Form:
        return <Form />;
      case addableComponentsTypes.Gallery:
        return <Gallery component={component}/>;
      case addableComponentsTypes.HeroBanner:
        return <HeroBanner component={component}/>;
      case addableComponentsTypes.Links:
        return <Links component={component}/>;
      case addableComponentsTypes.TextWithImage:
        return <Text component={component}/>;
      default:
        return null;
    }
  };

  return <PublicComponentWrapper>{renderComponent()}</PublicComponentWrapper>;
};

export default PublicComponent;