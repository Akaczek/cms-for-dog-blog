import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListHeader = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  }
`;

export const SecondaryListItem = styled(ListItem)`
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const TertiaryListItem = styled(ListItem)`
  justify-content: flex-start;
  padding-left: 2rem;
`;

export const ListItemValue = styled.span`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const ListItemSecondaryValue = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const ListItemAction = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightBrown};
  border: 2px solid ${(props) => props.theme.colors.lightBrown};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBrown};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ListItemActionIcon = styled.img`
  width: 20px;
  height: 20px;
`;