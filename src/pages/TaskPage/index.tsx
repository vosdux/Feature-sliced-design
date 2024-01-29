import { useEffect } from "react";
import { Layout, Row } from "antd";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import taskStore from "@entities/task/model/taskStore";
import { TaskCard } from "@entities/task/ui/taskCard";
import { ToggleTask } from "@features/toggleTask";
import { ErrorStatus } from "@shared/components/ErrorStatus";
import { statusApiRequest } from "@shared/enums";

const TaskPage = () => {
  const { id } = useParams<{ id: string }>();
  const { taskStatus, task, getTaskFx } = taskStore;

  useEffect(() => {
    console.log(id, "id");
    if (id) {
      getTaskFx(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content style={{ height: "100vh" }}>
        <Row justify="center" align="middle">
          <ErrorStatus isError={taskStatus === statusApiRequest.error}>
            <TaskCard
              loading={taskStatus === statusApiRequest.loading}
              title={`Task#${task?.id}`}
              text={task?.title}
              actiions={
                taskStatus === statusApiRequest.success
                  ? [<ToggleTask id={Number(id)} isTaskPage title={task?.completed ? 'Open' : 'Close'} />]
                  : undefined
              }
              extra={<Link to="/">Back to list</Link>}
            />
          </ErrorStatus>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export const TaskPageObserver = observer(TaskPage);
