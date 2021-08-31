import "tailwindcss/tailwind.css";
import DefaultComps from "./DefalutComps/DefaultComps";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultComps>
      <Component {...pageProps} />
    </DefaultComps>
  );
}

export default MyApp;
