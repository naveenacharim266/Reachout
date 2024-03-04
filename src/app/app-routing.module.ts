import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'prep',
    loadChildren: () => import('./prep/prep.module').then( m => m.PrepPageModule)
  },
  // {
  //   path: 'crud',
  //   loadChildren: () => import('./crudoperations/crudoperations.module').then( m => m.CrudoperationsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./templatespage/templatespage.module').then( m => m.TemplatespagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
