import "@/styles/globals.css";
import "@/styles/styles.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import AosProvider from "@/components/aos-provider";
import Layout from "@/components/Layout";
import Loading from "@/components/loading";

// Client-side navigation is usually instant, so swapping the page out for the
// loader straight away turned every link click into a flash of blank screen.
// Only show it if the route is genuinely taking a moment.
const LOADER_DELAY_MS = 350;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // The very first render is left unanimated - the page already has its own
  // entrance animations and stacking a second fade on top of them looks off.
  const [navigated, setNavigated] = useState(false);
  const loaderTimer = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      loaderTimer.current = setTimeout(() => setLoading(true), LOADER_DELAY_MS);
    };
    const handleComplete = () => {
      clearTimeout(loaderTimer.current);
      setLoading(false);
      setNavigated(true);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      clearTimeout(loaderTimer.current);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

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
        {loading ? (
          <Loading />
        ) : (
          <div
            key={router.asPath}
            className={navigated ? "page-enter" : undefined}
          >
            <Component {...pageProps} />
          </div>
        )}
      </Layout>
    </AosProvider>
  );
}
