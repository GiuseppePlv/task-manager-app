import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter, resetFilter } from "../redux/filterSlice";

function Filters() {
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.elements["title"].value;
        const description = form.elements["description"].value;
        const completed = form.elements["completed"].checked;

        dispatch(setFilter({
            title,
            description,
            completed: form.elements["completed"].indeterminate
                ? null
                : completed
        }));
    };

    return (
        <>
            <Row>
                <Form
                    style={{ maxWidth: "600px", margin: "auto" }}
                    className="bg-white p-3"
                    onSubmit={handleFilter}
                >
                    <h2>Task filters</h2>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Title</InputGroup.Text>
                        <Form.Control
                            data-testid="filter-title"
                            name="title"
                            placeholder="Task title"
                            aria-label="title"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>Description</InputGroup.Text>
                        <Form.Control
                            data-testid="filter-description"
                            name="description"
                            placeholder="Task Description"
                            aria-label="description"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Check
                            data-testid="filter-completed"

                            name="completed"
                            type="checkbox"
                            label="Completed"
                            id="check-completed"
                        />
                    </InputGroup>

                    <Button variant="success" type="submit">Filter</Button>
                    <Button
                        variant="secondary"
                        className="m-lg-1"
                        onClick={() => dispatch(resetFilter())}
                    >
                        Show all tasks
                    </Button>
                </Form>
            </Row>
        </>
    );
}

export default Filters;
