import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
export default () => (
  <h1
    style={{
      backgroundColor: '#37a99a',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      textAlign: 'center'
    }}
  >
    <Link to="/">
      <Logo />
    </Link>
  </h1>
)
