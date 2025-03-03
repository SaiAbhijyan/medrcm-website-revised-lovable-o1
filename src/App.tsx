
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import News from "./pages/News";
import ClaimsManagement from "./pages/ClaimsManagement";
import FinancialAnalytics from "./pages/FinancialAnalytics";
import PatientEngagement from "./pages/PatientEngagement";
import OperationalExcellence from "./pages/OperationalExcellence";
import ComplianceSolutions from "./pages/ComplianceSolutions";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import WhitePapers from "./pages/WhitePapers";
import Webinars from "./pages/Webinars";
import SupportCenter from "./pages/SupportCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/claims-management" element={<ClaimsManagement />} />
          <Route path="/financial-analytics" element={<FinancialAnalytics />} />
          <Route path="/patient-engagement" element={<PatientEngagement />} />
          <Route path="/operational-excellence" element={<OperationalExcellence />} />
          <Route path="/compliance-solutions" element={<ComplianceSolutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/white-papers" element={<WhitePapers />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/support-center" element={<SupportCenter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
