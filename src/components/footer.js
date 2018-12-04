import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = styled.div`
  background-color: #339E90;
  color: #F7F7F7;
  height: 50px;
  margin-top: -50px;
  padding-right: 15px;
  padding-left: 15px;

  a {
    float: right;
    padding-left: 5px;
    svg {
      color: white;
      font-size: 40px;
      padding-top: 5px;
    }
  }
`

export default () => (
  <Footer>
    <a href="https://www.instagram.com/lampewebdev/" target="_blank" >
      <FaInstagram />
    </a>
    <a href="https://github.com/lampewebdev" target="_blank" >
      <FaGithub />
    </a>
    <a href="https://twitter.com/lampewebdev" target="_blank">
      <FaTwitter />
    </a>
  </Footer>
)
