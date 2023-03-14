
import { Chakra } from './components/Chakra'
import './globals.css'

export const metadata = {
    title: {
        default: 'Portfolio | Neetparty',
        template: '%s | Neetparty'
    },
    icons: {
        icon: '/icon.png'
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Chakra>
                    {children}
                </Chakra>
            </body>
        </html>
    )
}
