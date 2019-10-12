import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { VariableState, Variable } from './variable.model';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';


@Injectable({
  providedIn: 'root'
})
export class VariableService {
  research: Variable;

  constructor(public store: Store<VariableState>,private httpClient: HttpClient) {
  }




}
