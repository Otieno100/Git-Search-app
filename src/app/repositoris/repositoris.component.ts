import { Component, OnInit, Input } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { Repositiory } from '../repositiory';


@Component({
  selector: 'app-repositoris',
  templateUrl: './repositoris.component.html',
  styleUrls: ['./repositoris.component.css']
})
export class RepositorisComponent implements OnInit {
  @Input() repoName:string;

  userRepose:Repositiory[]=[];

  constructor(private repoService:GitServiceService) { }

  ngOnInit(): void {
    this.repoService.changeUserName(this.repoName);
    

    this.repoService.getRepos().subscribe((repo)=>{
      this.userRepose = repo
      console.log(this.userRepose)
    })
  }

}
