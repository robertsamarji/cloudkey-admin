import React from "react";
import SiteWrapper from "../SiteWrapper.react";
import { Button, Card, Dropdown, Form, Grid, Page, Table } from "tabler-react";

function KeyCardsPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Key Cards">
        <Grid.Row className="justify-content-end">
          <Grid.Col md={4}>
            <Form.Group>
              <Form.InputGroup>
                <Form.Input placeholder="Search..."/>
                  <Form.InputGroup append>
                    <Form.Select>
                      <option>ID</option>
                      <option>Key Card</option>
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
                  <Table.ColHeader>Key Card</Table.ColHeader>
                  <Table.ColHeader>Cuts</Table.ColHeader>
                  <Table.ColHeader>S2C1</Table.ColHeader>
                  <Table.ColHeader>S2C2</Table.ColHeader>
                  <Table.ColHeader>S2C3</Table.ColHeader>
                  <Table.ColHeader>S2C4</Table.ColHeader>
                  <Table.ColHeader>S2C5</Table.ColHeader>
                  <Table.ColHeader>S2C6</Table.ColHeader>
                  <Table.ColHeader>S2C7</Table.ColHeader>
                  <Table.ColHeader>CD0</Table.ColHeader>
                  <Table.ColHeader>CD1</Table.ColHeader>
                  <Table.ColHeader>CD2</Table.ColHeader>
                  <Table.ColHeader>CD3</Table.ColHeader>
                  <Table.ColHeader>CD4</Table.ColHeader>
                  <Table.ColHeader>CD5</Table.ColHeader>
                  <Table.ColHeader>CD6</Table.ColHeader>
                  <Table.ColHeader>CD7</Table.ColHeader>
                  <Table.ColHeader>CD8</Table.ColHeader>
                  <Table.ColHeader>CD9</Table.ColHeader>
                  <Table.ColHeader>CDZ</Table.ColHeader>
                  <Table.ColHeader>CDA</Table.ColHeader>
                  <Table.ColHeader>CDB</Table.ColHeader>
                  <Table.ColHeader>CDC</Table.ColHeader>
                  <Table.ColHeader>CDD</Table.ColHeader>
                  <Table.ColHeader>CDE</Table.ColHeader>
                  <Table.ColHeader>CDF</Table.ColHeader>
                  <Table.ColHeader>CDG</Table.ColHeader>
                  <Table.ColHeader>CDH</Table.ColHeader>
                  <Table.ColHeader>CDI</Table.ColHeader>
                  <Table.ColHeader>CDJ</Table.ColHeader>
                  <Table.ColHeader>CDK</Table.ColHeader>
                  <Table.ColHeader>CDL</Table.ColHeader>
                  <Table.ColHeader>CFL</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>9</Table.Col>
                    <Table.Col>1539</Table.Col>
                    <Table.Col>.205</Table.Col>
                    <Table.Col>.371</Table.Col>
                    <Table.Col>.538</Table.Col>
                    <Table.Col>0.704</Table.Col>
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

export default KeyCardsPage;
