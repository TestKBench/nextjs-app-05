import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS App 01 - Home</title>
        <meta name="description" content="Sample NextJS application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NextJS App 01
        </h1>
        <p className={styles.description}>
          Running on Next.js 15 with Pages Router
        </p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about this application</p>
          </Link>

          <Link href="/products" className={styles.card}>
            <h2>Products &rarr;</h2>
            <p>View our product catalog</p>
          </Link>
        </div>
      </main>
    </>
  )
}
