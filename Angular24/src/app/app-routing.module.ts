import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'todo', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
