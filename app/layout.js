import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '../components/BootstrapClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SmartStore | Next.js E-Commerce',
  description: 'A modern e-commerce demo using Next.js & Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="d-flex flex-column min-vh-100 bg-light">
        <BootstrapClient />
        <Navbar />
        <div className="flex-grow-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
