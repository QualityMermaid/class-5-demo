import React from 'react'
import "./Contact.css"
import { Helmet } from 'react-helmet-async'


export default function Contact() {
  return (
    <>
      <Helmet>
        <title>My website Contact Page</title>
        <meta name='description' content='This is the contact page for My Website'></meta>
      </Helmet>
      <main>
        <h2>Get im touch</h2>
        <p>Stuff</p>
      </main>
    </>
  )
}
