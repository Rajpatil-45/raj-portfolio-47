import React, { useState, useMemo } from "react";
import {
  ArrowLeft,
  Users,
  UserCheck,
  TrendingUp,
  DollarSign,
  Award,
  Calendar,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  Table as TableIcon,
  Clock,
  ShieldAlert,
  Search
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import {
  EXCEL_KPI_SUMMARY,
  DEPARTMENT_METRICS,
  CITY_METRICS,
  STATUS_METRICS,
  HIRING_TIMELINE,
  SAMPLE_EMPLOYEES
} from "../../data/dashboardData";

interface DashboardPageProps {
  onBack: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onBack }) => {
  // Slicers / Filters
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [tableSearch, setTableSearch] = useState<string>("Marketing");

  // Filtered department data based on selected filters
  const filteredDepartments = useMemo(() => {
    if (selectedDept === "All") return DEPARTMENT_METRICS;
    return DEPARTMENT_METRICS.filter((d) => d.department === selectedDept);
  }, [selectedDept]);

  // Filtered employees table
  const filteredEmployees = useMemo(() => {
    return SAMPLE_EMPLOYEES.filter((emp) => {
      const matchDept = selectedDept === "All" || emp.department === selectedDept;
      const matchCity = selectedCity === "All" || emp.city === selectedCity;
      const matchStatus = selectedStatus === "All" || emp.status === selectedStatus;
      const matchType = selectedType === "All" || emp.employmentType === selectedType;
      const matchSearch =
        tableSearch === "" ||
        emp.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
        emp.empId.toLowerCase().includes(tableSearch.toLowerCase()) ||
        emp.department.toLowerCase().includes(tableSearch.toLowerCase()) ||
        emp.designation.toLowerCase().includes(tableSearch.toLowerCase());

      return matchDept && matchCity && matchStatus && matchType && matchSearch;
    });
  }, [selectedDept, selectedCity, selectedStatus, selectedType, tableSearch]);

  return (
    <div className="min-h-screen bg-[#05070c] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] bg-[#c084fc]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[28rem] h-[28rem] bg-[#ff6b00]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Back Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 text-slate-200 hover:text-white transition-all cursor-pointer font-mono text-xs group self-start"
          >
            <ArrowLeft className="w-4 h-4 text-[#00d2ff] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-xs font-mono text-[#00d2ff] self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            <span>Interactive HR & Workforce Intelligence Dashboard</span>
          </div>
        </div>

        {/* Dashboard Title & Description Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Excel Data Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#c084fc] to-[#ff6b00]">Dashboard</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-4xl mt-3 font-light leading-relaxed">
            An interactive HR and Workforce Intelligence Dashboard built using Excel data, featuring employee analytics, department-wise breakdowns, retention analysis, salary insights, hiring trends and workforce demographics.
          </p>
        </div>

        {/* ================= INTERACTIVE FILTERS & SLICERS PANEL ================= */}
        <div className="bg-[#0b0f1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-mono text-xs sm:text-sm font-semibold">
              <Filter className="w-4 h-4 text-[#ff6b00]" />
              <span>DASHBOARD FILTERS (Department, City, Status, Employment Type)</span>
            </div>
            <button
              onClick={() => {
                setSelectedDept("All");
                setSelectedCity("All");
                setSelectedStatus("All");
                setSelectedType("All");
                setTableSearch("");
              }}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer self-start sm:self-auto"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Department */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                Department
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-[#121726] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00d2ff] transition-colors"
              >
                <option value="All">All Departments (6)</option>
                <option value="IT">IT</option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                City / Location
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-[#121726] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00d2ff] transition-colors"
              >
                <option value="All">All Cities (7)</option>
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-[#121726] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff6b00] transition-colors"
              >
                <option value="All">All Statuses (3)</option>
                <option value="Active">Active (854)</option>
                <option value="Resigned">Resigned (92)</option>
                <option value="On Leave">On Leave (54)</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                Employment Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#121726] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c084fc] transition-colors"
              >
                <option value="All">All Types (3)</option>
                <option value="Full-Time">Full-Time (864)</option>
                <option value="Contract">Contract (92)</option>
                <option value="Intern">Intern (44)</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= 8 KPI CARDS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 mb-8">
          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#00d2ff]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Headcount</span>
              <Users className="w-3.5 h-3.5 text-[#00d2ff]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.totalEmployees}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Total Employees</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#10b981]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Active</span>
              <UserCheck className="w-3.5 h-3.5 text-[#10b981]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#10b981] font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.activeEmployees}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">85.4% Retention</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#ff6b00]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Attrition</span>
              <ShieldAlert className="w-3.5 h-3.5 text-[#ff6b00]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#ff6b00] font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.attritionRate}%
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">92 Resigned</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#00d2ff]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Total Payroll</span>
              <DollarSign className="w-3.5 h-3.5 text-[#00d2ff]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
              ₹65.5M
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">₹65,524,000</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#00d2ff]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Avg Salary</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#00d2ff]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
              ₹65.5K
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Per Employee</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#c084fc]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Rating</span>
              <Award className="w-3.5 h-3.5 text-[#c084fc]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#c084fc] font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.avgPerformanceRating} / 5
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Performance</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#38bdf8]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Training</span>
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.avgTrainingHours}h
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Avg Hours</div>
          </div>

          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-2xl p-4 hover:border-[#f59e0b]/40 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Leaves</span>
              <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
              {EXCEL_KPI_SUMMARY.avgLeavesTaken}d
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Per Annum</div>
          </div>
        </div>

        {/* ================= PRIMARY CHARTS ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Department Breakdown Chart */}
          <div className="lg:col-span-8 bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#00d2ff]" />
                  Department Breakdown: Total Payroll vs Total Bonus
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  6 Departments (IT leads with ₹14.15M, Finance ₹11.79M, Operations ₹10.20M)
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#00d2ff] bg-[#00d2ff]/10 px-2.5 py-1 rounded-full mt-2 sm:mt-0 self-start">
                Pivot Aggregation
              </span>
            </div>

            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredDepartments}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                  <XAxis dataKey="department" stroke="#94a3b8" fontSize={12} />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickFormatter={(val) => `₹${(val / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0b0f1a", borderColor: "#334155", borderRadius: "8px", fontSize: "12px" }}
                    formatter={(value: any, name: any) => [`₹${Number(value).toLocaleString()}`, name]}
                  />
                  <Legend />
                  <Bar dataKey="totalSalary" name="Total Payroll" fill="#00d2ff" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="totalBonus" name="Total Bonus" fill="#ff6b00" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Retention & Status Chart */}
          <div className="lg:col-span-4 bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                  <PieChartIcon className="w-4 h-4 text-[#ff6b00]" />
                  Retention & Status
                </h3>
                <span className="text-xs font-mono text-[#ff6b00]">1,000 Total</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Workforce health distribution
              </p>
            </div>

            <div className="w-full h-52 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STATUS_METRICS}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="status"
                  >
                    {STATUS_METRICS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0b0f1a", borderColor: "#334155", borderRadius: "8px", fontSize: "12px" }}
                    formatter={(val: any) => [`${val} Employees`, "Headcount"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#00d2ff]">854</div>
                <div className="text-[10px] text-slate-400">Active (85.4%)</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#ff6b00]">92</div>
                <div className="text-[10px] text-slate-400">Resigned (9.2%)</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#c084fc]">54</div>
                <div className="text-[10px] text-slate-400">On Leave (5.4%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECOND CHARTS ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* City-wise Distribution */}
          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-1">
              City-wise Distribution (7 Metros)
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Nashik (165), Hyderabad (148), Mumbai (144), Bengaluru (144)
            </p>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CITY_METRICS} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                  <YAxis type="category" dataKey="city" stroke="#94a3b8" fontSize={11} width={75} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0b0f1a", borderColor: "#334155", borderRadius: "8px", fontSize: "12px" }}
                    formatter={(val: any) => [`${val} Employees`, "Headcount"]}
                  />
                  <Bar dataKey="count" fill="#00d2ff" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Hiring Timeline */}
          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-1">
              Hiring Timeline (2015 - 2026)
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Onboarding trend across 11-year hiring timeline
            </p>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={HIRING_TIMELINE}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0b0f1a", borderColor: "#334155", borderRadius: "8px", fontSize: "12px" }}
                    formatter={(val: any) => [`${val} Hires`, "Count"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="hires"
                    stroke="#ff6b00"
                    strokeWidth={3}
                    dot={{ fill: "#ff6b00", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Workforce Demographics */}
          <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-1">
                Workforce Demographics
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Gender equality: 50.2% Female (502) & 49.8% Male (498)
              </p>
            </div>

            {/* Gender bar */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                  <span>Female (502)</span>
                  <span>Male (498)</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#c084fc]" style={{ width: "50.2%" }} />
                  <div className="h-full bg-[#00d2ff]" style={{ width: "49.8%" }} />
                </div>
              </div>

              {/* Employment Types */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-2">Employment Type breakdown:</span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[11px] font-bold text-white">Full-Time</div>
                    <div className="text-[10px] text-[#00d2ff] font-mono font-semibold">864 (86.4%)</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[11px] font-bold text-white">Contract</div>
                    <div className="text-[10px] text-[#ff8c00] font-mono font-semibold">92 (9.2%)</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[11px] font-bold text-white">Intern</div>
                    <div className="text-[10px] text-[#38bdf8] font-mono font-semibold">44 (4.4%)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Total Performance Score:</span>
              <span className="font-mono font-bold text-white">3,392 Rating Sum</span>
            </div>
          </div>
        </div>

        {/* ================= ACTUAL EMPLOYEE DATA TABLE WITH SEARCH ================= */}
        <div className="bg-[#0b0f1a]/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-[#00d2ff]" />
                Employee Records & Data View
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Displaying actual rows from your Excel sheet (Filtered: {filteredEmployees.length} records matching search)
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search name, ID, role or dept..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#00d2ff]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#070a14] uppercase font-mono text-[11px] text-slate-400 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Emp ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Gender</th>
                  <th className="py-3 px-4">Age</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Salary (₹)</th>
                  <th className="py-3 px-4">Bonus (₹)</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.empId} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-[#00d2ff]">
                      {emp.empId}
                    </td>
                    <td className="py-3 px-4 font-semibold text-white">{emp.name}</td>
                    <td className="py-3 px-4">{emp.gender}</td>
                    <td className="py-3 px-4">{emp.age}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px]">
                        {emp.department}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-200">{emp.designation}</td>
                    <td className="py-3 px-4">{emp.city}</td>
                    <td className="py-3 px-4 font-mono font-medium text-white">
                      ₹{emp.salary.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-400">
                      ₹{emp.bonus.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-[#c084fc] font-mono">{emp.rating}★</span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          emp.employmentType === "Full-Time"
                            ? "bg-[#00d2ff]/10 text-[#00d2ff]"
                            : emp.employmentType === "Contract"
                            ? "bg-[#ff8c00]/10 text-[#ff8c00]"
                            : "bg-[#38bdf8]/10 text-[#38bdf8]"
                        }`}
                      >
                        {emp.employmentType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${
                          emp.status === "Active"
                            ? "bg-[#10b981]/15 text-[#10b981]"
                            : emp.status === "Resigned"
                            ? "bg-[#ff6b00]/15 text-[#ff6b00]"
                            : "bg-[#c084fc]/15 text-[#c084fc]"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <span>Verified 1,000-row Excel dataset records</span>
            <button
              onClick={onBack}
              className="mt-2 sm:mt-0 font-mono text-[#00d2ff] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Back to Projects Overview</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
