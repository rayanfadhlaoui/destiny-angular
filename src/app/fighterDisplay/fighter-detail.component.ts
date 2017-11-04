import { FighterService } from './fighter.service';
import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'fighterDetail',
  templateUrl: './html/fighter-detail.html',
  styleUrls: ['./fighter-detail.css']
  })
export class FighterDetailComponent implements OnInit {
  fighter;
  birthdate;
  private IMAGE_FIGHTER = require('./img/Ranger.png');

  results;
  constructor( private route: ActivatedRoute, private router: Router, private fighterService: FighterService, private http: Http) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get('id');
    const promise = this.fighterService.getFighter(this.http, id);
    promise.then(r => r.json())
      .then(r => this.fighter = r)
      .then(r => this.birthdate = new Date(this.fighter.person.birthDate));
  }
}
