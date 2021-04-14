import React, { Fragment } from "react";
import { Header, List } from "semantic-ui-react";

export const Experience = () => {
  return (
    <Fragment>
      <p>
        I have <strong>8 years</strong> of work experience as <strong>Full Stack Web Developer</strong> in 3 companies:
      </p>
      <List>
        <List.Item>
          <Header as="h3">ABB BS</Header>
          <p>
            <em>Kraków, Poland (Jun 2020 - currently)</em>
          </p>
          <p>
            Worked on a Manufacturing Execution System, as a full-stack .NET core/framework and TypeScript developer.
          </p>
          <p>
            Designing and implementing new features for our micro frontend architecture and also implementing its
            corresponding backend service.
          </p>
          <p>
            I was also involved in designing the next generation of our micro frontend framework for the whole
            division of the company.
          </p>
          <p>
            My activities in the company are:
            <List bulleted>
              <List.Item>
                <strong>TypeScript</strong> development
              </List.Item>
              <List.Item>
                <strong>C# 7/8</strong> development
              </List.Item>
              <List.Item>
                <strong>React</strong> development with <strong>Redux</strong>
              </List.Item>
              <List.Item>
                <strong>ASP.NET core</strong> and <strong>ASP.NET Web API 2</strong>
              </List.Item>
            </List>
          </p>
        </List.Item>
        <List.Item>
          <Header as="h3">Codete</Header>
          <p>
            <em>Kraków, Poland (Dec 2013 - Jun 2020)</em>
          </p>
          <p>
            Worked on a website for booking language courses and accommodations abroad, as a full-stack
            PHP/JavaScript/Haskell developer.
          </p>
          <p>
            I was focusing mainly on rewriting the existing legacy PHP website into a newer simpler version with a
            better design in mind, applying concepts gathered from other OOP languages and functional programming
            languages, such as inversion of control, immutability and a bit of category theory.
          </p>
          <p>
            As well, I developed a search engine for our courses with complex filters and query generation that can
            handle our current load (constant crawling and users) and making it fully reactive.
          </p>
          <p>
            For performance and correctness reasons, I decided to introduce Haskell in our company for financial
            calculations, which has been proven to be the right solution since we didn’t experience any bug on
            production for 2 years and counting.
          </p>
          <p>
            My activities in the company are:
            <List bulleted>
              <List.Item>
                <strong>Haskell</strong> development
              </List.Item>
              <List.Item>
                <strong>C#</strong> development
              </List.Item>
              <List.Item>
                <strong>PHP</strong> development
              </List.Item>
              <List.Item>
                <strong>JavaScript/TypeScript</strong> development (RxJS, NodeJS, jQuery)
              </List.Item>
              <List.Item>
                <strong>CSS/SASS</strong> styling
              </List.Item>
              <List.Item>
                <strong>MySQL</strong> (schema design and optimizations)
              </List.Item>
              <List.Item>
                <strong>Docker</strong> Swarm and infrastructure design
              </List.Item>
            </List>
          </p>
        </List.Item>
        <List.Item>
          <Header as="h3">Naranya</Header>
          <p>
            <em>Monterrey, Mexico (Mar 2013 - Nov 2013)</em>
          </p>
          <p>
            I had developed multiple Naranya projects that are in usage across many Latin American countries, including
            websites and SMS delivery content services.
          </p>

          <p>
            The most challenging of the projects, apart from keeping the performance of the service for millions of
            requests and notifications per second, was to implement our own OAuth 2 server.
          </p>
          <p>
            I was also part of the Naranya internal committee for upgrading the current database infrastructure and
            evaluate new technologies available in the market. A step that was necessary for expanding the Naranya
            services beyond the SMS market.
          </p>
          <p>
            My activities in the company are:
            <List bulleted>
              <List.Item>
                <strong>PHP</strong> devlopment
              </List.Item>
              <List.Item>
                <strong>MySQL Stored Procedures</strong> development
              </List.Item>
              <List.Item>
                <strong>C</strong> development of MySQL and PHP extensions
              </List.Item>
            </List>
          </p>
        </List.Item>
        <List.Item>
          <Header as="h3">Metacube Technology and Entertainment</Header>
          <p>
            <em>Guadalajara, Mexico (Jun 2011 - Jul 2012)</em>
          </p>
          <p>
            I was in charge of rigging and scripting of 3d characters and other objects for multiple commercial and
            mobile video games.
          </p>
          <p>
            As well, I was in charge of designing gameplays and implementing video games in Unity3d (C#) for the “Frutas
            Kamikaze Boing!”.
          </p>
          <p>
            My activities in the company are:
            <List bulleted>
              <List.Item>
                3d Games development in Unity3d and <strong>C#</strong>/C++
              </List.Item>
              <List.Item>
                Rigging 3d characters in <strong>3ds Max</strong>
              </List.Item>
              <List.Item>
                Scripting animations in <strong>MAXScript</strong>
              </List.Item>
              <List.Item>
                Designing <strong>gameplays</strong>
              </List.Item>
            </List>
          </p>
        </List.Item>
      </List>
    </Fragment>
  );
};
