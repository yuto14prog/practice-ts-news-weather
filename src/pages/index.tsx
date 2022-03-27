import MainLayout from '../layouts'
import Head from 'next/head';
import Article from '../components/article';
import styles from '../styles/Home.module.scss'
import Nav from '../components/nav';

export default function Home(props) {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title='headline' articles={props.topArticles} />
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const pageSize = 10
  const topRes = await fetch(`https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`)
  const topJson = await topRes.json()
  const topArticles = topJson?.articles

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  }
}