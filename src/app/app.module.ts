import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { RouterModule, Routes } from '@angular/router';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { RepositorisComponent } from './repositoris/repositoris.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:"refer/:gitName",component:GitSearchComponent},
  {path:"",component:GitSearchFormComponent}
];

@NgModule

  ({

    declarations: [
      AppComponent,
      GitSearchComponent,
      GitSearchFormComponent,
      RepositorisComponent,
      NavbarComponent
    ],
    
    imports: [
      BrowserModule,
      HttpClientModule,
      [RouterModule.forRoot(routes)],
      FormsModule
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }


export class AppRoutingModule { }
