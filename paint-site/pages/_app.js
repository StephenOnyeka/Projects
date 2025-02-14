import "@/styles/globals.css";
import "@/styles/styles.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Loading from "@/components/loading";

// import AOS from "aos";
// import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  if (loading) {
    return <Loading />;
  }

  const pageTitle = router.pathname.replace("/", ""); // Removes leading slash
  const title = `Paint | ${
    pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
  }`;
  return (
    <Layout>
      <Head>
        {/* <link rel="icon" href="/paint.png" /> */}
        <link rel="icon" href="/images/AP4.jpg" />
        <title>{pageTitle === "" ? "Paint" : title}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
