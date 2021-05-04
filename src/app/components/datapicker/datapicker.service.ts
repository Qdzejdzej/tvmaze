import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatapickerService {
  public date$: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  constructor() {}
}
