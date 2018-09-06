import React from "react";
import SiteWrapper from "../SiteWrapper.react";
import { Button, Card, Form, Grid, Page, Table } from "tabler-react";
import Pagination from "../components/Pagination";

function UsersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Users">
        <Grid.Row className="justify-content-end">
          <Grid.Col md={4}>
            <Form.Group>
              <Form.InputGroup>
                <Form.Input placeholder="Search..."/>
                  <Form.InputGroup append>
                    <Form.Select>
                      <option>ID</option>
                      <option>Username</option>
                      <option>Name</option>
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
                  <Table.ColHeader>Account Type</Table.ColHeader>
                  <Table.ColHeader>Username</Table.ColHeader>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Keys Scanned</Table.ColHeader>
                  <Table.ColHeader>Cloudkeys</Table.ColHeader>
                  <Table.ColHeader>Orders</Table.ColHeader>
                  <Table.ColHeader>Keys Ordered</Table.ColHeader>
                  <Table.ColHeader>Agg. Order Value</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>1</Table.Col>
                    <Table.Col>Personal</Table.Col>
                    <Table.Col>jonny@bongo.com</Table.Col>
                    <Table.Col>Jonny Bongo</Table.Col>
                    <Table.Col>7</Table.Col>
                    <Table.Col>4</Table.Col>
                    <Table.Col>2</Table.Col>
                    <Table.Col>4</Table.Col>
                    <Table.Col>£58</Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
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

export default UsersPage;
