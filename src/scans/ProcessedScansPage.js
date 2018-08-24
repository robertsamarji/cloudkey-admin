import React from "react";
import { Page, Grid, Button, Form, Table, Card } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import KeyScanFrame from "../components/KeyScanFrame";
import KeyScanList from "../components/KeyScanList";
import Pagination from "../components/Pagination";

function ProcessedScansPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Processed Scans">
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
                    <Form.Input name="example-text-input" placeholder="JMA 1A" />
                  </Form.Group>
                  <Button color="primary">Re-Match</Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group label="Other options">
                    <Form.Radio
                      label="Delete cloudkey"
                      name="delete-cloudkey"
                      value="delete-cloudkey"
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

export default ProcessedScansPage;
