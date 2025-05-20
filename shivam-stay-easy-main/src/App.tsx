import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PGInfo from "./pages/PGInfo";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pg-info" element={<PGInfo />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add other routes here */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/billing" element={<Billing />} /> */}
          {/* <Route path="/notifications" element={<Notifications />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/privacy" element={<Privacy />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
