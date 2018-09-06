// attempting to create a component that will call the api, store info and pass
// the info to KeyDetailsCard.js and OrderDetailsCard.js.

import React from "react";

class RetrieveOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      error: null,
    };
  }

  return (
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
  )
}

export default RetrieveOrder;
