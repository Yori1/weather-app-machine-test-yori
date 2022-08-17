import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  searchTerm = "";

  constructor() { }

  ngOnInit(): void {
  }

}
