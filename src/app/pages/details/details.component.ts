import { ITVMazeDetails } from './../../models/tvmaze-detils.interface';
import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public movie$: Observable<ITVMazeDetails>;
  constructor(private http: HttpService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getDetailsMovie(params.get('id'))
      )
    );
  }
}
