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
    <a
      href="https://www.instagram.com/lampewebdev"
      aria-label="instagram"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      href="https://github.com/lampewebdev"
      aria-label="github"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>
    <a
      href="https://twitter.com/lampewebdev"
      aria-label="Twitter"
      target="_blank"
      rel="noreferrer"
    >
      <FaTwitter />
    </a>
  </Footer>
)
