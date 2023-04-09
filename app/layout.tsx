import './globals.css'
import { Roboto_Condensed, Cabin } from 'next/font/google'

const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const cabin = Cabin({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cabin'
})

export const metadata = {
  title: 'Yu-Kno | AI Assistant',
  description: 'AI Messenger App powered by chatGPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${cabin.variable} font-cabin`}>
        <div className='flex'>
          {/* sidebar */}
          {/* client provider */}
          <div className='bg-neutral-900 flex-1 text-white'>{children}</div>
        </div>
      </body>
    </html>
  )
}
