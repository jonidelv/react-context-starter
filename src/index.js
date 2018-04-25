import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from 'utils/registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from 'routes'
import AppState from 'state'
import 'styles/normalize.css'
import 'styles/globalStyles'

// react-toastify config
import { style } from 'react-toastify'
style({
  colorSuccess: 'verde',
})

render(
  <AppState>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </AppState>,
  document.getElementById('root')
)
registerServiceWorker()
