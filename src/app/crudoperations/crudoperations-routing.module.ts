import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudoperationsPage } from './crudoperations.page';

const routes: Routes = [
  {
    path: '',
    component: CrudoperationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudoperationsPageRoutingModule {}
