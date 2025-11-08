import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useBooks = () => {
  // State variables
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "/bookClassification.json"; // Make sure Books.json is in the public folder

  // Fetch function
  const fetchBooks = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (err) {
      setIsError(true);
      setError(err);
      setBooks([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  // Run fetch once on mount
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Return data and refetch function
  return { books, refetch: fetchBooks, isLoading, isError, error };
};

export default useBooks;
