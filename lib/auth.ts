import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Correo",
          type: "email",
          placeholder: "correo@gmail.com",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "**********",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Ambos campos son requeridos");
        }

        const userFound = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!userFound) throw new Error("Usuario no hayado");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) throw new Error("Contraseña erronea");

        return {
          id: userFound.id.toString(),
          name: userFound.name || null,
          email: userFound.email || null,
        };
      },
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name || null;
        session.user.email = token.email || null;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    updateAge: 5 * 60,
    maxAge: 60 * 60,
  },
};
