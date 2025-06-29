import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Task = ({ tasks, deleteTask }) => (
  <div className="overflow-x-auto bg-theme-surface shadow-2xl rounded-2xl border border-theme-border backdrop-blur-sm">
    <table className="min-w-full text-sm text-theme-text font-medium">
      <thead>
        <tr className="border-b border-theme-border bg-theme-surface/80 backdrop-blur-md text-xs text-theme-muted uppercase tracking-wider">
          <th className="px-6 py-4 text-left">Title</th>
          <th className="px-6 py-4 text-left">Priority</th>
          <th className="px-6 py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td
              colSpan="3"
              className="px-6 py-8 text-center text-theme-muted italic"
            >
              No tasks found.
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-theme-border hover:bg-theme-hover/10 transition duration-200"
            >
              <td className="px-6 py-5 text-theme-text">{task.title}</td>
              <td className="px-6 py-5">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold capitalize shadow-sm
                    ${
                      task.priority === "high"
                        ? "bg-red-500 text-white"
                        : task.priority === "medium"
                        ? "bg-yellow-400 text-black"
                        : "bg-green-500 text-white"
                    }
                  `}
                >
                  {task.priority}
                </span>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex justify-end items-center gap-3">
                  <Link to={`/edit/${task.id}`}>
                    <button
                      title="Edit"
                      className="p-2 rounded-md text-theme-primary hover:text-theme-hover transition"
                    >
                      <FiEdit size={18} />
                    </button>
                  </Link>
                  <button
                    title="Delete"
                    onClick={() => deleteTask(task.id)}
                    className="p-2 rounded-md text-red-500 hover:bg-red-500/10 transition"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default Task;
