import { AppComponent } from './app.component';
import { QuoteConfigComponent } from './components/quote-config/quote-config.component';
import { QuoteWindowComponent } from './components/quote-window/quote-window.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'qt', component: QuoteWindowComponent},
  {path: '', component: QuoteConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
