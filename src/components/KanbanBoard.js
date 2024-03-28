import React, { useState } from "react";
import { containerStyle, stagesContainerStyle, stageStyle, stageTitleStyle, taskListStyle, taskItemStyle, buttonStyle } from "./KanbanCSS";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { name: 'task 0', stage: 0 },
    { name: 'task 1', stage: 0 },
    { name: 'task 2', stage: 0 },
    { name: 'task 3', stage: 0 },
    { name: 'task 4', stage: 1 },
    { name: 'task 5', stage: 1 },
    { name: 'task 6', stage: 1 },
    { name: 'task 7', stage: 2 },
    { name: 'task 8', stage: 2 },
    { name: 'task 9', stage: 3 },
  ]);

  const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

  const moveToForward = (task) => {
    setTasks(prevTasks => prevTasks.map(t => {
      if (t.name === task.name) {
        return { ...t, stage: t.stage + 1 };
      }
      return t;
    }));
  }

  const moveToBack = (task) => {
    setTasks(prevTasks => prevTasks.map(t => {
      if (t.name === task.name) {
        return { ...t, stage: t.stage - 1 };
      }
      return t;
    }));
  }

  return (
    <div style={containerStyle}>
      <div style={stagesContainerStyle}>
        {stagesNames.map((stageName, i) => (
          <div key={i} style={stageStyle}>
            <div style={stageTitleStyle}>{stageName}</div>
            <ul style={taskListStyle}>
              {tasks.filter(task => task.stage === i).map((task, index) => (
                <li key={`${i}${index}`} style={taskItemStyle}>
                  <span style={{ marginRight: '10px' }}>{task.name}</span>
                  <div>
                    <button disabled={task.stage === 0} onClick={() => moveToBack(task)} style={buttonStyle}>
                      <i className="material-icons">back</i>
                    </button>
                    <button disabled={task.stage === stagesNames.length - 1} onClick={() => moveToForward(task)} style={buttonStyle}>
                      <i className="material-icons">front</i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
