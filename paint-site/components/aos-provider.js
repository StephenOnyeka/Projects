import { useEffect } from "react";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 * AOS is a singleton, so it is initialised here once for the whole app instead
 * of inside every page. Each `AOS.init()` call registers its own scroll,
 * resize and orientationchange listeners and never removes them, so the old
 * per-page setup stacked a fresh set on every navigation.
 *
 * The re-measuring below is the part that fixes trigger points. AOS caches
 * each element's scroll offset when it initialises and only recalculates it on
 * resize - a plain scroll compares against those cached numbers. So anything
 * that changes the page height afterwards (a lazily decoded next/image, the
 * webfont swapping in, an accordion opening) leaves every offset below it
 * stale, and sections start firing hundreds of pixels early or scroll past
 * without firing at all.
 */
export default function AosProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80, // reveal once the element is 80px inside the viewport
      once: true, // and never fade it back out on the way up
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  // Re-measure once the page has finished loading and again whenever its
  // height changes, so cached offsets can never drift out of date.
  useEffect(() => {
    let frame = 0;
    const remeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => AOS.refresh());
    };

    window.addEventListener("load", remeasure);

    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(remeasure);
    observer?.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", remeasure);
      observer?.disconnect();
    };
  }, []);

  // A client-side navigation swaps the whole tree, so AOS has to rebuild its
  // element list - refresh() on its own would keep measuring the old nodes.
  useEffect(() => {
    const rebuild = () => requestAnimationFrame(() => AOS.refreshHard());

    router.events.on("routeChangeComplete", rebuild);
    return () => router.events.off("routeChangeComplete", rebuild);
  }, [router.events]);

  return children;
}
