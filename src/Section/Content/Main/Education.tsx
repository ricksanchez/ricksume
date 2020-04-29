import React from "react";
import { Item } from "semantic-ui-react";
import ulsalogo from "./Education/ulsa.png";

export const Education = () => {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="mini" src={ulsalogo} />
        <Item.Content>
          <Item.Header>Universidad La Salle Noroeste</Item.Header>
          <Item.Meta>Ciudad Obregon, Mexico</Item.Meta>
          <Item.Description>
            <p>
              <strong>Multimedia Production Engineering</strong>
            </p>
            <p>Specialized in web and videogame development</p>
          </Item.Description>
          <Item.Extra>2006 - 2011</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
