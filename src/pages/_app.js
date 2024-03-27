// src/pages/_app.js
import "../styles/globals.css"; // Make sure the path is correct
import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" /> {/* Link to your favicon */}
        {/* Any other head elements (e.g., title or meta) can also be included here */}
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
