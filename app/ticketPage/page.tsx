import { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import TicketInfo from './components/TicketInfo';

export const metadata: Metadata = {
  title: "Events | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
      <html>
    <body>    
      <Header />
      <TicketInfo />
      <Footer />
      
    </body>
    </html>
    )
}