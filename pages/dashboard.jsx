import Layout from '../components/Layout';
import { getTopTracks } from '../lib/spotify';

export async function getStaticProps() {
  const response = await getTopTracks();
  const { items } = await response.json();
  const tracks = items.map((track) => ({
    artists: track.artists.map((artist) => artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));


  return {
    props: {
      tracks
    },
  }
}


const Dashboard = ({ tracks }) => {

  const displayTracks = tracks.map((track, idx) => {
    return (
      <li className="flex-row pb-4 pt-4 border-solid border-2 slate-900" key={idx}>
        <span>{idx + 1}</span>
        <a href={track.songUrl}>{track.artists}</a>
        <p>{track.title}</p>
      </li>
    )
  })


  return (
    <Layout>
      <h1 className="bold text-3xl md:text-5xl">Dashboard</h1>
      <ol className='flex flex-col'>
        {displayTracks}
      </ol>

    </Layout>
  )
}

export default Dashboard