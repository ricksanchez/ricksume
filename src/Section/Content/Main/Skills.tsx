import React, { Fragment } from "react";
import { List } from "semantic-ui-react";

const items: { name: string; items: (string | JSX.Element)[] }[] = [
  {
    name: ".NET and C# development",
    items: ["C# 8.0", "ASP.NET core", "ASP.NET MVC 5", "ASP.NET Web API", "Entity Framework core and 6"],
  },
  { name: "JavaScript and TypeScript", items: ["React", "MobX", "jQuery", "RxJS"] },
  {
    name: "Haskell (GHC)",
    items: [
      "Yesod framework",
      "Persistent",
      "Monad transformers",
      "Several language extensions: GADTs, ExistentialQuantification, TypeFamilies...",
      "Type level programming",
      "Hspec",
      "QuickCheck",
    ],
  },
  {
    name: "SQL",
    items: ["MySQL", "Postgres", "Window functions", "CTE", "Stored procedures"],
  },
  {
    name: "CSS and HTML",
    items: ["HTML5 (semantic use)", "Modern CSS (grid, flex,...)", "SASS", "BEM", "Bootstrap", "Semantic UI"],
  },
  {
    name: "PHP",
    items: ["Phalcon framework", "Symfony 1.x", "Propel", "phpunit"],
  },
  {
    name: "Others",
    items: [
      "Correct by Construction techniques",
      "Concurrent and Parallel programming",
      "Bash scripting",
      <Fragment>
        <strong>Docker</strong> (writing dockerfiles, compose and swarm)
      </Fragment>,
      <strong>Git</strong>,
      "RabbitMQ",
      "Redis",
      "Procedural Object Oriented Programming (SOLID, Design patterns)",
      "Pure functional programming",
      "Editors: Emacs, Visual Studio 2019, VS Code, PHPStorm",
      "Spec testing (BDD) and property testing (sort of quick software verification)",
      "Scrum and Kanban",
    ],
  },
];

export const Skills = () => {
  return (
    <List bulleted>
      {items.map(({ name, items }) => (
        <List.Item>
          <strong>{name}</strong>
          <List bulleted>
            {items.map((i) => (
              <List.Item>{i}</List.Item>
            ))}
          </List>
        </List.Item>
      ))}
    </List>
  );
};
