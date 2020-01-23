import { Lesson } from './../model/lesson';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Lesson', serviceElementFactory);
    }
}
