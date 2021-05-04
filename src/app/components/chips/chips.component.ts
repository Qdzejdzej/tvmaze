import { ChipsService } from './chips.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  @Input() chips: string;
  public selected: string;
  constructor(private chipsService: ChipsService) {}

  public toggleChip(i: number): void {
    if (this.selected !== this.chips[i]) {
      this.selected = this.chips[i];
      this.chipsService.chipSelect$.next(this.chips[i]);
    } else {
      this.selected = '';
      this.chipsService.chipSelect$.next('');
    }
  }
}
