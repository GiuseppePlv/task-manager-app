import { Button, Card } from "react-bootstrap";
import { useSelector } from 'react-redux';
import AddTask from "./AddTask";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/tasksSlice";
function TaskList() {
    const dispatch = useDispatch();
    const filteredTasks = useSelector((state) => {
        const { title, description, completed } = state.filter;
        const allTasks = state.tasks.tasks;


        return allTasks.filter(task => {
            const matchesTitle = task.title.toLowerCase().includes(title.toLowerCase());
            const matchesDescription = task.description.toLowerCase().includes(description.toLowerCase());
            const matchesCompleted =
                completed === null ? true : task.completed === completed;
            return matchesTitle && matchesDescription && matchesCompleted;
        });
    });

    const toggleStatus = (id) => {
        dispatch(toggleTask(id));
    }
    return (
        <>
            {filteredTasks && filteredTasks.length > 0 ? (
                filteredTasks.map((t, index) => (
                    <Card key={index} style={{ width: '18rem' }} className="border-0">
                        <Card.Body className={t.completed ? 'completedTask' : 'workinProgressTask'}>
                            <Card.Title>{t.title}</Card.Title>
                            <Card.Text>
                                {t.description}
                            </Card.Text>
                            <strong>Completed:</strong> {t.completed ? 'Yes' : 'No'}
                            {t.completed ?
                                <Button variant="success" hidden></Button>
                                :
                                <Button variant="warning" onClick={() => toggleStatus(t.id)}>Set as completed</Button>
                            }
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No tasks match your filter.</p>
            )}
            <AddTask />
        </>
    );
}

export default TaskList;
