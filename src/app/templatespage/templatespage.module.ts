import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatespagePageRoutingModule } from './templatespage-routing.module';

import { TemplatespagePage } from './templatespage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatespagePageRoutingModule
  ],
  declarations: [TemplatespagePage]
})
export class TemplatespagePageModule {}
