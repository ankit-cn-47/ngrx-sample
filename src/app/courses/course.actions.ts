import { Course } from './model/course';
import { createAction, props } from "@ngrx/store";

export const loadAllCourses = createAction(
    '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
    '[Load courses effect] All Courses Loaded',
    props<{courses: Course[]}>()
);
