import React from 'react'
import "./About.css"
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
        <Helmet>
            <title>My website About</title>
            <meta name='description' content='This is the about page for My Website'></meta>
            <link rel='canonical' href='/about' ></link>
        </Helmet>
        <main>
            <h2>Learn all about us</h2>
            <p>There is so much to learn. Take a seat</p>
        </main>
    </>

  )
}
