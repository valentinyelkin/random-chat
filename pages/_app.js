import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress';
import AuthProvider from "../src/context/auth-context";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <AuthProvider>
      <Layout>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
