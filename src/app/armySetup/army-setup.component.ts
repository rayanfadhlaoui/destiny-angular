import { FighterService } from '../fighterDisplay/fighter.service';
import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { NgFor } from '@angular/common';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'armySetup',
  templateUrl: './army-setup.html',
  styleUrls: ['./army-setup.css']
})
export class ArmySetupComponent implements OnInit {
  fighters;
  constructor(private http: Http, private service: FighterService) { }

  ngOnInit(): void {
    const promise = this.service.getfighters(this.http);
    promise.then(r => r.json()).then(r => this.fighters = r);
  }
}
