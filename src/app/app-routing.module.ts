import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('../app/users/users.module').then(x => x.UsersModule)},
  { path: 'requests', loadChildren: () => import('../app/requests/requests.module').then(x => x.RequestsModule)},
  { path: 'settings', loadChildren: () => import('../app/settings/settings.module').then(x => x.SettingsModule)},
  { path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
