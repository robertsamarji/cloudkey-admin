import React from "react";
import SiteWrapper from "../SiteWrapper.react";
import { Button, Card, Dropdown, Form, Grid, Page, Table } from "tabler-react";

function CloudkeysPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Cloudkeys">
        <Grid.Row className="justify-content-end">
          <Grid.Col md={4}>
            <Form.Group>
              <Form.InputGroup>
                <Form.Input placeholder="Search..."/>
                  <Form.InputGroup append>
                    <Form.Select>
                      <option>ID</option>
                      <option>User ID</option>
                      <option>Scan ID</option>
                      <option>X Ref Set</option>
                      <option>Card</option>
                      <option>Code</option>
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
                  <Table.ColHeader>User ID</Table.ColHeader>
                  <Table.ColHeader>Scan ID</Table.ColHeader>
                  <Table.ColHeader>X Ref Set</Table.ColHeader>
                  <Table.ColHeader>Card</Table.ColHeader>
                  <Table.ColHeader>Code</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>1343</Table.Col>
                    <Table.Col>563</Table.Col>
                    <Table.Col>3781</Table.Col>
                    <Table.Col>1</Table.Col>
                    <Table.Col>1539</Table.Col>
                    <Table.Col>46343</Table.Col>
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

export default CloudkeysPage;
