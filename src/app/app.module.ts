import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';

import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
