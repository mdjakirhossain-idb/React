import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Button,
  Select,
  Text,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { applyForJob } from "../../services/CandidateService";
import { getAllJobPostings } from "../../services/CandidateService";
const JobApplicationForm = ({jobid, onAdded, change, setChange}) => {
  const toast = useToast();
  const [id, setId] = useState(jobid);
  const [application, setApplication] = useState({
    applicantName: "",
    applicantEmail: "",
    resume: "", // Assuming a URL or base64 string
    coverLetter: "",
    address: "",
    pinCode: "",
    nationality: "",
    category: "",
    mobileNumber: "",
    countryCode: "",
    visaStatus: "",
    country: "",
    appliedToJobId: jobid ? jobid.jobid : "",
    // Add other fields as necessary
  });

  const [selectedValue, setSelectedValue] = useState(application.country);
  const [jobPostings, setJobPostings] = useState([]);

  const jobPostingWithId = jobPostings.find(
    (posting) => posting.name == application.country
  )?.id;
  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const postings = await getAllJobPostings();
        setJobPostings(postings);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };
    fetchJobPostings();
  }, []);

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await applyForJob(application);
      console.log("Application Submitted:", response);
      toast({
        title: "Succes",
        description: "Application submitted",
        status: "success", // Options: 'info', 'warning', 'error', 'success'
        isClosable: true,
        duration: 3000,
      });;
      setChange(!change)
      onAdded()
      // Handle success (e.g., clear form, show success message)
    } catch (error) {
      console.error("Error applying for job:", error)
      toast({
        title: "Error",
        description: "Error submitting application",
        status: "error", // Options: 'info', 'warning', 'error', 'success'
        isClosable: true,
        duration: 5000,
      });
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="applicantName" isRequired mt={4}>
          <FormLabel>Applicant Name</FormLabel>
          <Input name="applicantName" type="text" onChange={handleChange} />
        </FormControl>
        {/* </Box> */}
        <FormControl id="applicantEmail" isRequired mt={4}>
          <FormLabel>Applicant Email</FormLabel>
          <Input name="applicantEmail" type="email" onChange={handleChange} />
        </FormControl>
        <FormControl isRequired id="resume" mt={4}>
          <FormLabel>Resume</FormLabel>
          <Textarea name="resume" type="text" onChange={handleChange} />
        </FormControl>
        <FormControl id="coverLetter" mt={4}>
          <FormLabel>Cover Letter</FormLabel>
          <Textarea name="coverLetter" onChange={handleChange} />
        </FormControl>
        <FormControl isRequired id="jobName" mt={4}>
          <FormLabel>Applying for</FormLabel>
          <Select
            name="appliedToJobId"
            onChange={handleChange}
            placeholder="Select Job"
            value={application.appliedToJobId}
          >
            {jobPostings.map((job) => {
              return (
                <option key={job.id} value={job?.id}>
                  {job.title}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <FormControl id="address" mt={4}>
          <FormLabel>Address</FormLabel>
          <Textarea name="address" type="text" onChange={handleChange} />
        </FormControl>
        {/* Continue adding FormControl components for each field */}
        <FormControl id="pincode" mt={4}>
          <FormLabel>Zip Code</FormLabel>
          <Input name="pincode" type="text" onChange={handleChange} />
        </FormControl>
        <FormControl id="nationality" mt={4}>
          <FormLabel>Nationality</FormLabel>
          <Input name="nationality" type="text" onChange={handleChange} />
        </FormControl>

        <FormControl id="mobileNumber" mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input name="mobileNumber" type="number" onChange={handleChange} />
        </FormControl>
        <Button mt={4} borderRadius={0} colorScheme="red" type="submit">
          Submit Application
        </Button>
      </form>
    </Box>
  );
};

export default JobApplicationForm;