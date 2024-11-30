export const kpiData = [
    {
      date: "2024-11-15",
      completed: 25,
      subscribers: 30,
      kpi: 83,
      frozen: 5,
      freezePercent: 16.67
    },
    {
      date: "2024-11-16",
      completed: 28,
      subscribers: 32,
      kpi: 87,
      frozen: 4,
      freezePercent: 12.5
    },
    {
      date: "2024-11-17",
      completed: 30,
      subscribers: 35,
      kpi: 85,
      frozen: 5,
      freezePercent: 14.29
    },
    {
      date: "2024-11-18",
      completed: 27,
      subscribers: 33,
      kpi: 81,
      frozen: 6,
      freezePercent: 18.18
    },
    {
      date: "2024-11-19",
      completed: 32,
      subscribers: 36,
      kpi: 88,
      frozen: 4,
      freezePercent: 11.11
    },
    {
      date: "2024-11-20",
      completed: 29,
      subscribers: 34,
      kpi: 84,
      frozen: 3,
      freezePercent: 8.82
    },
    {
      date: "2024-11-21",
      completed: 26,
      subscribers: 31,
      kpi: 80,
      frozen: 7,
      freezePercent: 22.58
    },
    {
      date: "2024-11-22",
      completed: 33,
      subscribers: 38,
      kpi: 89,
      frozen: 5,
      freezePercent: 13.16
    },
    {
      date: "2024-11-23",
      completed: 31,
      subscribers: 37,
      kpi: 86,
      frozen: 4,
      freezePercent: 10.81
    },
    {
      date: "2024-11-24",
      completed: 28,
      subscribers: 33,
      kpi: 82,
      frozen: 6,
      freezePercent: 18.18
    },
    {
      date: "2024-11-25",
      completed: 30,
      subscribers: 35,
      kpi: 85,
      frozen: 4,
      freezePercent: 11.43
    },
    {
      date: "2024-11-26",
      completed: 27,
      subscribers: 32,
      kpi: 81,
      frozen: 5,
      freezePercent: 15.63
    },
    {
      date: "2024-11-27",
      completed: 34,
      subscribers: 39,
      kpi: 90,
      frozen: 3,
      freezePercent: 7.69
    },
    {
      date: "2024-11-28",
      completed: 29,
      subscribers: 33,
      kpi: 83,
      frozen: 6,
      freezePercent: 18.18
    },
    {
      date: "2024-11-29",
      completed: 32,
      subscribers: 36,
      kpi: 87,
      frozen: 5,
      freezePercent: 13.89
    },
    {
      date: "2024-11-30",
      completed: 28,
      subscribers: 34,
      kpi: 82,
      frozen: 4,
      freezePercent: 11.76
    },
    {
      date: "2024-12-01",
      completed: 30,
      subscribers: 36,
      kpi: 85,
      frozen: 6,
      freezePercent: 16.67
    },
    {
      date: "2024-12-02",
      completed: 35,
      subscribers: 40,
      kpi: 91,
      frozen: 3,
      freezePercent: 7.5
    },
    {
      date: "2024-12-03",
      completed: 29,
      subscribers: 33,
      kpi: 84,
      frozen: 4,
      freezePercent: 12.12
    },
    {
      date: "2024-12-04",
      completed: 33,
      subscribers: 38,
      kpi: 88,
      frozen: 5,
      freezePercent: 13.16
    },
    {
      date: "2024-12-05",
      completed: 31,
      subscribers: 37,
      kpi: 86,
      frozen: 6,
      freezePercent: 16.22
    },
    {
      date: "2024-12-06",
      completed: 26,
      subscribers: 30,
      kpi: 79,
      frozen: 8,
      freezePercent: 26.67
    },
    {
      date: "2024-12-07",
      completed: 34,
      subscribers: 39,
      kpi: 90,
      frozen: 4,
      freezePercent: 10.26
    },
    {
      date: "2024-12-08",
      completed: 30,
      subscribers: 35,
      kpi: 85,
      frozen: 3,
      freezePercent: 8.57
    },
    {
      date: "2024-12-09",
      completed: 28,
      subscribers: 33,
      kpi: 81,
      frozen: 7,
      freezePercent: 21.21
    }
  ];
  
  
  export function getKPIDataByDate(date){
    return kpiData.find(data => data.date === date);
  }
  
  