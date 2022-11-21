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
      <header className="hero">
        {language && (
          <h2 className="text-4xl my-4 capitalize"><span className="bg-green-300">{language}!</span> I'm Mark, a developer based in Melbourne, Australia</h2>
        )}
        <p className='text-5xl'>
          I’m an ambitious and creative JavaScript developer. My goal is to make software that people enjoy using, and have fun doing it
        </p>

        <div className="flex space-x-4 mt-5 items-center">
          <a className="font-semibold text-2xl p-2 rounded-lg bg-green-300 border-solid border-green-300" href="#">View Linkedin</a>
          <a className="font-semibold text-2xl p-2 rounded-lg border-solid border-2 border-slate-900" href="#">View Github</a>
        </div>
      </header>
      <main>
        <section>
          <p className='text-2xl'>
            In 2017, I decided that I wanted to become serious about becoming a full
            time developer. I joined the Web Development bootcamp at General Assembly
            so I could learn the fundamentals of software development and find my
            first web development job.
          </p>
          <p className='text-2xl'>
            I have since worked for A Cloud Guru (now Pluralsight) as a full stack
            software engineer where I worked with Serverless, React, GraphQL and a
            handfuld of AWS cloud solutions.
          </p>
          <p className='text-2xl'>I am currently looking for my next role – Want to hire me?</p>
        </section>
      </main>
    </Layout>
  )
}

export default Home
