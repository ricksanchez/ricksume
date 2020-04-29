import React, { Fragment, useContext } from "react";
import { Header, List, Divider, Icon, Responsive } from "semantic-ui-react";
import { StoreContext } from "../../Store";

export const SideBar = () => {
  const { isWeb } = useContext(StoreContext);
  return (
    <Fragment>
      <Responsive minWidth={770}>
        <Header as="h3" inverted>
          <Icon name="cog" />
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
      </Responsive>
      <Header as="h3" inverted>
        <Icon name="language" /> Languages
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
      <Divider section />
      {isWeb ? (
        <Fragment>
          <Header as="h3" inverted>
            <Icon name="code" /> Source code
          </Header>
          <a href="https://github.com/ricksanchez/ricksume">github.com/ricksanchez/ricksume</a>
        </Fragment>
      ) : (
        <Fragment>
          <Header as="h3" inverted>
            <Icon name="cloud" /> Online version
          </Header>
          <a href="https://ricksanchez.github.io/ricksume/">github.com/ricksanchez/ricksume</a>
        </Fragment>
      )}
    </Fragment>
  );
};
