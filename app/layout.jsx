import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import SosModal from '../components/SosModal';
import Toast from '../components/Toast';

export const metadata = {
  title: 'Sachet | जलरक्षा – Cross-Border Flood Intelligence & Crisis Coordination',
  description: 'Sachet / JalRaksha is an India-Nepal transboundary hydrological early-warning network, citizen disaster portal, field responder hub, and government command desk.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/logo.svg"
        />
      </head>
      <body className="bg-background text-on-surface font-sans antialiased min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
        <AuthProvider>
          <SosModal />
          <Toast />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
