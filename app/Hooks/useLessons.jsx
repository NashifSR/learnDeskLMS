import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useLessons = (url = "/Lessons.json") => {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  // Fetch lessons function
  const fetchLessons = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(url);
      setLessons(response.data);
    } catch (err) {
      setIsError(true);
      setError(err);
      setLessons([]);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  // Fetch once on mount
  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  console.log(lessons)

  return { lessons, refetch: fetchLessons, isLoading, isError, error };
};

export default useLessons;
