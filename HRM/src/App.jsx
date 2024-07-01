import React from 'react';
import { ChakraProvider, Flex,Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import EmployeeList from './components/employee/EmployeeList';
import AddEmployee from './components/employee/AddEmployee';
import LeaveList from './components/employee/LeaveList';
import LeaveForm from './components/employee/LeaveForm';
import AttendanceDetails from './components/attendance/AttendanceDetails';
import AddAttendance from './components/employee/AddAttendance';
import InterviewScheduler from './components/candidates/InterviewScheduler';
import OfferManagement from './components/candidates/OfferManagement';
import JobPostingForm from './components/candidates/JobPostingForm';
import JobPostingsList from './components/candidates/JobPostingsList';
import AllApplicationsList from './components/candidates/AllApplicationsList';
import JobApplicationForm from './components/candidates/JobApplicationForm';
import AttendanceRecords from './components/attendance/AttendanceRecords';
import CheckInCheckOut from './components/attendance/CheckInCheckOut';
import LateComeAndEarlyOut from './components/attendance/LateComeAndEarlyOut';
import AttendanceValidation from './components/attendance/AttendanceValidation';
import AttendanceByDateAndMonth from './components/attendance/AttendanceByDateAndMonth';
import AddUpdateAttendance from './components/attendance/AddUpdateAttendance';
import MyLeaves from './components/leaves/MyLeaves';
import MyLeaveRequests from './components/leaves/MyLeaveRequests';
import LeaveTypes from './components/leaves/LeaveTypes';
import AssignedLeaves from './components/leaves/AssignedLeaves';
import LeaveRequests from './components/leaves/LeaveRequests';
import Holidays from './components/leaves/Holidays';
import CompanyLeaves from './components/leaves/CompanyLeaves';
import OnBoarding from './components/onboarding/OnBoarding';
import CandidateView from './components/onboarding/candidateView';
import './App.css'

const App = () => {
  return (
    <ChakraProvider >
      <Router >
        <Flex position={'relative'} minWidth={'100vw'} overflow={'hidden'}>
          <Box className='None'>
          <SideBar/>

          </Box>
          <Flex className='setWidth ml'  flexDirection="column" width="100%" > {/* Adjust the width */}
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/leaves" element={<LeaveList />} />
              <Route path="/add-leave" element={<LeaveForm />} /> 
              <Route path="/schedule-interview" element={<InterviewScheduler />} />
              <Route path="/manage-offers" element={<OfferManagement />} />
              <Route path="/job-posting" element={<JobPostingForm />} />
              <Route path="/all-application" element={<AllApplicationsList />} />
              <Route path="/job-posting-list" element={<JobPostingsList />} />
              <Route path="/apply-job" element={<JobApplicationForm />} />
              <Route path="/attendance/records" element={<AttendanceRecords />} />
              <Route path="/attendance/validation" element={<AttendanceValidation />} />
              <Route path="/attendance/clock" element={<CheckInCheckOut />} />
              <Route path="/attendance/date-month" element={<AttendanceByDateAndMonth />} />
              <Route path="/attendance/add-update" element={<AddUpdateAttendance />} />
              <Route path="/AttendanceDetails" element={<AttendanceDetails />} />
              <Route path="/AddAttendance" element={<AddAttendance />} />
              <Route path="/leaves/myleaves" element={<MyLeaves />} />
              <Route path="/leaves/myleaves-requests" element={<MyLeaveRequests />} />
              <Route path="/leaves/leave-types" element={<LeaveTypes />} />
              <Route path="/leaves/assigned-leaves" element={<AssignedLeaves />} />
              <Route path="/leaves/leave-requests" element={<LeaveRequests />} />
              <Route path="/leaves/holidays" element={<Holidays />} />
              <Route path="/leaves/company-leaves" element={<CompanyLeaves />} />
              <Route path="/onboarding" element={<OnBoarding />} />
              <Route path="/LateComeAndEarlyOut" element={<LateComeAndEarlyOut />} />
              <Route path="/candidate-view" element={<CandidateView />} />
              {/* Add more routes as needed */}
            </Routes>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
