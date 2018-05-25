import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecAssetsComponent } from './components/spec-assets/spec-assets.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  { path: 'spec-assets', component: SpecAssetsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
