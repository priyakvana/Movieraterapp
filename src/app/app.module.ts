import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { Routes,RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';






import { AppComponent } from './app.component';

const routes :Routes = [{
  path:'', pathMatch:'full', redirectTo:'auth'
}];

@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    
    
    
  ],

  exports:[
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
