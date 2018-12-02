import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
export default () => (
  <h1
    style={{
      backgroundColor: '#37a99a',
      paddingTop: '10px',
      paddingBottom: '10px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    }}
  >
    <Link to="/">
      <Logo />
    </Link>
  </h1>
)
