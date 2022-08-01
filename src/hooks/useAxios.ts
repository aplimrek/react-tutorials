import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// interface AxiosParams {
//   config: AxiosRequestConfig<any>;
// }

const useAxios = <T>(axiosParams: AxiosRequestConfig<any>) => {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig<any>) => {
    try {
      const result = await axios.request<T>(params);
      setResponse(result.data);
    } catch (error) {
      const errors = error as Error | AxiosError;
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

export default useAxios;
