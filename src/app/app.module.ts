import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DieselEngine, Engine, PetrolEngine } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CustomForms } from './custom-forms/custom-forms.module';

export const ENGINES_TOKEN = new InjectionToken('Services for Engines')
export const ENVIRONMENT_TOKEN = new InjectionToken('Environment')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DefaultViewComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    CustomForms
  ],
  providers: [
    {
      provide:ENGINES_TOKEN, //Engine,
      useClass: DieselEngine,
      multi: true
    },
    {
      provide: ENGINES_TOKEN, //Engine,
      useClass: PetrolEngine,
      multi: true
    },
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: 'Development' 
    },
    {
      provide: Engine,
      useClass: DieselEngine,
      multi: true
    },
    {
      provide: Engine,
      useClass: PetrolEngine,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
