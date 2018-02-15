import React from 'react';
import renderer from 'react-test-renderer';

import MockAsyncStorage from './helpers/MockAsyncStorage'

const mockStorage = new MockAsyncStorage()
jest.setMock('AsyncStorage', mockStorage)

import App from './App';

describe('App', () => {
  let app

  beforeAll(() => {
    global.fetch = require('jest-fetch-mock')
  })

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify({
      name: 'fakename',
      types: ['lager', 'ipa'],
      abv: .9,
    }))

    rendered = renderer.create(<App />)
  })

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot()
  })

  afterEach(() => {
    fetch.resetMocks()
    mockStorage.clear()
  })
})
