import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useSystem = () => {
  // State variables
  const [system, setsystem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "/systemClassification.json"; // Ensure this file is in the public folder

  // Fetch function
  const fetchsystem = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setsystem(response.data);
    } catch (err) {
      setIsError(true);
      setError(err);
      setsystem([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  // Fetch once on mount
  useEffect(() => {
    fetchsystem();
  }, [fetchsystem]);

  return { system, refetch: fetchsystem, isLoading, isError, error };
};

export default useSystem;
