import React from "react";
import { Button, Card, Form, Grid, Icon, Nav, Page, Table } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import KeyScanFrame from "../components/KeyScanFrame";
import KeyScanList from "../components/KeyScanList";
import Pagination from "../components/Pagination";

function NewScansPage() {
  return (
    <SiteWrapper>
      <Page.Content title="New Scans">
        <Grid.Row>
          <Grid.Col md={9}>
            <KeyScanFrame />
          </Grid.Col>
          <Grid.Col md={3}>
            <Card>
              <Card.Header>
                <Card.Title>Match</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group label="Key blank">
                    <Form.Input name="example-text-input" placeholder="Enter key blank..." />
                  </Form.Group>
                  <Button color="primary">Match</Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group label="Other options">
                    <Form.Radio
                      label="Key not supported"
                      name="example-radios"
                      value="option2"
                    />
                    <Form.Radio
                      label="Poor quality scan"
                      name="example-radios"
                      value="option3"
                    />
                  </Form.Group>
                  <Button color="secondary">Confirm</Button>
                </Form>
              </Card.Footer>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <KeyScanList />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <Pagination />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default NewScansPage;
