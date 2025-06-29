import { Link } from "react-router-dom";
import {
  FaPlus,
  FaSearch,
  FaSortAmountDown,
  FaFilter,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import Task from "../components/Task";
import ThemeToggle from "../components/ThemeToggle";

const Home = ({
  tasks,
  deleteTask,
  searchItem,
  setSearchItem,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const prev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const next = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="min-h-screen bg-theme-background text-theme-text px-4 md:px-6 py-10 font-poppins">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-theme-surface rounded-2xl p-6 md:p-8 shadow-xl border border-theme-border flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-theme-primary">Task</span>
              <span className="text-theme-text">Master</span>
            </h1>
            <p className="text-theme-muted mt-1 text-sm md:text-base">
              Rule Your Day.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full md:w-auto">
            <Link to="/create">
              <button className="flex items-center gap-2 bg-theme-primary hover:bg-theme-secondary text-white px-4 py-2 rounded-lg transition shadow-lg font-medium w-full sm:w-auto justify-center">
                <FaPlus size={16} />
                <span>Add Task</span>
              </button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-theme-surface border border-theme-border rounded-2xl p-6 shadow-lg mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <input
              type="text"
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search tasks..."
              className="pl-10 pr-4 py-2 w-full bg-theme-background text-theme-text border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <select
              value={priorityFilter}
              onChange={(e) => {
                setPriorityFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none pl-12 pr-4 py-2 w-full bg-theme-background text-theme-text border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary text-sm sm:text-base"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="relative">
            <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none pl-12 pr-4 py-2 w-full bg-theme-background text-theme-text border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary text-sm sm:text-base"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="priority-high">Priority: High → Low</option>
              <option value="priority-low">Priority: Low → High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Task tasks={tasks} deleteTask={deleteTask} />
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prev}
            disabled={currentPage === 1}
            className="px-5 py-2 bg-theme-primary text-white rounded-lg hover:bg-theme-secondary disabled:opacity-50 flex items-center gap-2"
          >
            <FaArrowLeft />
          </button>
          <span className="text-theme-muted font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={next}
            disabled={currentPage === totalPages}
            className="px-5 py-2 bg-theme-primary text-white rounded-lg hover:bg-theme-secondary disabled:opacity-50 flex items-center gap-2"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
