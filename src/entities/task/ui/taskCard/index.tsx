import { Card } from "antd";
import { ReactNode } from "react";

type Props = {
  loading?: boolean;
  title?: string;
  text?: string;
  actiions?: ReactNode[];
  extra?: ReactNode;
};

export const TaskCard = ({ loading, title, text, actiions, extra }: Props) => {
  return (
    <Card loading={loading} actions={actiions} title={title} extra={extra} style={{ width: 300 }}>
      {text}
    </Card>
  );
};
