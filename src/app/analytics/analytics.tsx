import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAnalytics } from '@/lib/api/analytics';
import Chart from '@/components/Chart';

const AnalyticsPage = () => {
  const [selectedPair, setSelectedPair] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  const { data, isLoading, error } = useQuery(
    ['analytics', selectedPair, dateRange],
    () => getAnalytics(selectedPair, dateRange),
    { enabled: !!selectedPair && !!dateRange }
  );

  return (
    <div>
      <h1>Analytics</h1>
      <select onChange={(e) => setSelectedPair(e.target.value)}>
        <option value="">Select Pair</option>
        {/* Dynamically populate options */}
      </select>
      <input
        type="date"
        onChange={(e) =>
          setDateRange((prev) => [new Date(e.target.value), prev?.[1] || new Date()])
        }
      />
      <input
        type="date"
        onChange={(e) =>
          setDateRange((prev) => [prev?.[0] || new Date(), new Date(e.target.value)])
        }
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading analytics</p>}
      {data && <Chart data={data} />}
    </div>
  );
};

export default AnalyticsPage;
