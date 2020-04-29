import React from "react";
import { Segment, Header, Item, Icon } from "semantic-ui-react";
import photo from "./Top/photo300.jpg";

export const Top = () => {
  return (
    <Segment color="orange">
      <Item.Group>
        <Item>
          <Item.Image size="small" src={photo} />
          <Item.Content>
            <Header as="h1">Ricardo Sanchez Encinas</Header>
            <Item.Meta>Software developer</Item.Meta>
            <Item.Description>
              <p>
                <Icon name="phone" /> +48 733 946 056
              </p>
              <p>
                <Icon name="mail" /> ricardosancheze@outlook.com
              </p>
              <p>
                <Icon name="linkedin" />{" "}
                <a href="https://www.linkedin.com/in/ricardo-sanchez-en/">
                  https://www.linkedin.com/in/ricardo-sanchez-en/
                </a>
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
