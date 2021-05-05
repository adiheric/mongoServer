import student from "./student.router.js";
import course from "./course.router";

export default app => {
    app.use ("/", student);
    app.use ("/",course);
}