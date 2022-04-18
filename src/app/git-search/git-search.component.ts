import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitSearch } from '../git-search';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  receivedUserInput :string 

  user: GitSearch = new GitSearch ('','','',0,'')

  constructor(private collect:GitServiceService ,private receiveData : ActivatedRoute) { 

    
  }

  ngOnInit(): void {

    this.receivedUserInput = this.receiveData.snapshot.paramMap.get('gitName')
    console.log(this.receivedUserInput)
    
    this.collect.changeUserName(this.receivedUserInput);

    this.collect.getUserInfo().subscribe((data)=>{
      this.user.gitName = data.company;
      this.user.obtainInfo = data.created_at;
      this.user.location = data.location;
      this.user.repository = data.public_repos;
      this.user.imageSource = data.avatar_url
      
      console.log(data)
      console.log(this.user)

    },((error)=>{
      console.log('ctctycycggv')
    }))

  }


  
}


