import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-zinc-900 min-h-screen text-stone-300 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
