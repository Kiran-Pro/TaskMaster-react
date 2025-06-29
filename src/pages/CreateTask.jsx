import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

const CreateTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    if (!priority) {
      alert("Please select a priority.");
      return;
    }
    addTask({ title: task, priority });
    setTask("");
    setPriority("");
    navigate("/");
  };

  return (
    <div className="min-h-screen px-4 md:px-6 py-10 bg-theme-background text-theme-text font-poppins">
      <div className="max-w-3xl mx-auto bg-theme-surface border border-theme-border shadow-2xl rounded-2xl p-6 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-theme-primary tracking-tight">
            Create New Task
          </h2>
          <ThemeToggle />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-theme-muted">
              Task Title
            </label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
              className="w-full px-4 py-2 rounded-lg border border-theme-border bg-theme-background text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-theme-muted">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-theme-border bg-theme-background text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-primary"
            >
              <option value="" disabled hidden>
                -- Select Priority --
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-theme-primary text-white rounded-lg font-semibold shadow hover:bg-theme-secondary transition"
            >
              Add Task
            </button>

            <Link to="/" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-theme-background border border-theme-border text-theme-muted hover:text-theme-text hover:bg-theme-hover rounded-lg transition"
              >
                <FaArrowLeft size={14} />
                Back to Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
