import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class FighterService {
  private fighters = [];

  getfighters(http: Http) {
     const promise = http.get('http://localhost:8080/destiny/findAllFighter').toPromise();
     return promise;
  }

  getFighter(http: Http, id: number | string) {
    const url = 'http://localhost:8080/destiny/findFighter?id=' + id;
    const promise = http.get(url).toPromise();
    return promise;
  }
}
