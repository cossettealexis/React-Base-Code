import Employee from "./Employee";
import EditForm from "./EditForm";
    
const TestRoutes = [
    {
        label: "Employee",
        path: "/Employee",
        component: Employee,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "EditForm",
        path: "/EditForm" + "/:id",
        component: EditForm,
        exact: true,
    }
]
    
export default TestRoutes;