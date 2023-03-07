import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsComponent } from './chips/chips.component';
import { InputComponent } from './input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCreatePageComponent } from './pages/product-create-page/product-create-page.component';
import { JunkComponent } from './pages/junk/junk.component';

const appRoutes: Routes = [
  { path: 'product-create-page', component: ProductCreatePageComponent },
  { path: 'junk', component: JunkComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    InputComponent,
    ProductCreatePageComponent,
    JunkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
