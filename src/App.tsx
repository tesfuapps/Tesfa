import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import MoreDesigns from './pages/MoreDesigns';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/more-designs" element={<MoreDesigns />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
