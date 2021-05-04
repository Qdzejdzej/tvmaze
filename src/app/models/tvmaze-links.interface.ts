export interface ITVMazeLinks {
  self: ILink;
  nextepisode?: ILink;
  previousepisode?: ILink;
}

interface ILink {
    href: string;
}
