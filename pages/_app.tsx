import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '/styles/global.css'

export default function App({ Component, pageProps: {session, ...pageProps}}: AppProps) {
    return(
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}