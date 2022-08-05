import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/Header/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/wesley-miranda-a04544185/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="wesleyubuntujs@gmail.com" 
        />
      </Content>
    </Container>
  )
}
