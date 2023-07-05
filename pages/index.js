import Head from "next/head";
import HomePage from "Components/HomePage";
export default function Home() {
  return (
    <>
      <Head>
        <title>Rakha Estate</title>
        <meta name="description" content="Rakha Estate" />
        <link rel="icon" href="/fanoos.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
