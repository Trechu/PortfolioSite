import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import {ColorSchemeScript, MantineProvider} from '@mantine/core';

export const metadata = {
  title: 'Portfolio page',
  description: 'Made by me :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={{fontFamily: 'Tahoma, sans-serif', colorScheme: 'dark'}} defaultColorScheme="black">{children}</MantineProvider>
      </body>
    </html>
  )
}
