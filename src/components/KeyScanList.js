import React from "react";
import { Button, Card, Table } from "tabler-react";

function KeyScanList() {
  return (
    <Card>
      <Table className="card-table table-vcenter">
        <Table.Header>
          <Table.ColHeader>ID</Table.ColHeader>
          <Table.ColHeader>Username</Table.ColHeader>
          <Table.ColHeader>Cloudkey ID</Table.ColHeader>
          <Table.ColHeader className="text-right">Received</Table.ColHeader>
          <Table.ColHeader className="text-right">Processed</Table.ColHeader>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col>1234</Table.Col>
            <Table.Col>Jonny Bongo</Table.Col>
            <Table.Col>-</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1235</Table.Col>
            <Table.Col>Suckdeep Hardik</Table.Col>
            <Table.Col>-</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1236</Table.Col>
            <Table.Col>Mike Hunt</Table.Col>
            <Table.Col>-</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1237</Table.Col>
            <Table.Col>Chingchong Longdong</Table.Col>
            <Table.Col>-</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  );
}

export default KeyScanList;
