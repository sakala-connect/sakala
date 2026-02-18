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
      <main className="flex-grow pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <ScrollToTopOnNavigation /> {/* Add it here */}
      <Footer />
    </div>
  );
};