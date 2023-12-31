import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-proovider'
const inter = Inter({ subsets: ['latin'] })
//  start from here
export const metadata: Metadata = {
  title: 'Faheem Ecomerce store',
  description: 'Store of the Art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        <ToastProvider/>
        {children}

      </body>
    </html>
    </ClerkProvider> 
  )
}
