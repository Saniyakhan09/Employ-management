const employees = [
  {
    id: 2,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskId: 101,
        title: "Complete Project Report",
        description: "Prepare and submit the monthly project report.",
        category: "Documentation",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
      {
        taskId: 102,
        title: "Fix UI Bugs",
        description: "Resolve navigation bar and footer alignment issues.",
        category: "Development",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskId: 103,
        title: "Database Optimization",
        description: "Optimize database queries for faster response.",
        category: "Database",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Emma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskId: 104,
        title: "Create Marketing Plan",
        description: "Draft a strategy for the upcoming product launch.",
        category: "Marketing",
        active: false,
        newTask: true,
        complete: false,
        failed: true,
      },
      {
        taskId: 105,
        title: "Team Meeting",
        description: "Schedule and lead a meeting to discuss progress.",
        category: "Management",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      complete: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Liam",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskId: 106,
        title: "Customer Support",
        description: "Handle support tickets for the day.",
        category: "Support",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
      {
        taskId: 107,
        title: "Update Product Listings",
        description: "Add new product details to the database.",
        category: "Data Entry",
        active: false,
        newTask: true,
        complete: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Sophia",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskId: 108,
        title: "Social Media Posts",
        description: "Schedule posts for all social media platforms.",
        category: "Social Media",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
      {
        taskId: 109,
        title: "Update Employee Records",
        description: "Review and update all employee records in the system.",
        category: "HR",
        active: false,
        newTask: true,
        complete: true,
        failed: false,
      },
      {
        taskId: 110,
        title: "Plan Office Event",
        description: "Organize the upcoming office cultural event.",
        category: "Events",
        active: true,
        newTask: false,
        complete: false,
        failed: true,
      },
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 1,
    },
  },
  {
    id: 6,
    firstName: "William",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskId: 111,
        title: "Debug Payment Gateway",
        description: "Fix errors in the online payment system.",
        category: "Development",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskId: 112,
        title: "Prepare Training Materials",
        description: "Draft materials for the upcoming training session.",
        category: "Training",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalstorage = ()=>{
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalstorge = ()=>{
    const employees  = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}

