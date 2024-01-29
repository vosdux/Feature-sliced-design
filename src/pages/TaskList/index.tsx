import { useEffect, useState } from "react";
import { Layout, Row, Space, Spin } from "antd";
import { observer } from "mobx-react-lite";
import taskStore from "@entities/task/model/taskStore";
import { TaskRow } from "@entities/task/ui/taskRow";
import { TaskFilter } from "@features/taskFilter";
import { ErrorStatus } from "@shared/components/ErrorStatus";
import { statusApiRequest } from "@shared/enums";

const TaskList = () => {
  const [filterStatus, setFilterStatus] = useState({});
  const { taskList, listStatus, getTaskListFx } = taskStore;

  useEffect(() => {
    getTaskListFx(filterStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);

  const taskListRender = taskList.map(({ id, title }) => (
    <Row justify="center">
      <TaskRow key={id} id={id} title={title} />
    </Row>
  ));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content style={{ minHeight: "100vh" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Row justify="center" align="middle">
            <TaskFilter onClick={setFilterStatus} />
          </Row>
          <ErrorStatus isError={listStatus === statusApiRequest.error}>
            <Space direction="vertical" style={{ width: "100%" }}>
              {listStatus === statusApiRequest.loading ? (
                <Spin style={{ position: "absolute", top: '50%', left: '50%' }} />
              ) : (
                taskListRender
              )}
            </Space>
          </ErrorStatus>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export const TaskListObserver = observer(TaskList);
