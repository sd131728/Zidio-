import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((t) => (
        <div key={t._id} className="task-item">
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <p><b>Priority:</b> {t.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
