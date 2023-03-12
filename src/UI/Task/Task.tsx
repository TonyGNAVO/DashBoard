import TaskCss from "./Task.module.scss"
import { FC } from "react"
import { TaskStatusEnum } from "./TaskStatusEnum"
import CheckBox from "../../Images/CheckBox.svg"

type Props = { taskName: string, taskStatus: TaskStatusEnum }

export const Task: FC<Props> = ({ taskName, taskStatus }) => {
    return (
        <div className={TaskCss.task}>
            <figure className={TaskCss.taskCheckBox}>
                <img className={TaskCss.taskCheckBoxImage} src={CheckBox} alt="CheckBox">
                </img>
            </figure>
            <p className={TaskCss.taskName}>
                {taskName}
            </p>
            <p className={TaskCss.taskStatusLabel} style={{
                backgroundColor: `${taskStatus.backgroundColor}`,
                color: `${taskStatus.color}`
            }}>
                {taskStatus.name}
            </p>
        </div>
    )
}
