const defaultState = {
    initialForm:{
        model: "Initial",
        form: [
            {
                type: "text",
                label: "Pre-loaded Value #1",
                name: "initialOne",
                default: ''
            },
            {
                type: "text",
                label: "Pre-loaded Value #2",
                name: "initialTwo",
                default: ''
            },
            {
                type: "select",
                label: "Select Input",
                name: "inputSelect",
                default: '',
                placeholder: "Select Item . . ."
            },
            {
                type: "datepicker",
                label: "Select Date",
                name: "initialFour"
            },
            {
                type: "multi-checkbox",
                label: "Multiple Checkbox",
                name: "multiCheckbox",
                default: []
            },
            {
                type: "radio",
                label: "Radio Button Group",
                name: "radioInput",
                default: ''
            },
        ]
    },
    nestedForm: [
        {
            label: "Model One",
            model: "ModelOne",
            form: [
                {
                    type: "text",
                    label: "One Input 1",
                    name: "tabOneInput1",
                    default: 'Test'
                },
                {
                    type: "text",
                    label: "One Input 2",
                    name: "tabOneInput2",
                    default: ''
                }
            ]
        },
        {
            label: "Model Two",
            model: "ModelTwo",
            form: [
                {
                    type: "text",
                    label: "Two Input 1",
                    name: "tabTwoInput1",
                    default: ''
                },
                {
                    type: "text",
                    label: "Two Input 2",
                    name: "tabTwoInput2",
                    default: ''
                }
            ]
        },
        {
            label: "Model Three",
            model: "ModelThree",
            form: [
                {
                    type: "select",
                    label: "Select Input",
                    name: "inputSelect",
                    default: '',
                    placeholder: "Select Item . . ."
                },
                {
                    type: "datepicker",
                    label: "Select Date",
                    name: "threeDateInput",
                    default: 1
                }
            ]
        }
    ],

    basicForm: {
        model: "Basic",
        form: [
            {
                type: "text",
                label: "No Validation",
                minLength: 1,
                maxLength: 255,
                name: "inputOne",
                default: 'Default'
            },
            {
                type: "text",
                label: "Empty Validation",
                minLength: 1,
                maxLength: 255,
                name: "inputTwo",
                default: ''
            },
            {
                type: "text",
                label: "Limit to 10 characters",
                maxLength: 10,
                name: "inputLimit",
                default: 'Default'
            },
            {
                type: "number",
                label: "Number Validation",
                name: "numberInput",
                default: 0
            },
            {
                component: "textarea", //Take note that textarea is a component and not a type
                label: "Text Area Validation",
                maxLength: 100,
                name: "textAreaInput",
                default: ''
            },
            {
                type: "email",
                label: "Email Validation",
                minLength: 1,
                maxLength: 255,
                name: "inputEmail",
                default: ''
            },
            {
                type: "select",
                label: "Select Input",
                name: "inputSelect",
                default: '',
                placeholder: "Select Item . . ."
            },
            {
                type: "datepicker",
                label: "Select Date",
                name: "inputDate",
                default: 1
            },
            {
                type: "multi-checkbox",
                label: "Multiple Checkbox",
                name: "multiCheckbox",
                default: []
            },
            {
                type: "multi-checkbox",
                label: "Multiple Checkbox (Inline)",
                name: "multiInlineCheckbox",
                inline: true,
                default: []
            },
            {
                type: "checkbox",
                label: "Single Checkbox",
                name: "singleCheckbox",
                default: false
            },
            {
                type: "radio",
                label: "Radio Button Group",
                name: "radioInput",
                default: ''
            },
            {
                type: "radio",
                label: "Radio Button Group (Inline)",
                name: "radioInlineInput",
                inline: true,
                default: ''
            },
            {
                type: "file",
                label: "File Upload",
                name: "uploadFile",
                default: null
            }
        ]
    },
    selectInput: [
        { name: "inputSelect", value: 1, label: "Car" },
        { name: "inputSelect", value: 2, label: "Bag" },
        { name: "inputSelect", value: 3, label: "Pool" }
    ],
    checkboxInput: [
        { name: "multiCheckbox", value: 1, label: "Car" },
        { name: "multiCheckbox", value: 2, label: "Bag" },
        { name: "multiCheckbox", value: 3, label: "Pool" },
        { name: "multiInlineCheckbox", value: 1, label: "Dog" },
        { name: "multiInlineCheckbox", value: 2, label: "Cat" },
        { name: "multiInlineCheckbox", value: 3, label: "Fish" }
    ],
    radioInput: [
        { name: "radioInput", value: 1, label: "Option #1" },
        { name: "radioInput", value: 2, label: "Option #2" },
        { name: "radioInput", value: 3, label: "Option #3" },
        { name: "radioInlineInput", value: 1, label: "Option #1" },
        { name: "radioInlineInput", value: 2, label: "Option #2" },
        { name: "radioInlineInput", value: 3, label: "Option #3" },
    ]
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default: return state;
    }
};