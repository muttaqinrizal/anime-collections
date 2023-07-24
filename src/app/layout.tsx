"use client";
import { Inter } from 'next/font/google'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] })

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}