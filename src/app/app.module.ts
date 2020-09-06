import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { QuoteConfigComponent } from './components/quote-config/quote-config.component';
import { QuoteWindowComponent } from './components/quote-window/quote-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuoteWindowComponent,
    QuoteConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
