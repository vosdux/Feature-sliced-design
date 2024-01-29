import { Checkbox, Spin } from "antd";
import taskStore from "@entities/task/model/taskStore";
import { Todo } from "@shared/api/todos/models";
import { observer } from "mobx-react-lite";
import { useState } from "react";

type Props = {
  id: number;
  isTaskPage?: boolean;
  title?: string;
};

export const ToggleTask = observer(({ id, isTaskPage, title }: Props) => {
  const { updateTodoFx, taskList, task } = taskStore;
  const [loading, setIsLaoding] = useState(false);
  const getTask = () => {
    if (isTaskPage) {
      return task;
    } else {
      return taskList.find((elem) => elem.id === id);
    }
  };

  const localTask = getTask() as Todo;

  const onToggle = async () => {
    setIsLaoding(true);
    await updateTodoFx(
      { ...localTask, completed: !localTask.completed },
      !!isTaskPage
    );
    setIsLaoding(false);
  };

  return loading ? (
    <Spin size="small" />
  ) : (
    <Checkbox checked={localTask.completed} onChange={onToggle}>
      {title}
    </Checkbox>
  );
});
