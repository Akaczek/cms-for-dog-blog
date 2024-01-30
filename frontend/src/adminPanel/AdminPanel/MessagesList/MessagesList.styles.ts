import styled from "styled-components";

import { ListItem, SecondaryListItem } from "../../../shared/List/List.styles";

export const MessagesListItem = styled(ListItem)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  grid-gap: 1rem;
`;

export const MessagesSecondaryListItem = styled(SecondaryListItem)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  grid-gap: 1rem;
  padding-left: 0;
`;
