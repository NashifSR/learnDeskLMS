import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useChapters = () => {
  // State variables
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "/chapterClassification.json"; // Make sure the file is in public folder

  // Fetch chapters
  const fetchChapters = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setChapters(response.data);
    } catch (err) {
      setIsError(true);
      setError(err);
      setChapters([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  // Fetch once on mount
  useEffect(() => {
    fetchChapters();
  }, [fetchChapters]);

  return { chapters, refetch: fetchChapters, isLoading, isError, error };
};

export default useChapters;
