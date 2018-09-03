import * as React from "react";
import cn from "classnames";
import { Card, Media, Grid, Header } from "tabler-react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * The Card title
   */
  +cardTitle?: string,
  /**
   * The contacts name
   */
  +name?: string,
  /**
   * The contacts address
   */
  +address?: {| +line1?: string, +line2?: string |},
  /**
   * An array of contacts details displayed in a 2 column Grid
   */
  +details?: Array<{| +title: string, +content?: React.Node |}>,
  /**
  * A text area
  */
  +notes?: React.Node,
|};

/**
 * Renders a Card designed for displaying details of a person or business
 */
function OrderDetailsCard({
  children,
  className,
  cardTitle,
  name,
  address,
  details,
  notes,
}: Props) {
  const cardClassName = cn(className);
  return (
    <Card className={cardClassName} title={cardTitle}>
      <Card.Body>
        <Media className="mb-5">
          <Media.Body>
            {name && <Header.H5>{name}</Header.H5>}
            {address && (
              <address class="text-muted small">
                {address.line1}
                {address.line2 && <br />}
                {address.line2}
              </address>
            )}
          </Media.Body>
        </Media>
        {details && (
          <Grid.Row>
            {details.map((d, i) => (
              <Grid.Col width={6} key={i}>
                <Header.H6>{d.title}</Header.H6>
                <p>{d.content}</p>
              </Grid.Col>
            ))}
          </Grid.Row>
        )}
        {notes}
        {children}
      </Card.Body>
    </Card>
  );
}

export default OrderDetailsCard;
