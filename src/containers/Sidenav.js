import React, { PureComponent, Fragment } from 'react'
import tokenService from 'services/token'
import { history } from 'routes'
import styled from 'styled-components'
import appContext from 'utils/appContext'

const { Consumer } = appContext

class Sidenav extends PureComponent {
  logout = () => {
    tokenService.delete()
    history.replace('/login')
  }

  render() {
    return (
      <AppContainer>
        <ContentWrapper>
          <div>
            <header className="App-header">
              <h1 className="App-title">Welcome to Dashboard</h1>
              <button onClick={this.logout}>Logout</button>
            </header>
            <div className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              <br />
              <Consumer>
                {({ state, actions }) => (
                  <Fragment>
                    <span>{state.number}</span>
                    <button onClick={actions.mutNumber}>+</button>
                  </Fragment>
                )}
              </Consumer>
            </div>
          </div>
        </ContentWrapper>
      </AppContainer>
    )
  }
}

export default Sidenav

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: red;
`

const ContentWrapper = styled.div`
  display: flex;
  background-color: #eeeeee;
  flex: 1;
  overflow-y: scroll;
  padding: 30px;
`
