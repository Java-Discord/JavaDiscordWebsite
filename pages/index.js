import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {Navbar} from "../components/Navbar";
import indexStyles from '/styles/index.module.css'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Java Discord - Java Community on Discord</title>
            </Head>
            <body>
                <Navbar/>
                {/* INTRODUCTION */}
                <div className={indexStyles.introductionContainer}>
                    <div className={indexStyles.introductionText}>
                        <h1>HELP. <b style={{color: "#ff212d"}}>CODE.</b> LEARN.</h1>
                        <p className={[indexStyles.paragraph, indexStyles.introductionParagraph].join(" ")}>With over 14,500 Members and 50,000 Messages sent each month, join one of the biggest Java Communities on Discord to help, get help and discuss programming in Java.</p>
                        <a href="/r/join" target="_blank" className={indexStyles.introductionJoinBtn}>Join</a>
                    </div>
                    <div className={indexStyles.introductionImage}>
                        <Image src={"/images/Channels.png"} alt={"Image showing a selection of Discord-Channels available on the Java-Discord."} width="85%" height="60%" layout="responsive" objectFit="contain"/>
                    </div>
                </div>
                {/* DATA/STATS */}
                <div className={indexStyles.dataContainer}>
                    <div className={indexStyles.dataField}>
                        <p>1,200+</p>
                        <p className={indexStyles.dataFieldSubtitle}>active users¹</p>
                    </div>
                    <div className={indexStyles.dataField}>
                        <p>14,500+</p>
                        <p className={indexStyles.dataFieldSubtitle}>members</p>
                    </div>
                    <div className={indexStyles.dataField}>
                        <p>12,500+</p>
                        <p className={indexStyles.dataFieldSubtitle}>messages each week²</p>
                    </div>
                </div>
                {/* QOTW */}
                <div className={indexStyles.qotwContainer}>
                    <div className={indexStyles.qotwText}>
                        <h1>MEET QUESTION OF THE WEEK</h1>
                        <p className={[indexStyles.paragraph, indexStyles.qotwParagraph].join(" ")}>Question Of The Week is a weekly Java-related question you can answer and be awarded points for. Check it out in <b className="specialWord">#❓︱question-of-the-week</b> on the Java Discord.</p>
                        <Link href="/qotw" target="_blank"><a className={[indexStyles.paragraph, indexStyles.qotwLearnMore].join(" ")}>🡺 LEARN MORE</a></Link>
                    </div>
                    <div className={indexStyles.qotwImage}>
                        <Image src={"/images/QOTWLeaderboard.png"} alt={"Image showing a mockup QOTW-Leaderboard."} width="65%" height="70%" layout="responsive" objectFit="contain"/>
                    </div>
                </div>
                {/* PARTNERS */}
                <div className={indexStyles.partnerContainer}>
                    <h1>WITH SUPPORT FROM</h1>
                    <div className={indexStyles.partnerLogos}>
                        <a href="/r/nordvpn" target="_blank"><img src="/images/nordvpn.svg" alt="NordVPN Logo"/></a>
                        <a href="/r/jetbrains" target="_blank"><img src="/images/jetbrains.svg" alt="JetBrains Logo"/></a>
                        <a href="/r/discord4j" target="_blank"><img src="/images/discord4j.svg" alt="Discord4J Logo"/></a>
                    </div>
                </div>
                {/* FOOTER */}
                <div className={indexStyles.footerContainer}>
                    <div className={indexStyles.footerLeft}>©️ 2022 JavaDiscord <br/> JavaDiscord is not affiliated, associated, or endorsed with/by Discord or Oracle.</div>
                    <div className={indexStyles.footerRight}>¹ Users that sent a message in the last month, data gathered from Discord's Insight page. <br/> ² Data gathered from Discord's Insight page.</div>
                </div>
            </body>
        </>
    )
}
