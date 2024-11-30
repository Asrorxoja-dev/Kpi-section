
  
  
  export const students = [
    {
      id: 1,
      name: "Ali Valiyev",
      tasks: [
        { date: "2024-01-15", status: "completed" },
        { date: "2024-01-16", status: "incomplete" },
        { date: "2024-01-17", status: "frozen" },
      ]
    },
    {
      id: 2,
      name: "Malika Azizova",
      tasks: [
        { date: "2024-01-15", status: "completed" },
        { date: "2024-01-16", status: "completed" },
        { date: "2024-01-17", status: "incomplete" },
      ]
    },
    // ... 18 ta qo'shimcha talaba ma'lumotlarini shu formatda qo'shing
  ];
  
  export function getStatsByDate(date) {
    const stats = { completed: 0, incomplete: 0, frozen: 0 };
    students.forEach(student => {
      const task = student.tasks.find(t => t.date === date);
      if (task) {
        stats[task.status]++;
      }
    });
    return stats;
  }
  
  