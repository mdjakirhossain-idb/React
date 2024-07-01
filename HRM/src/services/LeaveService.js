// Import Axios instance
import axios from "./axiosInstance";

export const getLeavesByEmployee = async (employeeId) => {
  try {
    const response = await axios.get(`/leave/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLeaveStatus = async (leaveId, status, reason) => {
  const url = `leave/leaves/${leaveId}/status`; // Adjust the base URL as per your application's requirement
  const requestBody = {
    status: status,
    reason: reason,
  };

  try {
    const response = await axios.put(url, requestBody);
    console.log("Leave status updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating leave status:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const applyForLeave = async (employeeId, leaveRequest) => {
  try {
    const url = `/leave/myleaves/apply/${employeeId}`;
    const response = await axios.post(url, leaveRequest, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLeave = async (id, leaveData) => {
  try {
    const response = await axios.put(`/leave/${id}`, leaveData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLeave = async (id) => {
  try {
    await axios.delete(`/leave/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getMyLeaves = async (employeeId) => {
  try {
    const response = await axios.get(`leave/myleaves/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyLeaveRequests = async (employeeId) => {
  try {
    const response = await axios.get(`leave/myleaves-requests/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Manage Leave Types
export const getLeaveTypes = async () => {
  try {
    const response = await axios.get("leave/leave-types");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLeaveType = async (leaveTypeDetail) => {
  try {
    const response = await axios.post("leave/leave-types", leaveTypeDetail);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAssignedLeaves = async (assignedToEmpId) => {
  try {
    const response = await axios.get(
      `/leave/assigned-leaves/${assignedToEmpId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get All Leave Requests
export const getAllLeaveRequests = async () => {
  try {
    const response = await axios.get("/leave/leave-requests");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Manage Company Leaves
export const createCompanyLeave = async (companyLeaveData) => {
  try {
    const response = await axios.post("leave/company-leaves", companyLeaveData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCompanyLeaves = async () => {
  try {
    const response = await axios.get("leave/company-leaves");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCompanyLeaveById = async (id) => {
  try {
    const response = await axios.get(`leave/company-leaves/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompanyLeave = async (id, companyLeaveData) => {
  try {
    const response = await axios.put(
      `leave/company-leaves/${id}`,
      companyLeaveData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCompanyLeave = async (id) => {
  try {
    await axios.delete(`leave/company-leaves/${id}`);
  } catch (error) {
    throw error;
  }
};

// Manage Holidays
export const createHoliday = async (holidayData) => {
  try {
    const response = await axios.post("leave/holidays", holidayData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHolidayById = async (id) => {
  try {
    const response = await axios.get(`leave/holidays/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHolidays = async () => {
  try {
    const response = await axios.get("leave/holidays");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateHoliday = async (id, holidayData) => {
  try {
    const response = await axios.put(`leave/holidays/${id}`, holidayData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteHoliday = async (id) => {
  try {
    await axios.delete(`leave/holidays/${id}`);
  } catch (error) {
    throw error;
  }
};
