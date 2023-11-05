import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingDetailsComponent } from './setting-details/setting-details.component';

const routes: Routes = [
  { path: '', component: SettingsComponent, pathMatch: 'full'},
  { path: ':id', component: SettingDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
