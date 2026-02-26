import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTopOnNavigation } from "./components/ScrollToTopOnNavigation";
import { Layout } from "./Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Behavioral from "./pages/services/Behavioral";
import Psychotherapy from "./pages/services/Psychotherapy";
import SpeechTherapy from "./pages/services/SpeechTherapy";
import OccupationalTherapy from "./pages/services/OccupationalTherapy";
import SpecialEducation from "./pages/services/SpecialEducation";
import TrainingPrograms from "./pages/TrainingPrograms";
import Workshops from "./pages/Workshops";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTopOnNavigation /> {/* Add it here */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/services/behavioral" element={<Behavioral />} />
            <Route path="/services/psychotherapy" element={<Psychotherapy />} />
            <Route path="/services/speech" element={<SpeechTherapy />} />
            <Route path="/services/occupational" element={<OccupationalTherapy />} />
            <Route path="/services/special-education" element={<SpecialEducation />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/workshops" element={<Workshops />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
