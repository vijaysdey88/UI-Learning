import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AppDataService } from '../../common/service/app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
  }

  saveData() {
    this.appDataService.saveDataEvent.next();
  }

  fetchData() {
    this.appDataService.fetchDataEvent.next();
  }
}
