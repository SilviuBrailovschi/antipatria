import Head from "next/head";
import Home from "./home";

export default function MyApp() {
  return (
    <>
      <Head>
        <title>Antipatria's Perfection</title>
        <meta
          name="description"
          content="High quality cold pressed olive oil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/antipatriaFav.png" />
      </Head>
      <Home />
    </>
  );
}
