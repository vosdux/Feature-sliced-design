import { Card, Space } from "antd";
import { ToggleTask } from "@features/toggleTask";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: number;
};

export const TaskRow = ({ title, id }: Props) => {
  return (
    <Card style={{ width: 600 }}>
      <Space>
        <ToggleTask id={id} />
        <Link to={`/${id}`}>{title}</Link>
      </Space>
    </Card>
  );
};
