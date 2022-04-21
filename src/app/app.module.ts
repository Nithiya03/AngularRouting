import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';

const routes:Routes =[
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'users/:id',component:UsersComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
