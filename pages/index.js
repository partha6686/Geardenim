import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GearDenim</title>
        <meta
          name="description"
          content="Geardenim.com - Gear up for the biggest ride of your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline mx-4">Hello world!</h1>
    </div>
  );
}
