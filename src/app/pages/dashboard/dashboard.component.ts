import { ChipsService } from './../../components/chips/chips.service';
import { DatapickerService } from './../../components/datapicker/datapicker.service';
import { switchMap, tap } from 'rxjs/operators';
import { IResponseTVMaze } from './../../models/response-tvmaze.interface';
import { HttpService } from './../../services/http/http.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  public items: IResponseTVMaze[] = [];
  public chips: string[] = [];
  private subscription = new Subscription();

  constructor(
    private http: HttpService,
    private router: Router,
    private datapickerService: DatapickerService,
    private chipsService: ChipsService
  ) {
    this.subscription = this.datapickerService.date$
      .pipe(
        switchMap((date: Date) => this.http.getAllMovies(date)),
        tap(this.genereteGenresChips),
        switchMap((response) =>
          combineLatest(of(response), this.chipsService.chipSelect$)
        )
      )
      .subscribe(([response, chip]: [IResponseTVMaze[], string]) => {
        let list = response;
        if (chip) {
          list = response.filter((tvMaze) =>
            tvMaze._embedded.show.genres.includes(chip)
          );
        }
        this.items = list;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public navigate(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  public trackById(_index, item: IResponseTVMaze): number {
    return item.id;
  }

  private genereteGenresChips = (response: IResponseTVMaze[]) => {
    const chips = new Set<string>();
    response.map((elem) => {
      const { genres } = elem._embedded.show;
      for (const x of genres) {
        chips.add(x);
      }
    });
    this.chips = [...chips];
  };
}
