import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto_Slab, Playfair_Display } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoSlab.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
