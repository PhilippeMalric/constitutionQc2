import { EntityState } from '@ngrx/entity';

export class Variable {
  id: string;
  url: string;
  url2: string;
  fromText: string;
  desc: string;

  constructor(
    id: string,
    url: string,
    url2: string,
    fromText: string,
    desc: string
  ) {
    this.id = id;
    this.url = url;
    this.url2 = url2;
    this.fromText = fromText;
    this.desc = desc;
  }
}

export interface VariableState extends EntityState<Variable> {}
