import * as React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/main.scss'

export const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
