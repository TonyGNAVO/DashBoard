import { FC } from "react"
import { TaskStatusEnum } from "./TaskStatusEnum"
type Props = { taskName: string, taskStatus: TaskStatusEnum }

export const Task: FC<Props> = ({ taskName, taskStatus }) => {
    return (
        <div>
            <figure>
                <img alt="">
                </img>
            </figure>
            <p>

            </p>
            <p>

            </p>
        </div>
    )
}
