import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  findByVariable(variable) {
    return this.http.get('/api/variables/words/'+variable )
}

findByVariables(variables) {
  console.log(variables)
  return this.http.get('/api/variables/words/'+encodeURIComponent(variables) )
}

findByVariablesAnd(variables) {
  console.log(variables)
  return this.http.get('/api/variables/words_and/'+encodeURIComponent(variables) )
}

}
