import { describe, expect, it } from "vitest"
import Filters from "./../components/Filters"
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);
const initialState = {
    tasks: {
        tasks: [],
    },
};
describe("Check fields", () => {
    it("Must contain Title, description and Completed fields", () => {
        const store = mockStore(initialState);

        render(
            <Provider store={store}><Filters /></Provider>
        )

        const titleField = screen.getByTestId("filter-title");
        const descriptionField = screen.getByTestId("filter-description")
        const completedField = screen.getByTestId("filter-completed")
        expect(titleField).toBeInTheDocument();
        expect(descriptionField).toBeInTheDocument();
        expect(completedField).toBeInTheDocument();
    })
})
