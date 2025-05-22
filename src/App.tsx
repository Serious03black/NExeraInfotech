
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Layout components
import Layout from "@/components/layout/Layout";

// Eagerly load the Home page for better LCP
import Home from "@/pages/Home";

// Lazily load other pages
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Blog = lazy(() => import("@/pages/Blog"));
const Careers = lazy(() => import("@/pages/Careers"));
const Contact = lazy(() => import("@/pages/Contact"));
const Faq = lazy(() => import("@/pages/Faq"));
const Legal = lazy(() => import("@/pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LoadingFallback = () => (
  <div className="flex h-[50vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          } />
          <Route path="/services" element={
            <Suspense fallback={<LoadingFallback />}>
              <Services />
            </Suspense>
          } />
          <Route path="/solutions" element={
            <Suspense fallback={<LoadingFallback />}>
              <Solutions />
            </Suspense>
          } />
          <Route path="/portfolio" element={
            <Suspense fallback={<LoadingFallback />}>
              <Portfolio />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<LoadingFallback />}>
              <Blog />
            </Suspense>
          } />
          <Route path="/careers" element={
            <Suspense fallback={<LoadingFallback />}>
              <Careers />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/faq" element={
            <Suspense fallback={<LoadingFallback />}>
              <Faq />
            </Suspense>
          } />
          <Route path="/legal" element={
            <Suspense fallback={<LoadingFallback />}>
              <Legal />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <SpeedInsights />
            <Analytics />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
