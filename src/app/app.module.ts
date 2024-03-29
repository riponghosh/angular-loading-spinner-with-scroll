import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxLoadingComponent } from './ngx-loading/ngx-loading.component';
import { NgxSpinnerComponent } from './ngx-spinner/ngx-spinner.component';
import { CustomComponent } from './custom/custom.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxLoadingComponent,
    NgxSpinnerComponent,
    CustomComponent,
    LoaderComponent
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
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
