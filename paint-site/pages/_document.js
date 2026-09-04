import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        {/* AOS keeps [data-aos] elements at opacity 0 until it can reveal them,
            so without JavaScript that content would never appear at all. */}
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
