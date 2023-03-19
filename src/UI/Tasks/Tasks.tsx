import { Task } from "../Task/Task";
import { TaskStatusEnum } from "../Task/TaskStatusEnum";

type TaskProps = {
    id: number;
    taskName: string;
    taskStatus: TaskStatusEnum;
};

export const Tasks = () => {
    const taskProps: TaskProps[] = [
        {
            id: 1,
            taskName: "Finish ticket update",
            taskStatus: TaskStatusEnum.URGENT,
        },
        {
            id: 2,
            taskName: "Create new ticket example",
            taskStatus: TaskStatusEnum.NEW,
        },
        {
            id: 3,
            taskName: "Finish ticket update",
            taskStatus: TaskStatusEnum.DEFAULT,
        },
    ];

    return (
        <>
            {taskProps.map((p) => (
                <Task
                    key={p.id}
                    taskName={p.taskName}
                    taskStatus={p.taskStatus}
                />
            ))}
        </>
    );
};
