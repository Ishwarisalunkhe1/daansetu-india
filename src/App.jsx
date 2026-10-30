import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import ExploreCauses from './pages/ExploreCauses'
import CauseDetails from './pages/CauseDetails'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import DonateItems from './pages/DonateItems'
import ShareSkills from './pages/ShareSkills'
import NGOList from './pages/NGOList'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VolunteerDashboard from './pages/dashboard/VolunteerDashboard'
import NGODashboard from './pages/dashboard/NGODashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/causes" element={<ExploreCauses />} />
        <Route path="/causes/:id" element={<CauseDetails />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate-items" element={<DonateItems />} />
        <Route path="/share-skills" element={<ShareSkills />} />
        <Route path="/ngos" element={<NGOList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/volunteer" element={<VolunteerDashboard />} />
        <Route path="/dashboard/ngo" element={<NGODashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}
