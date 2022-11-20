import { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => {
  const [language, setLanguage] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const languages = ['Hola', 'Guten Tag', 'Salve', 'olá', 'nǐn hǎo', 'Hej', 'Hello', 'Salut'];
    const language = languages[Math.floor(Math.random() * languages.length)]
    setLanguage(language)
    setLoading(false)
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mark Christiansen | Software Developer</title>
      </Head>
      <header>
        {language && (
          <h2>{language}! I'm Mark, a developer based in Melbourne, Australia</h2>
        )}
        <p>
          In 2017, I decided that I wanted to become serious about becoming a full
          time developer. I joined the Web Development bootcamp at General Assembly
          so I could learn the fundamentals of software development and find my
          first web development job.
        </p>
        <p>
          I have since worked for A Cloud Guru (now Pluralsight) as a full stack
          software engineer where I worked with Serverless, React, GraphQL and a
          handfuld of AWS cloud solutions.
        </p>
        <p>I am currently looking for my next role – Want to hire me?</p>

        <a href="#">View Linkedin</a>
        <a href="#">View Github</a>
      </header>
      <main></main>
    </Layout>
  )
}

export default Home
