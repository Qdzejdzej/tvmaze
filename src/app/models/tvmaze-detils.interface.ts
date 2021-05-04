import { ITVMazeLinks } from './tvmaze-links.interface';

export interface ITVMazeDetails {
  averageRuntime: number;
  dvdCountry: any;
  externals: object;
  genres: string[];
  id: number;
  image: { medium: string; original: string };
  language: string;
  name: string;
  network: any;
  officialSite: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: { days: string[]; time: string };
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: object;
  weight: number;
  _links: ITVMazeLinks;
}
