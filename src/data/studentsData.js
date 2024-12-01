export const newStudentsData = [
    {
      id: 1,
      code: 1306470,
      name: "Zarina RUSTAMOVA",
      date: "2024-11-20",
      result: "completed",
      frozen: false,
    },
    {
      id: 2,
      code: 1306463,
      name: "Husanboyeva GULSHANOY",
      date: "2024-11-20",
      result: "completed",
      frozen: false,
    },
    {
      id: 3,
      code: 1306455,
      name: "Sevinch AZIMJONOVA",
      date: "2024-11-20",
      result: "completed",
      frozen: false,
    },
    {
      id: 4,
      code: 1306451,
      name: "Ruxshona XATAMETOVA",
      date: "2024-11-20",
      result: "frozen",
      frozen: true,
    },
    {
      id: 5,
      code: 1306471,
      name: "Kamola QURBONOVA",
      date: "2024-12-05",
      result: "completed",
      frozen: false,
    },
    {
      id: 6,
      code: 1306472,
      name: "Sardorbek SAFAROV",
      date: "2024-12-10",
      result: "completed",
      frozen: false,
    },
    {
      id: 7,
      code: 1306473,
      name: "Alyona VORONOVA",
      date: "2024-12-15",
      result: "frozen",
      frozen: true,
    },
    {
      id: 8,
      code: 1306474,
      name: "Gulbahor SHAMSHIDDINOVA",
      date: "2024-12-20",
      result: "completed",
      frozen: false,
    },
    {
      id: 9,
      code: 1306475,
      name: "Ravshanbek JUMA",
      date: "2024-12-25",
      result: "completed",
      frozen: false,
    },
  ];
  
  export function getKPIDataByDate(date) {
    return newStudentsData.find((data) => data.date === date);
  }
  