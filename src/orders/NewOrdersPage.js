import React from "react";
import { Page, Grid, Button, Form, Table, Card, Badge } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";

function NewOrdersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="New Orders">
        <Grid.Row>
          <Grid.Col md={9}>
            <Card>
              <Card.Header>
                <Card.Title>Key Scan</Card.Title>
                <Card.Options>
                  <Button color="danger" size="sm" className="ml-4">Clear points</Button>
                  <Button color="primary" size="sm" className="ml-4">Side 1</Button>
                  <Button color="secondary" size="sm" className="ml-2">Side 2</Button>
                </Card.Options>
              </Card.Header>
              <Card.Body>
                <img src="https://tabler.github.io/tabler/demo/photos/grant-ritchie-338179-500.jpg" />
              </Card.Body>
            </Card>
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
            <Card>
              <Table className="card-table table-vcenter">
                <Table.Header>
                  <Table.ColHeader>ID</Table.ColHeader>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader className="text-right">Received</Table.ColHeader>
                  <Table.ColHeader className="text-right">Processed</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>1234</Table.Col>
                    <Table.Col>Jonny Bongo</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1235</Table.Col>
                    <Table.Col>Suckdeep Hardik</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1236</Table.Col>
                    <Table.Col>Mike Hunt</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1237</Table.Col>
                    <Table.Col>Chingchong Longdong</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default NewOrdersPage;
