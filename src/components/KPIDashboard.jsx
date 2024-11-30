import React, { useState } from "react";
import { kpiData, getKPIDataByDate } from "../data/kpiData";
import Calendar from "react-calendar";
import { MdDateRange } from "react-icons/md";

import "react-calendar/dist/Calendar.css";

function KPIDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedData(getKPIDataByDate(formattedDate));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans ">
      <div className="text-center mb-8 ">
        <div className="dropdown dropdown-top mt-80">
          <div tabIndex={0} role="button" className="btn m-1">
            <MdDateRange className="text-2xl" />
            tanlang
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow"
          >
            <div className="flex justify-center items-center gap-1">
              <Calendar
                onChange={handleDateSelect}
                value={selectedDate}
                className=" rounded w-64"
              />
            </div>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-900 text-end text-white">
              <th className="p-4 text-left relative">
                DATE
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
              </th>
              <th className="p-4 text-left relative">
                BAJARILGANLAR SONI
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
              </th>
              <th className="p-4 text-left relative">
                OBUNA BO'LGANLAR SONI
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
              </th>
              <th className="p-4 text-left relative">
                KPI
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
              </th>
              <th className="p-4 text-left relative">
                MUZLATISH SONI
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
              </th>
              <th className="p-4 text-left">ПРОЦЕНТ ЗАМОРОЗКИ</th>
            </tr>
          </thead>

          <tbody>
            {selectedData ? (
              <tr className="bg-white text-center">
                <td className="border-b p-3">{selectedData.date}</td>
                <td className="border-b p-3">{selectedData.completed}</td>
                <td className="border-b p-3">{selectedData.subscribers}</td>
                <td className="border-b p-3">{selectedData.kpi}%</td>
                <td className="border-b p-3">{selectedData.frozen}</td>
                <td className="border-b p-3">
                  {selectedData.freezePercent.toFixed(2)}%
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-3 text-gray-500">
                  Sana tanlang
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KPIDashboard;
