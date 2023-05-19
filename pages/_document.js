import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="ko">
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap"
              rel="stylesheet"
            />
            <link rel="icon" type="image/png" href="/images/favicon.png"></link>
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