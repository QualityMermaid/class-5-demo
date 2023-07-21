import React from 'react'
import "./Home.css"
import { Helmet } from 'react-helmet-async'


export default function Home() {
    return (      
        <>
            <Helmet>
                <title>My website Home Page</title>
                <meta name='description' content='This is the Home page for My Website'></meta>
            </Helmet>
            <main>
                <h2> This is the home page</h2>
                <p> Stuff</p>
            </main>
        </>
    )
}
