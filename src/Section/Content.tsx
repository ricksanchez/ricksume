import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import { SideBar } from "./Content/SideBar";
import { Main } from "./Content/Main";

export const Content = () => {
  return (
    <Segment>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            <Main />
          </Grid.Column>
          <Grid.Column width={4} color="black">
            <SideBar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
