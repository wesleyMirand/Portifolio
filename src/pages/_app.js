import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp ({ Component, pageProps}) {
        return (
        <>
        <Head>
            <title>Perfil | Vip</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        </>
        )
    }

export default MyApp
