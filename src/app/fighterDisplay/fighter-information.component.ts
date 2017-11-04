import { FighterService } from './fighter.service';
import { Component, OnInit, Input } from '@angular/core';
import { Http} from '@angular/http';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'fighter-information',
  templateUrl: './html/fighter-information.html',
  styleUrls: ['./fighter-detail.css']
  })
export class FighterInformationComponent  {
    @Input() fighter;
    @Input() birthdate;
}
