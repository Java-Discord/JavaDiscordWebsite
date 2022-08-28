import React from "react";
import Head from "next/head";
import type {GetServerSideProps} from 'next'
import {signIn, signOut, useSession} from 'next-auth/react'
import {unstable_getServerSession} from "next-auth";

import {authOptions} from "./api/auth/[...nextauth]"
import profileStyles from '/styles/profile.module.css';
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {DiscordUser} from "../utils/Types";

type Props = {
    discordUser: DiscordUser;
}

const Profile: React.FC<Props> = (props) => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            signIn('discord')
        },
    }
    )
    if(session) {
        return (
            <div>
                <Head>
                    <title>Java Discord - Java Community on Discord</title>
                </Head>
                <Navbar/>
                <button onClick={() => signOut()}>Sign Out</button>
                <Footer/>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>Java Discord - Java Community on Discord</title>
            </Head>
            <Navbar/>
            <h1 className={profileStyles.loggingIn}>Logging you in...</h1>
            <Footer/>
        </>
    )
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    if(session) {
        const res = await fetch('https://discord.com/api/users/@me',{
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        })
        const user = await res.json()

        return {
            props: {
                discordUser: user
            }
        }
    }
    return {
        props: {}
    }
}

export default Profile;
