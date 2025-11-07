import { useState, useEffect } from "react";
import axios from "axios";

const useCourses = () => {
  // State variables
  const [courses, setCourses] = useState([]); // was mcq
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "/courses.json"; // Make sure courses.json is in the public folder

  // Fetch function
  const fetchCourses = async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setCourses(response.data);
    } catch (err) {
      setIsError(true);
      setError(err);
      setCourses([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  };

  // Run fetch once on mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Manual refetch
  const refetch = fetchCourses;

  return { courses, refetch, isLoading, isError, error };
};

export default useCourses;
