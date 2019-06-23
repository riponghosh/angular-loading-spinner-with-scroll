import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.circle,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '3px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ccc',
        tertiaryColour: '#ffffff',
        // fullScreenBackdrop:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
