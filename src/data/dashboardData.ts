export interface EmployeeRecord {
  empId: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  department: "IT" | "Operations" | "Finance" | "Sales" | "HR" | "Marketing";
  designation: string;
  city: "Ahmedabad" | "Bengaluru" | "Hyderabad" | "Mumbai" | "Nagpur" | "Nashik" | "Pune";
  state: string;
  joinDate: string;
  experienceYears: number;
  education: string;
  employmentType: "Full-Time" | "Contract" | "Intern";
  salary: number;
  bonus: number;
  rating: number;
  leaves: number;
  trainingHours: number;
  status: "Active" | "On Leave" | "Resigned";
}

// Exact dataset totals and summary metrics calculated directly from your 1,000 Excel rows:
export const EXCEL_KPI_SUMMARY = {
  totalEmployees: 1000,
  activeEmployees: 854,
  resignedEmployees: 92,
  onLeaveEmployees: 54,
  attritionRate: 9.2, // (92 / 1000) * 100
  totalSalary: 65524000, // ₹65,524,000 from pivot table
  totalBonus: 6416600,   // ₹6,416,600 from pivot table
  avgSalary: 65524,
  avgBonus: 6416.6,
  avgPerformanceRating: 3.39, // 3392 total / 1000
  avgTrainingHours: 38.6,
  avgLeavesTaken: 11.8,
  fullTimeCount: 864,
  contractCount: 92,
  internCount: 44,
  femaleCount: 502,
  maleCount: 498
};

// Department Analysis (Exact Pivot Table metrics from your Excel file)
export const DEPARTMENT_METRICS = [
  { department: "IT", employees: 177, female: 95, male: 82, totalSalary: 14158000, avgSalary: 79988, totalBonus: 1367000 },
  { department: "Finance", employees: 167, female: 85, male: 82, totalSalary: 11790000, avgSalary: 70600, totalBonus: 1155500 },
  { department: "Operations", employees: 177, female: 80, male: 97, totalSalary: 10200000, avgSalary: 57627, totalBonus: 1045000 },
  { department: "Marketing", employees: 158, female: 75, male: 83, totalSalary: 10220000, avgSalary: 64683, totalBonus: 979000 },
  { department: "Sales", employees: 161, female: 89, male: 72, totalSalary: 9898000, avgSalary: 61478, totalBonus: 951000 },
  { department: "HR", employees: 160, female: 78, male: 82, totalSalary: 9258000, avgSalary: 57862, totalBonus: 919100 }
];

// City Distribution (Exact Pivot Table counts and sums from your Excel file)
export const CITY_METRICS = [
  { city: "Nashik", count: 165, totalSalary: 10536000, totalBonus: 1131100, ratingsSum: 559 },
  { city: "Hyderabad", count: 148, totalSalary: 10062000, totalBonus: 982500, ratingsSum: 509 },
  { city: "Mumbai", count: 144, totalSalary: 9669000, totalBonus: 914900, ratingsSum: 487 },
  { city: "Bengaluru", count: 144, totalSalary: 9265000, totalBonus: 984600, ratingsSum: 486 },
  { city: "Pune", count: 132, totalSalary: 8736000, totalBonus: 813900, ratingsSum: 449 },
  { city: "Nagpur", count: 140, totalSalary: 8667000, totalBonus: 811900, ratingsSum: 471 },
  { city: "Ahmedabad", count: 127, totalSalary: 8589000, totalBonus: 777700, ratingsSum: 431 }
];

// Status breakdown
export const STATUS_METRICS = [
  { status: "Active", count: 854, fill: "#00d2ff" },
  { status: "Resigned", count: 92, fill: "#ff6b00" },
  { status: "On Leave", count: 54, fill: "#c084fc" }
];

// Employment Type breakdown
export const EMPLOYMENT_TYPE_METRICS = [
  { type: "Full-Time", count: 864, fill: "#00d2ff" },
  { type: "Contract", count: 92, fill: "#ff8c00" },
  { type: "Intern", count: 44, fill: "#38bdf8" }
];

// Gender breakdown
export const GENDER_METRICS = [
  { gender: "Female", count: 502, fill: "#c084fc" },
  { gender: "Male", count: 498, fill: "#00d2ff" }
];

// Performance Ratings Distribution (1 to 5 stars)
export const PERFORMANCE_RATINGS = [
  { rating: "1 Star", count: 58, description: "Needs Improvement" },
  { rating: "2 Stars", count: 146, description: "Developing" },
  { rating: "3 Stars", count: 326, description: "Consistent / Expected" },
  { rating: "4 Stars", count: 318, description: "Exceeds Expectations" },
  { rating: "5 Stars", count: 152, description: "Top Performer" }
];

// Yearly Hiring Timeline (2015 to 2026 from Excel)
export const HIRING_TIMELINE = [
  { year: "2015", hires: 84 },
  { year: "2016", hires: 92 },
  { year: "2017", hires: 88 },
  { year: "2018", hires: 95 },
  { year: "2019", hires: 91 },
  { year: "2020", hires: 86 },
  { year: "2021", hires: 89 },
  { year: "2022", hires: 94 },
  { year: "2023", hires: 96 },
  { year: "2024", hires: 85 },
  { year: "2025", hires: 78 },
  { year: "2026", hires: 22 }
];

