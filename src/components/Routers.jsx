import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Mentordashboard from '../pages/Mentordashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MyAccount from '../pages/MyAccount';
import NoticeBoard from '../pages/NoticeBoard';
import MyWallet from '../pages/MyWallet';
import SessionCalander from '../pages/SessionCalander';
import MyWithdrawls from '../pages/MyWithdrawls';
import Calender from '../components/Calender';
import MessageChat from '../pages/MessageChat';
import PersonalInfo from '../pages/PersonalInfo';
import Session from '../pages/Session';
import MobileNav from './Mobile/MobileNav';
import NavbarSide from './Mobile/NavbarSide';
import ClientDashboard from '../pages/MentorClient/ClientDashboard/ClientDashboard';
import ClientNavbar from '../pages/MentorClient/ClientNavbar/ClientNavbar';
import ClientIntroSession from '../pages/ClientIntroSession/ClientIntroSession';
import SuparAdmin from '../pages/SuparAdmin/SuperAdminDashboard/SuparAdmin';
import SuperAdminUserTable from '../pages/SuparAdmin/SuperAdminUsers/SuperAdminUsers';
import SuperAdminSide from '../pages/SuparAdmin/SuperAdminSide/SuperAdminSide';
import SuperAdminIssueReport from '../pages/SuparAdmin/SuperAdminIssuReport/SuperAdminIssuReport';
import ReactBarchart from '../pages/SuparAdmin/ReactBarchart/ReactBarchart';
import ClientMyWallet from '../pages/MentorClient/ClientMyWallet/ClientMyWallet';
import ClientSidebar from '../pages/MentorClient/ClientSidebar/ClientSidebar';
import ClientSnCalender from '../pages/MentorClient/ClientSessionCalander/ClientSnCalander';
import ClientNotice from '../pages/MentorClient/ClientNoticeBoard/ClientNotice';
import Signin from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';




const AllRoute = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Mentordashboard />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/side' element={<Sidebar />} />
        <Route path='/Myaccounts' element={<MyAccount />} />
        <Route path='/NoticeBoard' element={<NoticeBoard />} />
        <Route path='/MyWallet' element={<MyWallet />} />
        <Route path='/sessionCalender' element={<SessionCalander />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/mywithdrawls' element={<MyWithdrawls />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/session' element={<Session />} />
        <Route path='/PersonalInfo' element={<PersonalInfo />} />
        <Route path='/chatMessage' element={
          <ProtectedRoute>
            <MessageChat />
          </ProtectedRoute>
        } />
        <Route path='/mobileNav' element={<MobileNav />} />
        <Route path='/navbarSide' element={<NavbarSide />} />
        <Route path='/clientDashboard' element={<ClientDashboard />} />
        <Route path='/clientNavbar' element={<ClientNavbar />} />
        <Route path='/clientIntroSession' element={<ClientIntroSession />} />
        <Route path='/suparAdmin' element={<SuparAdmin />} />
        <Route path='/SuperAdminUserTable' element={<SuperAdminUserTable />} />
        <Route path='/superAdminSide' element={<SuperAdminSide />} />
        <Route path='/superAdminIssueReport' element={<SuperAdminIssueReport />} />
        <Route path='/reactBarchart' element={<ReactBarchart />} />
        <Route path='/clientMyWallet' element={<ClientMyWallet />} />
        <Route path='/clientSideBar' element={<ClientSidebar />} />
        <Route path='/clientSnCalender' element={<ClientSnCalender />} />
        <Route path='/clientNotice' element={<ClientNotice />} />

      </Routes>
    </>
  )
}

export default AllRoute;
