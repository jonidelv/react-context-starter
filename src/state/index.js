import React, { Component } from 'react'
import appContext from 'utils/appContext'

const { Provider } = appContext
const initialState = {
  number: 1,
}

class AppState extends Component {
  state = initialState

  mutNumber = () => {
    this.setState({
      ...this.state,
      number: this.state.number + 1,
    })
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            mutNumber: this.mutNumber,
          },
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default AppState
