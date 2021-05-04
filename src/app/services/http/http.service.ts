import { ITVMazeDetails } from './../../models/tvmaze-detils.interface';
import { IResponseTVMaze } from './../../models/response-tvmaze.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly api_URL = 'https://api.tvmaze.com/schedule/web';
  private readonly api_URL_details = 'https://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) {}

  public getAllMovies(date?: Date): Observable<IResponseTVMaze[]> {
    if (!date) {
      date = new Date();
    }
    let params = new HttpParams().set('date', this.prepareParams(date));
    return this.http.get<IResponseTVMaze[]>(this.api_URL, { params });
  }

  public getDetailsMovie(id: string): Observable<ITVMazeDetails> {
    return this.http.get<ITVMazeDetails>(`${this.api_URL_details}${id}`);
  }

  private prepareParams(date: Date): string {
    const mounth = ('0' + date.getDate()).slice(-2);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }
}
