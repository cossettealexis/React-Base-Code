//Import the action types
import * as types from "./types";

const defaultState = {
    reducerVariable: "Add Form",
    table: {
        // Table headers
        tableHeader: [
            "ID",
            "Name",
            "Position",
            "Birthdate",
            "Gender",
            ""
        ],

        //The array values should match the names or ["keys"] on the list array data.
        tableColumns: [
            "id",
            "name",
            "position",
            "birthdate",
            "gender"
        ]
    },
    list: [
    ], //holds the data to be presented on the table

    employeeForm: { // Form
        model: "EmployeeForm",   //Define your model name
        form: [
            {
                type: "text",
                label: "Employee ID",
                name: "id",
                default: ''
            },
            {
                type: "text",
                label: "Full Name",
                name: "name",
                default: ''
            },
            {
                type: "text",
                label: "Position",
                name: "position",
                default: ''
            },
            {
                type: "number",
                label: "Salary",
                name: "salary",
                default: 0
            },
            {
                type: "datepicker",
                label: "Birthdate",
                name: "birthdate"
            },
            {
                type: "radio",
                label: "Gender",
                name: "gender",
                inline: false,
                default: ''
            },
            {
                type: "checkbox",
                label: "Regular?",
                name: "regular",
                default: false
            },
            {
                type: "multi-checkbox",
                label: "Technologies",
                name: "technologies",
                inline: false,
                default: []
            },
        ],

    },

    radioInput: [
        { name: "gender", value: "Male", label: "Male" },
        { name: "gender", value: "Female", label: "Female" },
    ],
    checkboxInput: [
        { name: "technologies", value: 1, label: "C#" },
        { name: "technologies", value: 2, label: "Java" },
        { name: "technologies", value: 3, label: "PHP" },
        { name: "technologies", value: 4, label: "Javascript" }
    ],

}

//Define how the states will change based on the dispatched action
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case types.UPDATE_STATE:
            return {
                ...state,
                list: action.payload
            };
        default: return state;
    }
};