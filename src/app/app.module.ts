import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { ResponseModalComponent } from './modals/response-modal/response-modal.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DateModalComponent } from './modals/date-modal/date-modal.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    HomeComponent,
    LandingPageComponent,
    NavComponent,
    ResponseModalComponent,
    FooterComponent,
    CalendarComponent,
    DateModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModule
  ],
  exports: [
    // MatFormField
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ResponseModalComponent
  ]
})
export class AppModule { }
