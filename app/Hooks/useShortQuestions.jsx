import axios from "axios";
import { useState, useEffect } from "react";

const useShortQuestions = () => {
  const [shortQuestions, setShortQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/shortQuestion.json");
      setShortQuestions(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { shortQuestions, loading, error, refetch: fetchQuestions };
};

export default useShortQuestions;
