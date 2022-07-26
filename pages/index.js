import Head from "next/head"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "..//components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lotto 69</title>
                <meta name="description" content="Our smart contract raffle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
