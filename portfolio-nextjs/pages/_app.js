import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";
import "@/styles/nav.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
