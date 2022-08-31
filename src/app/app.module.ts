import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { PipeservicePipe } from './shared/services/pipeservice.pipe';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations:
   [AppComponent, PipeservicePipe],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ZXingScannerModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()

  ],
  providers: [
    // StatusBar,
    // SplashScreen,
    
   
    
    { provide: RouteReuseStrategy,
       useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
