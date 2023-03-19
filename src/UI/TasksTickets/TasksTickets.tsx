import TasksTicketsCss from "./TasksTickets.module.scss";
import { Tickets } from "../Tickets/Tickets";
import Tasks from "../Tasks/Tasks";
import { TasksTicketsCard } from "../TasksTicketsCard/TasksTicketsCard";
const TasksTickets = () => {
    return (
        <div className={TasksTicketsCss.tasksTickets}>
            <TasksTicketsCard>
                <Tickets />
            </TasksTicketsCard>
            <TasksTicketsCard>
                <Tasks />
            </TasksTicketsCard>
        </div>
    );
};

export default TasksTickets;
