import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css'

export const metadata = {
  title: 'Share Prompts',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }: any) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          { children }
        </main>
      </body>
    </html>
  )
}

export default RootLayout;