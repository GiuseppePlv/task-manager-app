import { Alert, Button, Card, Form, InputGroup } from "react-bootstrap"
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/tasksSlice";

function AddTask() {
    const dispatch = useDispatch();
    const allTasks = useSelector((state) => state.tasks.tasks);
    const [addNewTaskShow, setAddNewTaskShow] = useState(false);
    const [errors, setErrors] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const showModalAddTask = (val) => {
        setAddNewTaskShow(val);
        resetErrors();
    }
    const handleSubmit = () => {
        const id = allTasks.length + 1;
        const newTask = {
            id,
            title,
            description,
            completed,
        };
        if (title.length > 2 && description.length > 2) {
            console.log('New Task:', newTask);
            setTitle('');
            setDescription('');
            setCompleted(false);
            setAddNewTaskShow(false);
            dispatch(addTask(newTask));
            resetErrors();
        } else {
            setErrors("Title and description must be filled in with at least 3 characters")
        }
    };

    const resetErrors = () => {
        setErrors(null);
    }
    return (
        <>
            {errors ?
                <Alert variant="danger" data-testid="error">
                    {errors}
                </Alert> : null
            }

            {addNewTaskShow ?
                <Card style={{ width: '18rem' }} className="border-0">
                    <Card.Body style={{ border: '3px solid #777777ff' }}>
                        <Card.Title>
                            <strong>ADD TASK </strong>
                            <IoIosCloseCircle className="ml-1" onClick={() => showModalAddTask(false)} />
                        </Card.Title>
                        <Card.Text>
                            <Form data-testid="add-task-form"
                                style={{ maxWidth: "600px", margin: "auto" }}
                                className="bg-white">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        name="title"
                                        placeholder="Task title"
                                        aria-label="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Control
                                        data-testid="title-input"
                                        name="description"
                                        placeholder="Task Description"
                                        aria-label="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Check
                                        data-testid="desc-input"
                                        name="completed"
                                        type="checkbox"
                                        label="Completed"
                                        id="check-completed"
                                        checked={completed}
                                        onChange={(e) => setCompleted(e.target.checked)}
                                    />
                                    <MdOutlineAddBox data-testid="submit-task" onClick={() => handleSubmit()}
                                        style={{ fontSize: '50px', margin: '10px 0px 0px 70px', cursor: 'pointer' }} />
                                </InputGroup>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                :
                <Card style={{ width: '18rem' }} className="border-0">
                    <Card.Body style={{ border: '3px solid #777777ff' }}>
                        <Card.Title>
                            <strong>ADD TASK</strong>
                        </Card.Title>
                        <Card.Text>
                            <GrAdd className="addTask" data-testid="open-add-task" onClick={() => showModalAddTask(true)} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
        </>)
}
export default AddTask