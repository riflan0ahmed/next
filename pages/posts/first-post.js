import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function FirstPet() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
      <br />
      <img />
      <Image
        src="/images/profile.jpg"
        height={400}
        width={600}
        alt="Your Name"
      />
      <br />
      <Layout />
    </>
  );
}
