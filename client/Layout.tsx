import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ScrollToTopOnNavigation } from "./components/ScrollToTopOnNavigation"; // Import the new component
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticlesBackground />
      <Navbar />
      {/* main tag should have ZERO top padding to allow hero to hit the very top */}
      <main className="flex-grow"> 
        {children}
      </main>
      <Footer />
    </div>
  );
};