import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyFormComponent } from "./my-form/my-form.component";

@NgModule({
    declarations: [AppComponent],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MyFormComponent]
})
export class AppModule {}
