import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import TaskCard from "../components/TaskCard";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/tasks")
    .then((response)=>response.json())
    .then((data)=>setTasks(data));
  },[])

  const [showForm, setShowForm] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  });



  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      status: "Pending",
      priority: "Medium",
      dueDate: "",
    });

    setEditingTask(null);
    setShowForm(false);
  };



  const handleSubmit = async(e) => {
    e.preventDefault();

    if (editingTask) {
      const res = await fetch(
        `http://localhost:5000/api/tasks/${editingTask.id}`,
        {
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData),
        }
      );
      const updatedTask = await res.json();
      setTasks((prev)=>prev.map((task)=>task.id===editingTask.id ? updatedTask:task));
    } else {
      const res = await fetch("http://localhost:5000/api/tasks",
        {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify(formData),
        });
        const savedTask= await res.json();
        setTasks((prev)=>[savedTask,...prev]) 
    };

    resetForm();
  };

  const handleDelete = async(id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    await fetch (`http://localhost:5000/api/tasks/${id}`,
      {
        method:"DELETE",
      }
    );

    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const handleEdit = (task) => {
    setEditingTask(task);

    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
    });

    setShowForm(true);
  };

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" ||
      task.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

        <div>
          <h1 className="text-4xl font-bold">
            My Tasks
          </h1>

          <p className="mt-2 text-gray-600">
            Create, manage and track your tasks.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Task
        </button>

      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 border rounded-lg"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

      </div>

      {showForm && (
        <div className="mt-8 bg-white border rounded-2xl shadow-lg p-7">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              {editingTask ? "Edit Task" : "Create New Task"}
            </h2>

            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-red-500"
            >
              <X />
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-7 grid md:grid-cols-2 gap-5"
          >

            <div className="md:col-span-2">

              <label className="font-semibold">
                Task Title
              </label>

              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                required
                className="mt-2 w-full px-4 py-3 border rounded-lg"
                placeholder="Enter task title"
              />

            </div>

            <div className="md:col-span-2">

              <label className="font-semibold">
                Description
              </label>

              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                rows="4"
                className="mt-2 w-full px-4 py-3 border rounded-lg"
                placeholder="Describe your task"
              />

            </div>

            <div>

              <label className="font-semibold">
                Status
              </label>

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  })
                }
                className="mt-2 w-full px-4 py-3 border rounded-lg"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Priority
              </label>

              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    priority: e.target.value,
                  })
                }
                className="mt-2 w-full px-4 py-3 border rounded-lg"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Due Date
              </label>

              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dueDate: e.target.value,
                  })
                }
                className="mt-2 w-full px-4 py-3 border rounded-lg"
              />

            </div>

            <div className="md:col-span-2 flex gap-3">

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                {editingTask ? "Update Task" : "Create Task"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-100 px-6 py-3 rounded-lg font-semibold"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="md:col-span-2 text-center bg-white p-12 rounded-2xl border">
            <h3 className="text-xl font-bold">
              No tasks found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or create a new task.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}

export default Tasks;