import { tap, filter, first } from 'rxjs/operators';
import { CourseEntityService } from './course-entity.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    constructor(private coursesService: CourseEntityService) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            return this.coursesService.loaded$.pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.coursesService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
}
