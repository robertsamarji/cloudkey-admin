import React from "react";
import { Badge, Button, Card, Form, Grid, Page, Table } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import OrderDetailsCard from "./OrderDetailsCard";
import OrderListCard from "./OrderListCard";
import KeyDetailsCard from "./KeyDetailsCard";
import Pagination from "../components/Pagination";

function NewOrdersPage() {
  return (
    <SiteWrapper>
      <Page.Content title="New Orders">
        <Grid.Row>
          <Grid.Col md={4}>
            <OrderDetailsCard
              cardTitle="Order #1 | Delivery"
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
              notes={
                <Form.Group label={<Form.Label aside="56/100">Notes</Form.Label>}>
                  <Form.Textarea
                    defaultValue="Perhaps only useful for stating refund reasons. Can't think why else it'd be useful."
                    name="notes-textarea"
                    placeholder="Notes about this order..."
                    rows={5}
                  />
                </Form.Group>
              }
              children={
                <div>
                  <Button block color="success">Cut &amp; Packaged (request courier)</Button>
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
            <OrderListCard endpoint={"list-new-key-orders"} />
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

export default NewOrdersPage;
