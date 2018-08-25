import React from "react";
import { Badge, Button, Card, Form, Grid, Page, Table } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderListCard from "./OrderListCard";
import KeyDetailsCard from "./KeyDetailsCard";

function ProcessedOrdersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Processed Orders">
        <Grid.Row>
          <Grid.Col md={4}>
            <OrderDetailsCard
              cardTitle="Order #1234 | Delivery"
              mapPlaceholder="../images/staticmap.png"
              name="Jonny Bongo"
              address={{
                line1: "Stamford Street Apartments, 127 Stamford Street, London, SE1 9NQ [link to Google Maps]",
              }}
              details={[
                { title: "Username", content: "jonny@bongo.com" },
                { title: "Phone", content: "+44 7858 375043" },
                { title: "No. of keys on order", content: "2" },
                { title: "Delivery cost", content: "£12.51" },
                { title: "Total order value", content: "£49" },
              ]}
              description={`Instead of "Description" put an order notes text input field here called "Order notes".`}
              children={
                <div>
                  <Button block disabled color="success">Cut &amp; Packaged (courier requested)</Button>
                  <Button block color="danger">Delivered</Button>
                  <hr />
                  <Form.Group label="Refund">
                    <Form.InputGroup>
                      <Form.Input placeholder="0.00" />
                      <Form.InputGroupAppend>
                        <Button color="primary">Submit</Button>
                      </Form.InputGroupAppend>
                    </Form.InputGroup>
                  </Form.Group>
                </div>
              }
            />
          </Grid.Col>
          <Grid.Col md={8}>
            <KeyDetailsCard />
            <KeyDetailsCard />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <OrderListCard />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default ProcessedOrdersPage;
