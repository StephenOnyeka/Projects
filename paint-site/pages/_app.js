import "@/styles/globals.css";
import "@/styles/styles.css";
import Head from "next/head";
import { useRouter } from "next/router";

import AosProvider from "@/components/aos-provider";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pageTitle = router.pathname.replace("/", ""); // Removes leading slash
  const title = `Paint | ${
    pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
  }`;

  return (
    <AosProvider>
      <Head>
        {/* <link rel="icon" href="/paint.png" /> */}
        <link rel="icon" href="/images/AP4.jpg" />
        <title>{pageTitle === "" ? "Paint" : title}</title>
      </Head>
      <Layout>
        {/* No loader and no transition on this wrapper. Every route here is a
            static page that Next prefetches, so a click can render straight
            away; the old setup put a timer in front of that and then faded the
            whole tree in from opacity 0, which meant the navbar and all the
            static content were held back too. Keyed on the path so each route's
            own entrance animations still replay on navigation. */}
        <div key={router.asPath}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </AosProvider>
  );
}
