import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {
  public chipSelect$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
}
