import { ROOT } from "../../../config/settings";
import FormikDemo from "./FormikDemo";
import RootPage from "./RootPage";
import FileDemo from "./FileDemo";
import MultiTabForm from "./MultiTabForm";
import FormInitialValues from "./FormInitialValues";
import NestedParent from "./NestedDemo/NestedParent";
import ChildOne from "./NestedDemo/NestedChild1/ChildOne";
import ChildTwo from "./NestedDemo/NestedChild2/ChildTwo";

export const routes = [
    {
        label: "Home",
        path: ROOT,
        component: RootPage,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "Formik",
        path: "/FormikDemo",
        component: FormikDemo,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "File",
        path: "/FileDemo",
        component: FileDemo,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "Multi-Form",
        path: "/MultiFormDemo",
        component: MultiTabForm,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "Initial Value",
        path: "/FormInitialValue",
        component: FormInitialValues,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "Nested Demo",
        path: "/NestedDemo",
        component: NestedParent,
        exact: true,
        showNav: true //if true, displays the label in the mainHeader.js component
    },
    {
        label: "Nested Child One",
        path: "/NestedDemo/NestedChildOne",
        component: ChildOne,
        exact: true
    },
    {
        label: "Nested Child Two",
        path: "/NestedDemo/NestedChildTwo",
        component: ChildTwo,
        exact: true
    },
]