import { createEffect } from '@ngrx/effects';
import { allCoursesLoaded } from './course.actions';
import { concatMap, map } from 'rxjs/operators';
import { CoursesHttpService } from './services/courses-http.service';
import { ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CourseActions } from './action-types';

@Injectable()
export class CoursesEffects {

    loadCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap(action =>
            this.coursesHttpService.findAllCourses()),
        map(courses => allCoursesLoaded({courses}))
    ));

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {}
}
