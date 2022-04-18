import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
gitSearch:string = 'Otieno100'

  GitSearch() {
    throw new Error('Method not implemented.');
  }

  
  constructor(private http : HttpClient) {
    
  }



  getUserInfo(){

    return this.http.get<any>('https://api.github.com/users/' + this.gitSearch) 
  }
  changeUserName(userTypo){
    this.gitSearch = userTypo;
    
  }
  getRepos(){
    return this.http.get<any>('https://api.github.com/users/' + this.gitSearch + '/repos') 
  }


}
