import React, { useContext, Fragment } from "react";
import { Segment, Header, Item, Icon } from "semantic-ui-react";
import photo from "./Top/photo300.jpg";
import { StoreContext } from "../Store";

export const Top = () => {
  const { isWeb, phone, email } = useContext(StoreContext);
  return (
    <Segment color="orange">
      <Item.Group>
        <Item>
          <Item.Image size="small" src={photo} />
          <Item.Content>
            <Header as="h1">Ricardo Sanchez Encinas</Header>
            <Item.Meta>Software developer</Item.Meta>
            <Item.Description>
              {isWeb ? null : (
                <Fragment>
                  <p>
                    <Icon name="phone" /> {phone}
                  </p>
                  <p>
                    <Icon name="mail" /> {email}
                  </p>
                </Fragment>
              )}
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
