import Header from '../components/header';
import styles from './index.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}