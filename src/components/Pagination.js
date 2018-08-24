import React from "react";
import { Button, Icon } from "tabler-react";

function Pagination() {
  return (
    <Button.List align="center">
      <Button outline color="secondary" icon="chevron-left">Previous</Button>
      <Button outline color="secondary">Next <Icon name="chevron-right" /></Button>
    </Button.List>
  );
}

export default Pagination;
