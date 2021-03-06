import React from "react";
import { Card, Table } from "tabler-react";
import Api from "../components/api";

class OrderListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      error: null,
    };
  }

  handleClick() {
    console.log('Success!')
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    Api.backend(this.props.endpoint).getData()
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
      if (results[i].cut_packaged === null) {
        results[i].cut_packaged = "-";
      }
      if (results[i].completed === null) {
        results[i].completed = "-";
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
        <Table className="card-table">
          <Table.Header>
            <Table.ColHeader>ID</Table.ColHeader>
            <Table.ColHeader>Username</Table.ColHeader>
            <Table.ColHeader>Type</Table.ColHeader>
            <Table.ColHeader className="text-right">Received</Table.ColHeader>
            <Table.ColHeader className="text-right">Cut & Packaged</Table.ColHeader>
            <Table.ColHeader className="text-right">Completed</Table.ColHeader>
          </Table.Header>
          <Table.Body>
            {results.map(result =>
              <Table.Row onClick={this.handleClick}>
                <Table.Col>{result.id}</Table.Col>
                <Table.Col>{result.username}</Table.Col>
                <Table.Col>{result.type}</Table.Col>
                <Table.Col className="text-right">{result.received}</Table.Col>
                <Table.Col className="text-right">{result.cut_packaged}</Table.Col>
                <Table.Col className="text-right">{result.completed}</Table.Col>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card>
    )
  }
}

export default OrderListCard;
