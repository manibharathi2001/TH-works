import React from "react";

function TaskList({ tasks }) {
  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <div className="grid gap-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-white rounded-lg shadow border-l-4"
          style={{
            borderColor:
              task.priority === "High"
                ? "red"
                : task.priority === "Medium"
                ? "orange"
                : "green",
          }}
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <div className="text-sm text-gray-600 mt-2">
            <p>Priority: {task.priority}</p>
            <p>Due: {task.due_date}</p>
            <p>Status: {task.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
