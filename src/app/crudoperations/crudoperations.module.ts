import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudoperationsPageRoutingModule } from './crudoperations-routing.module';

import { CrudoperationsPage } from './crudoperations.page';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudoperationsPageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [CrudoperationsPage]
})
export class CrudoperationsPageModule {}
