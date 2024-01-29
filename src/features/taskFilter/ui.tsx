import { Radio } from 'antd';
import { filterList } from './config';
const { Group, Button } = Radio;

type Props = {
    onClick: (params: typeof filterList[0]['params']) => void
}
export const TaskFilter = ({ onClick }: Props) => {
    return (
        <Group defaultValue={1}>
            {filterList.map(({ id, title, params }) => (
                <Button key={id} value={id} onClick={() => onClick(params)}>{title}</Button>
            ))}
        </Group>
    )
}