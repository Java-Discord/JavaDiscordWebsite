import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import React from "react";

import navbarStyles from '/styles/navbar.module.css'

export const Navbar = () => {
    const router = useRouter();

    return (
        <div className={navbarStyles.navbar}>
            <Image src="/images/ServerLogo.png" alt="JavaDiscordLogo" width={95} height={95} />
            <button className={navbarStyles.hamburger}>
                <FontAwesomeIcon icon={faBars}/> {/* TODO: Implement */}
            </button>
            <ul className={navbarStyles.navUl}>
                <li>
                    <Link href="/">
                        <a className={router.pathname === "/" ? navbarStyles.activeLink : ""}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rules">
                        <a className={router.pathname === "/rules" ? navbarStyles.activeLink : ""}>
                            Rules
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/soon">
                        <a className={router.pathname === "/soon" ? navbarStyles.activeLink : ""}>
                            Coming soon!
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={navbarStyles.navRight}>
                <a href="/r/github" target="_blank" className={navbarStyles.socialBtn}><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                <a href="/r/twitter" target="_blank" className={navbarStyles.socialBtn}><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                <a href="https://discord.com/invite/X3NmMgzFKF" target="_blank" rel="noopener" className={navbarStyles.joinBtn}>Join</a>
            </div>
        </div>
    )
}