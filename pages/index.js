import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Homepage-Mini Project">
    <div className={styles.container} >
      <h1>Mini Project
      </h1>
    </div>
    </Layout>
  )
}
