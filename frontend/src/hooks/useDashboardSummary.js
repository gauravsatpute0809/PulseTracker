import { useEffect, useState } from "react";
import api from "../services/api";

function useDashboardSummary() {
  const [summary, setSummary] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const res = await api.get("/dashboard/summary");

      setSummary(res.data.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    summary,
    loading,
    refresh: fetchSummary,
  };
}

export default useDashboardSummary;