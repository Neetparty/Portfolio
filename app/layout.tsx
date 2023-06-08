import { Chakra, ChakraLayout } from './components/Chakra'
import './globals.css'

export const metadata = {
    title: {
        default: 'Portfolio | Neetparty',
        template: '%s | Neetparty'
    },
    icons: {
        icon: '/FbXxKbwaUAANdvS.jfif'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Chakra>
                    <ChakraLayout>
                        {children}
                    </ChakraLayout>
                </Chakra>
            </body>
        </html>
    )
}
