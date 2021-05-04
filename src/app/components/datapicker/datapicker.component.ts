import { DatapickerService } from './datapicker.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatapickerComponent {
  public datepicker = this.fb.group({
    date: new Date(),
  });

  constructor(
    private fb: FormBuilder,
    private datapickerService: DatapickerService
  ) {}

  public selectNewDate(): void {
    if (this.datepicker.status === 'VALID') {
      console.log(this.datepicker);
      this.datapickerService.date$.next(this.datepicker.value.date);
    }
  }
}
