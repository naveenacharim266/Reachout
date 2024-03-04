import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
           IonicModule.forRoot(), 
           AppRoutingModule,
           MatToolbarModule,
           MatIconModule,
           MatButtonModule,
           HttpClientModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
