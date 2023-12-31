import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    // signIn: "𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐚𝐩𝐩𝐯𝐞𝐫𝐜𝐞𝐥𝐚𝐩𝐩/𝐥𝐨𝐠𝐢𝐧",
    // signIn: "https://pc-assember-pro.vercel.app/login",
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
