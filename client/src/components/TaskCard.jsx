import {
  Trash2,
  Pencil,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function TaskCard({ task, onDelete, onEdit }) {
  const priorityStyle = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusStyle = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Pending: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {task.title}
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            {task.description}
          </p>
        </div>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(task)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            statusStyle[task.status]
          }`}
        >
          {task.status}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            priorityStyle[task.priority]
          }`}
        >
          {task.priority} Priority
        </span>

      </div>

      <div className="mt-5 flex items-center gap-5 text-sm text-gray-500">

        <span className="flex items-center gap-2">
          <Clock3 size={16} />
          {task.dueDate || "No deadline"}
        </span>

        {task.status === "Completed" && (
          <span className="flex items-center gap-2 text-green-600">
            <CheckCircle2 size={16} />
            Done
          </span>
        )}

      </div>

    </div>
  );
}

export default TaskCard;