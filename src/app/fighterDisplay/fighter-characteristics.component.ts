import { FighterService } from './fighter.service';
import { Component, OnInit, Input } from '@angular/core';
import { Http} from '@angular/http';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'fighter-characteristics',
  templateUrl: './html/fighter-characteristics.html',
  styleUrls: ['./fighter-detail.css']
  })
export class FighterCharacteristicsComponent  {
    @Input() fighter;
}
