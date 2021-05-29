export interface Cost {
  bottle: number;
  case: number;
}
export interface Wine {
  no: string;
  name: string;
  image: string;
  cost: Cost;
  tags: string[];
  details: string;
}
