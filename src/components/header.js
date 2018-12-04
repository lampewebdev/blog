import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

export default () => (
  <h1
    style={{
      backgroundColor: '#339E90',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '15px',
      textAlign: 'center'
    }}
  >
    <Link to="/">
      <Logo />
    </Link>
  </h1>
)
