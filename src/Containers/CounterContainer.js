import React from 'react';
import Counter from '../Components/Counter'
import {increment} from '../actions/countActions'
import {connect} from 'react-redux'

class CounterContainer extends React.Component {
  state = {
    count: 0
  }

  handleIncrement = (event) => {
    this.setState({
      count: this.state.count + 1
    })
  }


  handleDecrement = (event) => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const {count} = this.state
    const {handleIncrement} = this.props

    return (
      <Counter
        count={count}
        handleDecrement={this.handleDecrement}
        handleIncrement={this.handleIncrement}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    handleIncrement: () => dispatch(increment())
  }
}

export default connect(null, mapDispatchToProps)(CounterContainer)

