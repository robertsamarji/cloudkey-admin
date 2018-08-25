import React from "react";
import { Card, Table } from "tabler-react";

function OrderListCard() {
  return (
    <Card>
      <Table className="card-table">
        <Table.Header>
          <Table.ColHeader>ID</Table.ColHeader>
          <Table.ColHeader>Username</Table.ColHeader>
          <Table.ColHeader>Type</Table.ColHeader>
          <Table.ColHeader className="text-right">Received</Table.ColHeader>
          <Table.ColHeader className="text-right">Cut & Packaged</Table.ColHeader>
          <Table.ColHeader className="text-right">Dispatched</Table.ColHeader>
          <Table.ColHeader className="text-right">Completed</Table.ColHeader>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col>1234</Table.Col>
            <Table.Col>jonny@bongo.com</Table.Col>
            <Table.Col>Delivery</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:31</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1235</Table.Col>
            <Table.Col>suckdeep.hardik@gmail.com</Table.Col>
            <Table.Col>Post</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:28</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1236</Table.Col>
            <Table.Col>mikehunt@yahoo.com</Table.Col>
            <Table.Col>Delivery</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:31</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1237</Table.Col>
            <Table.Col>chingchong.longdong@outlook.com</Table.Col>
            <Table.Col>Post</Table.Col>
            <Table.Col className="text-right">2018-08-04 17:34</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
            <Table.Col className="text-right">-</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}

export default OrderListCard;
