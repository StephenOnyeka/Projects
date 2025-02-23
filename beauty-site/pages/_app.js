import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Loading from "@/components/loading";

import Layout from "@/components/Layout";

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
    const title = `Lenis | ${
      pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
    }`;

  return (
    <Layout>
      <Head>
        {/* <link rel="icon" href="/lenis.png" /> */}
        <link rel="icon" href="/lenisnobg.png" />
        <title>{pageTitle === "" ? "Lenis" : title}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
