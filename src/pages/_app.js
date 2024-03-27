// src/pages/_app.js
import "../styles/globals.css"; // Make sure the path is correct
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
