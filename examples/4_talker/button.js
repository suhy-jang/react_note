import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      // <Button /> is not an HTML-like JSX element; it’s a component instance.
      // Names like onClick only create event listeners if they’re used on
      // HTML-like JSX elements. Otherwise, they’re just ordinary prop names. 
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
