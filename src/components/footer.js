import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  background-color: #339E90;
  color: #F7F7F7;
  height: 50px;
  margin-top: -50px;
  padding-right: 15px;
  padding-left: 15px;

  a {
    float: right;
  }
`

export default () => (
  <Footer>
    <a href="https://www.instagram.com/lampewebdev/" target="_blank" >
      <span class="zocial-instagram"></span>
    </a>
    <a href="https://github.com/lampewebdev" target="_blank" >
      <span class="zocial-github"></span>
    </a>
    <a href="https://twitter.com/lampewebdev" target="_blank">
      <span class="zocial-twitter"></span>
    </a>
  </Footer>
)
