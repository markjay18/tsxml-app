import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MoreProjects from './pages/MoreProjects'
import Layout from './layout/Layout'
import LotteryDocs from './pages/LotteryDocs'
import DashboardDocs from './pages/DashboardDocs'
import NotepadDocs from './pages/NotepadDocs'
import LandingPageDocs from './pages/LandingPageDocs'
import PuppeteerDocs from './pages/PuppeteerDocs'
import PHPWalletDocs from './pages/PHPWalletDocs'
import QuizDocs from './pages/QuizDocs'
import CrawlingDocs from './pages/CrawlingDocs'
import SlotDocs from './pages/SlotDocs'
import TimeDocs from './pages/TimeDocs'
import URLGenDocs from './pages/URLGenDocs'
import SwiperDocs from './pages/SwiperDocs'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/more-projects" element={<MoreProjects />} />
          <Route path="/lottery-docs" element={<LotteryDocs />} />
          <Route path="/dashboard-docs" element={<DashboardDocs />} />
          <Route path="/notepad-docs" element={<NotepadDocs />} />
          <Route path="/landingpage-docs" element={<LandingPageDocs />} />
          <Route path="/puppeteer-docs" element={<PuppeteerDocs />} />
          <Route path="/phpwallet-docs" element={<PHPWalletDocs />} />
          <Route path="/quiz-docs" element={<QuizDocs />} />
          <Route path="/crawling-docs" element={<CrawlingDocs />} />
          <Route path="/slotmachine-docs" element={<SlotDocs />} />
          <Route path="/time-docs" element={<TimeDocs />} />
          <Route path="/urlgen-docs" element={<URLGenDocs />} />
          <Route path="/swiper-docs" element={<SwiperDocs />} />
        </Routes>
      </Router>
  </>
  )
}

export default App;