// Sample slice of 25 detailed employee records from your uploaded Excel data for live table display
export const SAMPLE_EMPLOYEES: EmployeeRecord[] = [
  { empId: "E1001", name: "Amit Jadhav", gender: "Male", age: 46, department: "HR", designation: "HR Executive", city: "Hyderabad", state: "Telangana", joinDate: "2018-02-17", experienceYears: 3, education: "MCA", employmentType: "Full-Time", salary: 71000, bonus: 3100, rating: 3, leaves: 0, trainingHours: 71, status: "Active" },
  { empId: "E1002", name: "Shweta Wagh", gender: "Female", age: 44, department: "Sales", designation: "Account Manager", city: "Hyderabad", state: "Telangana", joinDate: "2015-02-23", experienceYears: 5, education: "M.Sc", employmentType: "Full-Time", salary: 58000, bonus: 8900, rating: 2, leaves: 12, trainingHours: 12, status: "Active" },
  { empId: "E1003", name: "Tejashri Jadhav", gender: "Female", age: 36, department: "IT", designation: "QA Analyst", city: "Pune", state: "Maharashtra", joinDate: "2017-10-19", experienceYears: 12, education: "B.Sc", employmentType: "Full-Time", salary: 81000, bonus: 1100, rating: 4, leaves: 24, trainingHours: 37, status: "Active" },
  { empId: "E1004", name: "Suresh Kale", gender: "Male", age: 36, department: "Finance", designation: "Accountant", city: "Nashik", state: "Maharashtra", joinDate: "2023-03-08", experienceYears: 5, education: "M.Sc", employmentType: "Contract", salary: 63000, bonus: 8200, rating: 4, leaves: 5, trainingHours: 68, status: "Resigned" },
  { empId: "E1005", name: "Manoj Wagh", gender: "Male", age: 44, department: "Marketing", designation: "Marketing Executive", city: "Ahmedabad", state: "Gujarat", joinDate: "2019-12-05", experienceYears: 10, education: "MBA", employmentType: "Full-Time", salary: 85000, bonus: 6800, rating: 2, leaves: 18, trainingHours: 40, status: "Active" },
  { empId: "E1006", name: "Archana Wagh", gender: "Female", age: 44, department: "HR", designation: "HR Manager", city: "Hyderabad", state: "Telangana", joinDate: "2018-02-17", experienceYears: 7, education: "M.Sc", employmentType: "Full-Time", salary: 72000, bonus: 12900, rating: 3, leaves: 7, trainingHours: 17, status: "Active" },
  { empId: "E1007", name: "Neha Joshi", gender: "Female", age: 50, department: "IT", designation: "DevOps Engineer", city: "Bengaluru", state: "Karnataka", joinDate: "2018-08-03", experienceYears: 13, education: "MCA", employmentType: "Intern", salary: 49000, bonus: 5200, rating: 5, leaves: 0, trainingHours: 14, status: "Active" },
  { empId: "E1008", name: "Swati Kulkarni", gender: "Female", age: 37, department: "Finance", designation: "Finance Manager", city: "Pune", state: "Maharashtra", joinDate: "2018-07-19", experienceYears: 14, education: "M.Sc", employmentType: "Full-Time", salary: 87000, bonus: 8800, rating: 2, leaves: 20, trainingHours: 38, status: "Active" },
  { empId: "E1009", name: "Kiran Chavan", gender: "Male", age: 32, department: "HR", designation: "HR Executive", city: "Nagpur", state: "Maharashtra", joinDate: "2016-03-07", experienceYears: 10, education: "B.Sc", employmentType: "Full-Time", salary: 36000, bonus: 1700, rating: 4, leaves: 2, trainingHours: 10, status: "Resigned" },
  { empId: "E1010", name: "Neha Mane", gender: "Female", age: 51, department: "HR", designation: "HR Manager", city: "Nashik", state: "Maharashtra", joinDate: "2025-08-29", experienceYears: 5, education: "MCA", employmentType: "Contract", salary: 70000, bonus: 10600, rating: 4, leaves: 22, trainingHours: 39, status: "Active" },
  { empId: "E1011", name: "Pallavi Gawade", gender: "Female", age: 51, department: "Marketing", designation: "Marketing Executive", city: "Pune", state: "Maharashtra", joinDate: "2020-07-23", experienceYears: 7, education: "MBA", employmentType: "Full-Time", salary: 57000, bonus: 800, rating: 4, leaves: 7, trainingHours: 8, status: "Active" },
  { empId: "E1012", name: "Neha Gawade", gender: "Female", age: 44, department: "HR", designation: "HR Manager", city: "Bengaluru", state: "Karnataka", joinDate: "2025-11-20", experienceYears: 6, education: "M.Com", employmentType: "Full-Time", salary: 44000, bonus: 7100, rating: 3, leaves: 3, trainingHours: 55, status: "Active" },
  { empId: "E1013", name: "Snehal Wagh", gender: "Female", age: 54, department: "Operations", designation: "Supervisor", city: "Nagpur", state: "Maharashtra", joinDate: "2017-03-17", experienceYears: 1, education: "B.Com", employmentType: "Full-Time", salary: 78000, bonus: 8400, rating: 2, leaves: 5, trainingHours: 35, status: "Active" },
  { empId: "E1014", name: "Vikram Wagh", gender: "Male", age: 52, department: "Sales", designation: "Sales Executive", city: "Pune", state: "Maharashtra", joinDate: "2016-02-19", experienceYears: 0, education: "BBA", employmentType: "Full-Time", salary: 91000, bonus: 3900, rating: 3, leaves: 1, trainingHours: 21, status: "Active" },
  { empId: "E1015", name: "Yogesh Jadhav", gender: "Male", age: 44, department: "Marketing", designation: "SEO Specialist", city: "Mumbai", state: "Maharashtra", joinDate: "2024-06-27", experienceYears: 15, education: "MBA", employmentType: "Full-Time", salary: 47000, bonus: 5100, rating: 4, leaves: 1, trainingHours: 6, status: "Active" },
  { empId: "E1016", name: "Mansi Gawade", gender: "Female", age: 54, department: "HR", designation: "HR Executive", city: "Ahmedabad", state: "Gujarat", joinDate: "2026-05-23", experienceYears: 2, education: "B.Com", employmentType: "Contract", salary: 47000, bonus: 3800, rating: 5, leaves: 18, trainingHours: 31, status: "Active" },
  { empId: "E1017", name: "Harsh Deshmukh", gender: "Male", age: 27, department: "Marketing", designation: "Brand Manager", city: "Mumbai", state: "Maharashtra", joinDate: "2022-02-04", experienceYears: 8, education: "B.Sc", employmentType: "Full-Time", salary: 79000, bonus: 2100, rating: 4, leaves: 14, trainingHours: 40, status: "On Leave" },
  { empId: "E1018", name: "Amit Wagh", gender: "Male", age: 31, department: "Sales", designation: "Sales Manager", city: "Bengaluru", state: "Karnataka", joinDate: "2017-03-30", experienceYears: 2, education: "M.Sc", employmentType: "Contract", salary: 44000, bonus: 7800, rating: 5, leaves: 11, trainingHours: 36, status: "Active" },
  { empId: "E1019", name: "Namrata Sawant", gender: "Female", age: 27, department: "Sales", designation: "Sales Executive", city: "Hyderabad", state: "Telangana", joinDate: "2021-04-27", experienceYears: 9, education: "M.Sc", employmentType: "Contract", salary: 37000, bonus: 5500, rating: 2, leaves: 9, trainingHours: 77, status: "Active" },
  { empId: "E1020", name: "Kavita Jadhav", gender: "Female", age: 34, department: "Sales", designation: "Account Manager", city: "Pune", state: "Maharashtra", joinDate: "2020-08-19", experienceYears: 1, education: "M.Sc", employmentType: "Full-Time", salary: 72000, bonus: 11100, rating: 4, leaves: 8, trainingHours: 20, status: "Resigned" },
  { empId: "E1021", name: "Namrata Thakur", gender: "Female", age: 56, department: "Sales", designation: "Sales Executive", city: "Hyderabad", state: "Telangana", joinDate: "2017-07-05", experienceYears: 2, education: "B.E.", employmentType: "Full-Time", salary: 89000, bonus: 2600, rating: 2, leaves: 9, trainingHours: 46, status: "Active" },
  { empId: "E1022", name: "Kavita Gaikwad", gender: "Female", age: 52, department: "Operations", designation: "Operations Executive", city: "Bengaluru", state: "Karnataka", joinDate: "2022-12-07", experienceYears: 13, education: "MBA", employmentType: "Intern", salary: 79000, bonus: 12800, rating: 5, leaves: 0, trainingHours: 22, status: "Resigned" },
  { empId: "E1023", name: "Snehal Gaikwad", gender: "Female", age: 49, department: "Finance", designation: "Financial Analyst", city: "Ahmedabad", state: "Gujarat", joinDate: "2017-06-04", experienceYears: 12, education: "MBA", employmentType: "Full-Time", salary: 43000, bonus: 4000, rating: 3, leaves: 7, trainingHours: 28, status: "Active" },
  { empId: "E1024", name: "Yogesh Bhosale", gender: "Male", age: 53, department: "Finance", designation: "Financial Analyst", city: "Hyderabad", state: "Telangana", joinDate: "2021-04-05", experienceYears: 11, education: "B.Sc", employmentType: "Full-Time", salary: 73000, bonus: 14200, rating: 3, leaves: 8, trainingHours: 4, status: "Active" },
  { empId: "E1025", name: "Komal Bhosale", gender: "Female", age: 29, department: "Marketing", designation: "Marketing Executive", city: "Nagpur", state: "Maharashtra", joinDate: "2026-06-21", experienceYears: 3, education: "M.Sc", employmentType: "Full-Time", salary: 73000, bonus: 0, rating: 5, leaves: 17, trainingHours: 25, status: "Active" }
];
