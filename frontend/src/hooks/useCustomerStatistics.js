import { useEffect, useState } from "react";
import api from "../services/api";

function useCustomerStatistics() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/customers/statistics");

      setStats(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    stats,
    loading,
    refresh: fetchStats,
  };
}

export default useCustomerStatistics;