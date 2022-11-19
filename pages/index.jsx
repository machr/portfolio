import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Mark Christiansen | Software Developer</title>
      </Head>
      <header>
        <h2>Software Developer</h2>
        <p className="text-lg">
          Hi I'm Mark. I'm a Software Engineer in Melbourne, Australia.
        </p>
        <p>
          In 2017, I decided that I wanted to become serious about becoming a full
          time developer. I joined the Web Development bootcamp at General Assembly
          so I could learn the fundamentals of software development and find my
          first web development job.
        </p>

        <p>
          After completing the bootcamp, I found my first junior front-end developer
          job at The Australian Football League, working with Vue, Cypress, Jest and
          SCSS
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
    </>
  )
}

export default Home
