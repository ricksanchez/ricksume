import React, { Fragment, useContext } from "react";
import { Experience } from "./Main/Experience";
import { Skills } from "./Main/Skills";
import { Header, Divider, Tab } from "semantic-ui-react";
import { Education } from "./Main/Education";
import { Interests } from "./Main/Interests";
import { StoreContext } from "../../Store";

const sections = [
  { name: "Experience", Component: Experience },
  { name: "Skills", Component: Skills },
  { name: "Education", Component: Education },
  { name: "Interests", Component: Interests },
];
function intersperse<T>(s: T, xs: T[]): T[] {
  return xs.flatMap((v, i) => (i === 0 ? [v] : [s, v]));
}

const panes = sections.map(({ name, Component }) => ({
  menuItem: name,
  render: () => (
    <Tab.Pane attached={false} as="div">
      <Component />
    </Tab.Pane>
  ),
}));

export const Main = () => {
  const { isWeb } = useContext(StoreContext);
  return (
    <Fragment>
      {isWeb ? (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      ) : (
        intersperse(
          <Divider section />,
          sections.map(({ name, Component }) => (
            <Fragment>
              <Header as="h2" content={name} />
              <Component />
            </Fragment>
          ))
        )
      )}
    </Fragment>
  );
};
