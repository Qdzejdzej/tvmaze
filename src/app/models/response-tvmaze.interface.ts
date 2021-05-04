import { ITVMazeLinks } from './tvmaze-links.interface';
import { ITVMazeDetails } from './tvmaze-detils.interface';

export interface IResponseTVMaze {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: any;
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: any;
  type: string;
  url: string;
  _embedded: { show: ITVMazeDetails };
  _links: ITVMazeLinks;
}
