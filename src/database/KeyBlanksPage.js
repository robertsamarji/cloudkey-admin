import React from "react";
import SiteWrapper from "../SiteWrapper.react";
import { Button, Card, Dropdown, Form, Grid, Page, Table } from "tabler-react";

function KeyBlanksPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Key Blanks">
        <Grid.Row className="justify-content-end">
          <Grid.Col md={4}>
            <Form.Group>
              <Form.InputGroup>
                <Form.Input placeholder="Search..."/>
                  <Form.InputGroup append>
                    <Form.Select>
                      <option>ID</option>
                      <option>Brand</option>
                      <option>Model</option>
                      <option>X Ref Set</option>
                      <option>Key Cards</option>
                     </Form.Select>
                  <Button color="primary" icon="search" />
                </Form.InputGroup>
              </Form.InputGroup>
            </Form.Group>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <Card>
              <Table className="card-table">
                <Table.Header>
                  <Table.ColHeader>ID</Table.ColHeader>
                  <Table.ColHeader>Brand</Table.ColHeader>
                  <Table.ColHeader>Model</Table.ColHeader>
                  <Table.ColHeader>X Ref Set</Table.ColHeader>
                  <Table.ColHeader>Key Cards</Table.ColHeader>
                  <Table.ColHeader>Blade Width</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>1</Table.Col>
                    <Table.Col>HD</Table.Col>
                    <Table.Col>1A</Table.Col>
                    <Table.Col>1</Table.Col>
                    <Table.Col>319, 881, 1539, 1577</Table.Col>
                    <Table.Col>0.345</Table.Col>
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

export default KeyBlanksPage;
