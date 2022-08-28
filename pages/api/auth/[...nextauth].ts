import NextAuth, {NextAuthOptions} from 'next-auth'
import DiscordProvider from "next-auth/providers/discord"

const scopes = ['identify'].join(' ')

export const authOptions: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorization: {params: {scope: scopes}},
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            return session
        }
    }
}

export default NextAuth(authOptions);