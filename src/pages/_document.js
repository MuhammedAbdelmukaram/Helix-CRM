// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Add your Google Fonts link here */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
                        rel="stylesheet"
                    />
                    {/* Any other head content */}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
