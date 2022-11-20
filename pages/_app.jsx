import '../styles/globals.css'
import { Noto_Sans } from '@next/font/google'

const noto = Noto_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap"
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --noto-font: ${noto.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
