import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import createBrowserHistory from 'history/createBrowserHistory'
import { ToastContainer } from 'react-toastify'
import { toasterLiveTime } from 'utils/constants'
import { PrivateRoute } from 'components'
import { Sidenav, Login } from 'containers'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Content>
          <ToastContainer
            autoClose={toasterLiveTime}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            pauseOnHover={true}
          />
          <Switch>
            <Route exact={true} path={'/login'} component={Login} />
            <PrivateRoute exact={false} path={'/'} component={Sidenav} />
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

// Styles
const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

export default Routes
