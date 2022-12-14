import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adapta A1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Introducing Adapta
        </h1>

        <p className={styles.description}>
          Adapta is the next generation of HTML phone one replit based off Coding's Cheesgle Byte one.
          We strive to deliver the best next gen features to users and developers for fun, to test ideas
          and the boundaries of design. Focus less on finding your files with our devtools.
        </p>

        <div style={{ height: "15vh" }}></div>

        <div className={styles.phone}>
          <div className={styles.frame}>
            <iframe src="/os/kernel.html"></iframe>
          </div>
          <div className={styles.power}>
            {/* power button */}
          </div>
          <div className={styles.volume}>
            {/* volume */}
          </div>
        </div>
        <div style={{ height: "15vh" }}></div>

        {/* <button class="primary">
          <span></span>
          <a>Oh cool!</a>
        </button> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
