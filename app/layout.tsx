import './globals.css';

import { authOptions } from '../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

import SessionProvider from '@/components/SessionProvider';
import Login from '@/components/Login';
import SideBar from '@/components/SideBar';

import { Roboto_Condensed, Cabin } from 'next/font/google';
import ClientProvider from '@/components/ClientProvider';

const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const cabin = Cabin({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

export const metadata = {
  title: 'Yu-Kno | AI Assistant',
  description: 'AI Messenger App powered by chatGPT',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${cabin.variable} font-cabin`}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='max-w-xs h-screen overflow-y-auto sm:block md:min-w-[16rem] '>
                <SideBar />
              </div>
              <ClientProvider />
              <div className='bg-neutral-900 flex-1 text-white'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
