import { TranslateService } from '@ngx-translate/core';
import { IResponseTVMaze } from './../../models/response-tvmaze.interface';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() set item(data: IResponseTVMaze) {
    if (data) {
      this.checkSrcImg(data);
      this.checkSummary(data);
      this.setTimmer(data);
      this._item = data;
    }
  }
  @Output() clickEvent: EventEmitter<number> = new EventEmitter();
  public _item: IResponseTVMaze;
  public summary: string = '';
  public time: string = '';
  public imgSrc: string =
    'https://static.tvmaze.com/uploads/images/medium_portrait/310/775188.jpg';

  constructor(private translateService: TranslateService) {}

  public emitClick(id: number): void {
    this.clickEvent.emit(id);
  }

  private checkSrcImg(item: IResponseTVMaze): void {
    const { image } = item._embedded.show;
    if (image) {
      this.imgSrc = image.medium;
    }
  }

  private checkSummary(item: IResponseTVMaze): void {
    if (item.summary) {
      this.summary = item.summary;
    } else if (item._embedded.show.summary) {
      this.summary = item._embedded.show.summary;
    } else {
      this.summary = this.translation('missingSummary');
    }
  }

  private setTimmer(data: IResponseTVMaze): void {
    const { time } = data._embedded.show.schedule;
    if (time.length) {
      this.time = time;
    } else {
      this.time = this.translation('missingTime');
    }
  }

  private translation(key: string): string {
    return this.translateService.instant(`card.${key}`);
  }
}
