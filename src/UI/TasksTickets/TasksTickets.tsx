import TasksTicketsCss from "./TasksTickets.module.scss"
import TasksCard from "../TasksCard/TasksCard";
const TasksTickets = () => {
    return (
        <div className={TasksTicketsCss.tasksTickets}>
            <div className={TasksTicketsCss.tasksTicketsCard}></div>
            <div className={TasksTicketsCss.tasksTicketsCard}>
                <TasksCard />
            </div>
        </div>
    )
}

export default TasksTickets;