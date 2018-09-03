import React from "react";
import { Card, Table } from "tabler-react";
import Api from "../components/api";

class ScanListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    Api.backend(this.props.endpoint).getKeyScans()
    .then(response =>
      this.setState({
        results: response.data,
        isLoading: false
      })
    )
    .catch(error =>
      this.setState({
        error,
        isLoading: false
      })
    );
  }

  render() {
    const { results, isLoading, error } = this.state;

    for (let i=0; i<results.length; i++) {
      if (results[i].cloudkey_id === null) {
        results[i].cloudkey_id = "-";
        results[i].processed = "-";
      }
    }

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }

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
            {results.map(result =>
              <Table.Row>
                <Table.Col>{result.id}</Table.Col>
                <Table.Col>{result.username}</Table.Col>
                <Table.Col>{result.cloudkey_id}</Table.Col>
                <Table.Col className="text-right">{result.received}</Table.Col>
                <Table.Col className="text-right">{result.processed}</Table.Col>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card>
    );
  }
}

export default ScanListCard;
