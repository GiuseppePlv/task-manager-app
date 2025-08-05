import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./../components/AddTask"
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

const mockStore = configureMockStore([]);
const initialState = {
    tasks: {
        tasks: [],
    },
};

describe("AddTask component", () => {
    it("shows error if title or description is less than 3 characters", () => {
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );

        const openBtn = screen.getByTestId("open-add-task");
        fireEvent.click(openBtn);

        const titleInput = screen.getByPlaceholderText("Task title");
        const descInput = screen.getByPlaceholderText("Task Description");

        fireEvent.change(titleInput, { target: { value: "aa" } });
        fireEvent.change(descInput, { target: { value: "bb" } });

        const submitIcon = screen.getByTestId("submit-task", { hidden: true });
        fireEvent.click(submitIcon);

        expect(screen.getByTestId("error")).toHaveTextContent(
            "Title and description must be filled in with at least 3 characters"
        );

        const actions = store.getActions();
        expect(actions).toEqual([]);
    });
});
