import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SettingDetailsComponent } from './setting-details/setting-details.component';
import { AddDetailsComponent } from './setting-details/add-details/add-details.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingDetailsComponent,
    AddDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
