import TasksCardCSS from "./TasksCard.module.scss"
import CreateIcon from "../../Images/CreateIcon.svg"
import { Tasks } from "../Tasks/Tasks"
import { Form } from "../Form/Form"
import React, { useState } from 'react'

const TasksCard = () => {

    const [isFormActive, setIsFormActive] = useState(false)

    return (
        <>
            <Form active={isFormActive} setIsFormActive={setIsFormActive} />
            <h2 className={TasksCardCSS.tasksCardTitle}>Tasks</h2>
            <p className={TasksCardCSS.tasksCardAll}>View all</p>
            <p className={TasksCardCSS.tasksCardDay}>Today</p>
            <div className={TasksCardCSS.tasksCardRowCreate}>
                <p className={TasksCardCSS.tasksCardRowCreatePlaceholder}>Create new task</p>
                <figure className={TasksCardCSS.tasksCardRowCreateMedia} onClick={e => setIsFormActive(true)}>
                    <img className={TasksCardCSS.tasksCardRowCreateMediaImg} src={CreateIcon} alt="Icon to create a task" />
                </figure>
            </div>
            <Tasks />
        </>
    )
}

export default TasksCard;