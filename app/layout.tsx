import { Footer } from '@/components/footer'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { ReduxProvider } from '@/redux/provider'
import { Metadata } from 'next'

const poppins = Poppins({weight: ['400', '500', '600', '700', '800'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "Brocante - Votre brocante en ligne.",
  description: "Brocante est un site de brocante en ligne vous proposant une multitude d'objets uniques et vintages.",
  icons: {
    icon: "favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
