import React, { useState } from "react";
import { kpiData, getKPIDataByDate } from "../data/kpiData";
import Calendar from "react-calendar";
import { MdDateRange } from "react-icons/md";
import { newStudentsData } from "../data/studentsData.js";
import "react-calendar/dist/Calendar.css";

function KPIDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // Qo'shimcha holat
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false); // Qo'shimcha tugmalarni ko'rsatish

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedData(getKPIDataByDate(formattedDate));
  };

  const filteredStudents = newStudentsData.filter(
    (student) => student.date === selectedDate.toLocaleDateString("en-CA") // Filtr to'g'ri ishlaydi
  );

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* KPI tugmasi */}
      <div className="flex justify-center items-center mb-4">
        <button
          className="btn rounded-3xl btn-primary h-10 w-40 mx-auto"
          onClick={() => setShowAdditionalButtons(true)}
        >
          KPI
        </button>
      </div>

      {/* Qo'shimcha tugmalar */}
      {showAdditionalButtons && (
        <div className="gap-10 flex justify-center items-center mb-10">
          <button
            className={`btn rounded-3xl font-bold ${
              activeSection === "shaxsiy" ? "btn-primary" : "btn-active"
            }`}
            onClick={() => setActiveSection("shaxsiy")}
          >
            SHAXSIY TA'LIM KPI
          </button>
          <button
            className={`btn font-bold rounded-3xl ${
              activeSection === "yangi" ? "btn-primary" : "btn-active"
            }`}
            onClick={() => setActiveSection("yangi")}
          >
            YANGI O'QUVCHILAR KPI
          </button>
        </div>
      )}

      {/* Shaxsiy ta'lim KPI bo'limi */}
      {activeSection === "shaxsiy" && (
        <div className="shaxsiy-ta'lim-kpi">
          <div className="text-center mb-8">
            <div className="dropdown dropdown-top mt-44">
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
                    className="rounded w-64"
                  />
                </div>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-end text-white">
                  <th className="p-4 text-center  relative">
                    DATE
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                  </th>
                  <th className="p-4 text-center relative">
                    BAJARILGANLAR SONI
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                  </th>
                  <th className="p-4 text-center relative">
                    OBUNA BO'LGANLAR SONI
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                  </th>
                  <th className="p-4 text-center relative">
                    KPI
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                  </th>
                  <th className="p-4 text-center relative">
                    MUZLATISH SONI
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                  </th>
                  <th className="p-4 text-center">ПРОЦЕНТ ЗАМОРОЗКИ</th>
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
      )}

      {/* Yangi o'quvchilar KPI bo'limi */}
      {activeSection === "kpi" && (
        <div className="gap-10 flex justify-center items-center mb-10">
          <button
            className={`btn ${
              activeSection === "yangi" ? "btn-active" : "btn-primary"
            }`}
            onClick={() => setActiveSection("yangi")}
          >
            YANGI O'QUVCHILAR KPI
          </button>
        </div>
      )}

      {/* Yangi o'quvchilar KPI bo'limi */}
      {activeSection === "yangi" && (
        <div className="new-students-kpi">
          <div className="text-center mb-4">
            <div className="dropdown dropdown-top mt-40">
              <div tabIndex={0} role="button" className="btn m-1 ">
                <MdDateRange className="text-2xl" />
                Sana tanlang
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow"
              >
                <div className="flex justify-center items-center gap-1">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    className="rounded w-64"
                  />
                </div>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl ">
            <h2 className="text-lg font-bold mb-5">
              {selectedDate.toLocaleDateString("en-GB")}
            </h2>
            <div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white text-center">
                    <th className="p-4 text-center relative">
                      O'QUVCHI KODI
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                    </th>
                    <th className="p-4 text-center relative">
                      ISM FAMILIYA
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                    </th>
                    <th className="p-4 text-center relative">
                      BOSHLANISH SANA
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                    </th>
                    <th className="p-4 text-center relative">
                      NATIJA
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-gray-300"></div>
                    </th>
                    <th className="p-4 text-center">MUZLASH O'ZIMINKI</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="text-center">
                        <td className="border-b p-3">{student.code}</td>
                        <td className="border-b p-3">{student.name}</td>
                        <td className="border-b p-3">{student.date}</td>
                        <td className="border-b p-3">
                          {student.result === "completed" ? "✅" : "❌"}
                        </td>
                        <td className="border-b p-3">
                          {student.frozen ? "❄️" : "✅"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center p-3 text-gray-500">
                        Ushbu sana uchun ma'lumot topilmadi
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KPIDashboard;
