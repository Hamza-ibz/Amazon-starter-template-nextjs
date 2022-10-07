import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import Providers from "next-auth/providers"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)

// 705447448029-jucof473s16746ae0svnc3b7027rvb70.apps.googleusercontent.com
// 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