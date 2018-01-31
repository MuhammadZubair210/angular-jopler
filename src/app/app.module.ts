import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PeopleComponent } from './people/people.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { PassRecoveryComponent } from './pass-recovery/pass-recovery.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SortPipe } from './sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetPersonsService } from './services/get-persons.service';
import { GetRefsService } from './services/get-refs.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { EmployerVerficationComponent } from './employer-verfication/employer-verfication.component';
import { SettingsComponent } from './settings/settings.component';
import { EmailComponent } from './email/email.component';
import { RequestFormComponent } from './request-form/request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PeopleComponent,
    JobComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    TermsComponent,
    ContactComponent,
    FaqComponent,
    PassRecoveryComponent,
    ViewProfileComponent,
    ProfileComponent,
    SearchComponent,
    SortPipe,
    EmployerVerficationComponent,
    SettingsComponent,
    EmailComponent,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    // AngularFontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [GetPersonsService, AuthService, GetRefsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
