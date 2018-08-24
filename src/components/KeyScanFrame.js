import React from "react";
import { Button, Card } from "tabler-react";

function KeyScanFrame() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Key Scan</Card.Title>
        <Card.Options>
          <Button color="danger" size="sm" className="ml-4">Clear points</Button>
          <Button color="primary" size="sm" className="ml-4">Side 1</Button>
          <Button color="secondary" size="sm" className="ml-2">Side 2</Button>
        </Card.Options>
      </Card.Header>
      <Card.Body>
        <img src="https://tabler.github.io/tabler/demo/photos/grant-ritchie-338179-500.jpg" />
      </Card.Body>
    </Card>
  );
}

export default KeyScanFrame;
