import React from "react";
import { Page, Grid, Button, Form, Table, Card, Badge } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import GoogleMap from "../components/GoogleMap";

function NewOrdersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="New Orders">
        <Grid.Row>
          <Grid.Col>
            <Card>
              <Card.Header>
                <Card.Title>Order #1234 | Delivery</Card.Title>
              </Card.Header>
              <Card.Body>
                <Grid.Row>
                  <Grid.Col md={4}>
                    Gay
                  </Grid.Col>
                  <Grid.Col md={4}>
                    Gay
                  </Grid.Col>
                  <Grid.Col md={4}>
                    Gay
                  </Grid.Col>
                </Grid.Row>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <Card>
              <Table className="card-table table-vcenter">
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
                    <Table.Col>Jonny Bongo</Table.Col>
                    <Table.Col>Delivery</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:26</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:31</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1235</Table.Col>
                    <Table.Col>Suckdeep Hardik</Table.Col>
                    <Table.Col>Post</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:28</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1236</Table.Col>
                    <Table.Col>Mike Hunt</Table.Col>
                    <Table.Col>Delivery</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:31</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>1237</Table.Col>
                    <Table.Col>Chingchong Longdong</Table.Col>
                    <Table.Col>Post</Table.Col>
                    <Table.Col className="text-right">2018-08-04 17:34</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
                    <Table.Col className="text-right">-</Table.Col>
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
