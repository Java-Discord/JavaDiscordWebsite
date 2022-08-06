import Head from "next/head";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

import ruleStyles from "/styles/rules.module.css";

export default function HomePage() {
    return (
        <div className="mainBody">
            <Head>
                <title>Java Discord - Rules</title>
            </Head>
                <Navbar/>
                    <div className={ruleStyles.rulesTitle}>
                        <h1>SERVER RULES</h1>
                    </div>
                    <div className={ruleStyles.rulesContainer}>
                        <div className={ruleStyles.rule}>
                            <p id="1"><b className={ruleStyles.ruleNumber}>#1</b> No spamming, trolling, insults, advertising or NSFW
                                content. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="2"><b className={ruleStyles.ruleNumber}>#2</b> Do not attack or insult people based on their
                                ethnicity, nationality, sex, gender, sexual orientation, religion or disabilities. Violators
                                will be banned from the server and, in extreme cases, might be reported to Discord. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="3"><b className={ruleStyles.ruleNumber}>#3</b> Listen to instructions given by our team. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="4"><b className={ruleStyles.ruleNumber}>#4</b> Usernames are to be kept in an easily mentionable
                                way. For instance, <b className="specialWord">߶௵᧫៷</b> is not easily mentionable and should
                                therefore be changed. <br/> <a style={{color: "#ff212d"}} href="https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames#h_01EJTEHFA19Q5BK1GQY2XJ2ZJS"
                                                              target="_blank">➔ Read More</a></p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="5"><b className={ruleStyles.ruleNumber}>#5</b> Do not ask for help with projects that break rules
                                and/or <a style={{color: "#ff212d"}} href="https://discord.com/terms" target="_blank">Discord’s TOS</a>.
                                This also includes projects that break laws. Do not request help with ongoing exams. Do not
                                provide or request direct solutions to graded assignments, general guidance is fine. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="6"><b className={ruleStyles.ruleNumber}>#6</b> Keep everything in English to the best of your
                                ability, specific threads might be exempt from this.</p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="7"><b className={ruleStyles.ruleNumber}>#7</b> If you need help, use one of the available help channels. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="8"><b className={ruleStyles.ruleNumber}>#8</b> Before asking questions, check out
                                <b className="specialWord">#❗︱how-to-get-help</b> and only DM people for help that have
                                the <b className="specialWord">@DMs Welcome!</b> role. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="9"><b className={ruleStyles.ruleNumber}>#9</b> Don't ping specific users for help. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="10"><b className={ruleStyles.ruleNumber}>#10</b> Do not expect us to do your homework. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="11"><b className={ruleStyles.ruleNumber}>#11</b> Political or religious debates shouldn't take place on this server. </p>
                        </div>
                        <div className={ruleStyles.rule}>
                            <p id="12"><b className={ruleStyles.ruleNumber}>#12</b> Follow Discord’s <a style={{color: "#ff212d"}} href="https://discord.com/guidelines" target="_blank">Community Guidelines</a> and <a style={{color: "#ff212d"}} href="https://discord.com/terms" target="_blank">Terms of Service</a>. </p>
                        </div>
                    </div>
                <Footer/>
        </div>
    )
}