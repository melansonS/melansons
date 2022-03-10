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
      <body
        className="text-zinc-900 bg-stone-300 transition-colors
                   dark:bg-zinc-900 dark:text-stone-300"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
