import { select } from '@ngrx/store';
import { first, tap, finalize, filter } from 'rxjs/operators';
import { loadAllCourses } from './course.actions';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { areCoursesLoaded } from './courses.selectors';

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
            return this.store.pipe(
                select(areCoursesLoaded),
                tap((coursesLoaded) => {
                    if (!this.loading && !coursesLoaded) {
                        this.loading = true;
                        this.store.dispatch(loadAllCourses());
                    }
                }),
                filter(courseLoaded => courseLoaded),
                first(),
                finalize(() => this.loading = false)
            );
        }
}
