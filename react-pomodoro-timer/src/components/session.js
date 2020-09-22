import React from 'react';

class Session extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 25
      };
      this.increment=this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
      increment() {
        this.setState({
          count: this.state.count + 1
        })
      }
  
      decrement() {
        if (this.state.count !== 1) {
          this.setState({
            count: this.state.count - 1
          })
        }
      }
  
      reset() {
        this.setState({
          count:0
        })
      }
  
    render() {
      return (
        <div>
        <h1>Session Length </h1>
          <div id="breakbuttons">
          <button className='inc' onClick={this.increment}>+</button>
          <span>{this.state.count}</span>
          <button className='dec' onClick={this.decrement}>-          </button>
           </div>
        </div>
      );
    }
  };
  
  //ReactDOM.render(<Session /> , document.getElementById("sess_count"));
  export default Session;