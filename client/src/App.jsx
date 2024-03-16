import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Add from "./pages/add/Add";
import Join from "./pages/join/Join";
import Profile from "./pages/profile/Profile";
import Gigs from "./pages/gigs/Gigs";
import GigsList from "./pages/gigsList/gigsList";
import EditProfile from "./pages/editProfile/editProfile";
import Jobs from "./pages/jobs/Jobs";
import Professionals from "./pages/professionals/Professionals";
import Companies from "./pages/companies/Companies";
import Professional from "./pages/professional/Professional";
import Job from "./pages/Job/Job";
import Dashboard from "./pages/dashboard/Dashboard";
import Applications from "./pages/applications/Applications";
import JobsPosted from "./pages/jobsPosted/JobsPosted";
import MyProfile from "./pages/myProfile/MyProfile";
import Settings from "./pages/settings/Settings"
import Company from "./pages/company/Company";
import FAQ from "./pages/faq/FAQ";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Proposals from "./pages/proposals/Proposals";
import Invites from "./pages/invites/Invites";
import SearchAll from "./pages/searchAll/SearchAll";
import Messages from "./pages/messages/Messages";
import Projects from "./pages/projects/Projects";

function App() {
  const Layout = () => {
    const location = useLocation()
    const showNavBar = !['/login', '/signup'].includes(location.pathname)
    return (
      <div className="app">
        {showNavBar && <Navbar />}
        <Outlet />
      </div>
    );
  };
  const clientAccount = true; 

  const router = createBrowserRouter(createRoutesFromElements(

    
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route  te path="/search-all"  element={<SearchAll />}>
          <Route path="jobs"  element={<Jobs />} />
          <Route path="professionals"  element={<Professionals />} />
          <Route path="companies" element={<Companies />} />
          <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="jobs/:id"  element={<Job />} />
          <Route path="professionals/:id" element={<Professional />}/>
          <Route path="/companies/:id" element={<Company />} />
          <Route path="/add" element={<Add />} />
          <Route path="/join" element={<Join />} />
          <Route path="/profile" exact element={<Profile />}> 
              <Route index  element={<MyProfile />}/>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="applications" element={<Applications />}/>
              <Route path="posted-jobs" element={<JobsPosted />}/>
              <Route path="settings" element={<Settings />}/>
              <Route path="proposals" element={<Proposals />}/>
              <Route path="invites" element={<Invites />}/>
              <Route path="messages" element={<Messages />}/>
          </Route>
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gigsList" element={<GigsList />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        

))
  return <RouterProvider router={router} />;
}

export default App;
