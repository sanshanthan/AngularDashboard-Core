import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server'

const SAMPLE_SERVERS=[
  {id:1, name:'dev-web', isOnline:true },
  {id:2, name:'dev-web-shan', isOnline:true },
  {id:3, name:'dev-web', isOnline:false },
  {id:4, name:'dev-web-shan', isOnline:true },
  {id:5, name:'dev-web', isOnline:true },
  {id:6, name:'dev-web-shan', isOnline:true },
  {id:7, name:'dev-web', isOnline:false },
]
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[]= SAMPLE_SERVERS;

  ngOnInit() {
  }

}
