import { AppProps } from "next/app";

import ScrollObserver from "../components/scroll-observer";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps}/>
    </ScrollObserver>
  )
}

export default MyApp;
