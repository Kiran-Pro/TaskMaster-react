import { useEffect, useState } from "react";

const priorityValue = (p) => {
  if (p === "high") return 3;
  if (p === "medium") return 2;
  if (p === "low") return 1;
  return 0;
};

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchItem, setSearchItem] = useState("");
  const [priorityFilter, setPriorityFilter] = useState(() => {
    return localStorage.getItem("priorityFilter") || "all";
  });

  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("sortBy") || "newest";
  });

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("priorityFilter", priorityFilter);
    localStorage.setItem("sortBy", sortBy);
  }, [tasks, priorityFilter, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchItem, priorityFilter, sortBy]);

  const addTask = ({ title, priority }) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle, newPriority) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, priority: newPriority }
          : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) =>
      priorityFilter === "all" ? true : task.priority === priorityFilter
    )
    .filter((task) =>
      task.title.toLowerCase().includes(searchItem.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "priority-high")
        return priorityValue(b.priority) - priorityValue(a.priority);
      if (sortBy === "priority-low")
        return priorityValue(a.priority) - priorityValue(b.priority);
      return 0;
    });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
    searchItem,
    setSearchItem,
    priorityFilter,
    setPriorityFilter,
    sortBy,
    setSortBy,
    filteredTasks,
    paginatedTasks,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default useTasks;
