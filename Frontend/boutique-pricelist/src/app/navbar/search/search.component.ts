import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  searchParam: string = "";

  ngOnInit(): void {
  }


  search(): void{
    this._router.navigate(
      ['/products/mixed'],
      {queryParams: {criteria: this.searchParam}}
    );
  }

}
