import React, { useEffect, useState } from "react";
import { Scheduler } from "@bitnoi.se/react-scheduler";

export default function SessionCalendar() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Simulate fetching data from an API
        const result = [
          { id: 1, title: "Meeting 1", startTime: "2023-12-11T09:00:00", endTime: "2023-12-11T10:00:00" },
          { id: 2, title: "Meeting 2", startTime: "2023-12-11T11:00:00", endTime: "2023-12-11T12:00:00" },
          // Add more data as needed
        ];

        // Update the data with the fetched result
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">Session Calendar</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="p-4 flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Scheduler
            isLoading={isLoading}
            data={data}
            onItemClick={(clickedItem) => console.log(clickedItem)}
            onFilterData={() => {
              // Implement your filtering logic here
            }}
            onClearFilterData={() => {
              // Implement logic to clear filters
            }}
            config={{
              filterButtonState: 0,
              zoom: 0,
              lang: "en",
              maxRecordsPerPage: 20,
            }}
          />
        )}
      </div>
    </div>
  );
}
