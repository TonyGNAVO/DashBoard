import TasksTicketsCss from "./TasksTickets.module.scss";
import TasksCard from "../TasksCard/TasksCard";
import { TicketsCard } from "../TicketsCard/TicketsCard";
const TasksTickets = () => {
    return (
        <div className={TasksTicketsCss.tasksTickets}>
            <div className={TasksTicketsCss.tasksTicketsCard}>
                <TicketsCard />
            </div>
            <div className={TasksTicketsCss.tasksTicketsCard}>
                <TasksCard />
            </div>
        </div>
    );
};

export default TasksTickets;
