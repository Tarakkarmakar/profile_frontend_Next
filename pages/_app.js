import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import { AuthProvider } from "@/contexts/AuthContext"; 
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
