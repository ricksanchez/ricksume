import React, { Fragment } from "react";
import { Header, List, Divider, Icon } from "semantic-ui-react";

export const SideBar = () => {
  return (
    <Fragment>
      <Header as="h3" inverted>
        Main technologies
      </Header>
      <List>
        <List.Item>
          <strong>.NET</strong> with C#
        </List.Item>
        <List.Item>
          <strong>React</strong> + MobX
        </List.Item>
        <List.Item>
          <strong>TypeScript</strong>
        </List.Item>
        <List.Item>
          <strong>SQL</strong> (MySQL, Description PostgreSQL)
        </List.Item>
        <List.Item>
          <strong>Haskell</strong>
        </List.Item>
      </List>
      <Divider section />
      <Header as="h3" inverted>
        Languages
      </Header>
      <List>
        <List.Item>
          <strong>English</strong> (advanced)
        </List.Item>
        <List.Item>
          <strong>Spanish</strong> (native)
        </List.Item>
        <List.Item>
          <strong>Polish</strong> (B1 certified)
        </List.Item>
      </List>
      <Divider section />
      <Header as="h3" inverted>
        <Icon name="github" /> GitHub
      </Header>
      <a href="https://github.com/ricksanchez">github.com/ricksanchez</a>
    </Fragment>
  );
};
