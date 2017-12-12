import { contentHeaders } from '../common/headers';
import { Component, OnInit} from '@angular/core';
import { Http} from '@angular/http';

@Component({
  templateUrl: './simulate-war.html',
  styleUrls: ['./simulate-war.css']
})
export class SimulateWarComponent implements OnInit {
  nbOrcs: number;
  nbHumans: number;
  winner;
  constructor(private http: Http) {

  }

  simulateWar() {
    let result;
    this.http.post('http://localhost:8080/destiny/simulateWar/simulateWar', { headers: contentHeaders })
      .map(res => result = res.json())
      .subscribe(
        response => {
          this.winner = result.winner;
        },
        error => {
          console.log(error.text());
        }
      );
  }

  ngOnInit(): void {
    const body = JSON.stringify(['Human', 'Orc']);
    let result;
    this.http.post('http://localhost:8080/destiny/simulateWar/getFightersNumber', body, { headers: contentHeaders })
      .map(res => result = res.json())
      .subscribe(
        response => {
          this.nbOrcs = result.Orc;
          this.nbHumans = result.Human;
        },
        error => {
          console.log(error.text());
        }
      );
  }
}
