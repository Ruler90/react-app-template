import React, { Component } from 'react';

class ExampleP extends Component {
    state = { user: 'John' }

    render() {
      return (
        <p>How are you, {this.state.user}?</p>
      );
    }
}

export default ExampleP;
