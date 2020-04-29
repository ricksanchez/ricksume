import React, { useContext } from "react";
import { List } from "semantic-ui-react";
import { StoreContext } from "../../../Store";

export const Interests = () => {
  const { isWeb } = useContext(StoreContext);
  return (
    <List horizontal={!isWeb}>
      <List.Item>Dependent types</List.Item>
      <List.Item>Linear types</List.Item>
      <List.Item>F#</List.Item>
      <List.Item>Rust</List.Item>
      <List.Item>Agda</List.Item>
      <List.Item>Idris</List.Item>
      <List.Item>PureScript</List.Item>
      <List.Item>Category theory</List.Item>
      <List.Item>Metaprogramming</List.Item>
      <List.Item>Lambda calculus</List.Item>
    </List>
  );
};
