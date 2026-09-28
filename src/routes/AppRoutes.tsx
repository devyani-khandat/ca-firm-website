import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Approach from "../pages/Approach";
import Industries from "../pages/Industries";
import Team from "../pages/Team";

import Insights from "../pages/Insights";
import Blogs from "../pages/Blogs";
import Articles from "../pages/Articles";
import Publications from "../pages/Publications";
import UnionBudget from "../pages/UnionBudget";

import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />

          {/* Approach */}
          <Route path="/approach" element={<Approach />} />

          {/* Industries */}
          <Route path="/industries" element={<Industries />} />

          {/* Team */}
          <Route path="/team" element={<Team />} />

          {/* Insights */}
          <Route path="/insights" element={<Insights />} />

          <Route
            path="/insights/blogs"
            element={<Blogs />}
          />

          <Route
            path="/insights/articles"
            element={<Articles />}
          />

          <Route
            path="/insights/publications"
            element={<Publications />}
          />

          <Route
  path="/insights/union-budget"
  element={<UnionBudget />}
/>

          {/* Careers */}
          <Route path="/careers" element={<Careers />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* FAQ */}
          <Route path="/faq" element={<FAQ />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;