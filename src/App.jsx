import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";
import useTasks from "./hooks/useTasks";

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    editTask,
    searchItem,
    setSearchItem,
    priorityFilter,
    setPriorityFilter,
    setSortBy,
    sortBy,
    currentPage,
    paginatedTasks,
    setCurrentPage,
    totalPages,
  } = useTasks();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={paginatedTasks}
              deleteTask={deleteTask}
              searchItem={searchItem}
              setSearchItem={setSearchItem}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          }
        ></Route>
        <Route
          path="/create"
          element={<CreateTask addTask={addTask} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} editTask={editTask} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
