import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatespagePage } from './templatespage.page';

const routes: Routes = [
  {
    path: '',
    component: TemplatespagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatespagePageRoutingModule {}
