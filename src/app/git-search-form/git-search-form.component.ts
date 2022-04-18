import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()
  gitName:string;

  gitSearchTerm!: string;
  
  constructor(private rauter:Router) { }

  search(){
    this.emitSearch.emit(this.gitSearchTerm);
  }

  ngOnInit(): void {
    
  }

  goToUrl(){
    this.rauter.navigate(["refer",this.gitName])
  }

}


