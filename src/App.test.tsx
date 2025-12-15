import React from 'react';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store/redux'

test('renders login page when unauthenticated', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Without credentials, guards should land us on the login page.
  expect(screen.getByText(/welcome back/i)).toBeInTheDocument()
})
