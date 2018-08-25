import React from "react";
import { Badge, Card, Grid, Table } from "tabler-react";

function KeyDetailsCard() {
  return (
    <Card>
      <Card.Body>
        <Grid.Row>
          <Grid.Col md={4}>
            <Grid.Row>
              <Grid.Col md={5}>
                <p><strong>X Ref Set:</strong></p>
                <p><strong>Key Card:</strong></p>
                <p><strong>Key Code:</strong></p>
                <p><strong>CFL:</strong></p>
              </Grid.Col>
              <Grid.Col md={7}>
                <p>1</p>
                <p>1539</p>
                <p>46343</p>
                <p>.039</p>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col md={8}>
            <Grid.Row>
              <Table>
                <Table.Header>
                  <Table.ColHeader>S2C1</Table.ColHeader>
                  <Table.ColHeader>S2C2</Table.ColHeader>
                  <Table.ColHeader>S2C3</Table.ColHeader>
                  <Table.ColHeader>S2C4</Table.ColHeader>
                  <Table.ColHeader>S2C5</Table.ColHeader>
                  <Table.ColHeader>S2C6</Table.ColHeader>
                  <Table.ColHeader>S2C7</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>.205</Table.Col>
                    <Table.Col>.371</Table.Col>
                    <Table.Col>.538</Table.Col>
                    <Table.Col>.704</Table.Col>
                    <Table.Col>.871</Table.Col>
                    <Table.Col></Table.Col>
                    <Table.Col></Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
            <Grid.Row>
              <Table>
                <Table.Header>
                  <Table.ColHeader>C1</Table.ColHeader>
                  <Table.ColHeader>C2</Table.ColHeader>
                  <Table.ColHeader>C3</Table.ColHeader>
                  <Table.ColHeader>C4</Table.ColHeader>
                  <Table.ColHeader>C5</Table.ColHeader>
                  <Table.ColHeader>C6</Table.ColHeader>
                  <Table.ColHeader>C7</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>.297</Table.Col>
                    <Table.Col>.281</Table.Col>
                    <Table.Col>.304</Table.Col>
                    <Table.Col>.297</Table.Col>
                    <Table.Col>.304</Table.Col>
                    <Table.Col></Table.Col>
                    <Table.Col></Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
        <Badge color="success">Value: £39</Badge>
      </Card.Body>
    </Card>
  )
}

export default KeyDetailsCard;
