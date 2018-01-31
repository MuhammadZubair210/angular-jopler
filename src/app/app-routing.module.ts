import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
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
import { EmployerVerficationComponent } from './employer-verfication/employer-verfication.component';
import { SettingsComponent } from './settings/settings.component';
import { EmailComponent } from './email/email.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:'people', 
        component: PeopleComponent
      },
      {
        path:'job', 
        component: JobComponent
      },
      {
        path:'login',
        component: LoginComponent,
        pathMatch:'full'
      },
      {
        path:'recover_password',
        component: PassRecoveryComponent,
        pathMatch:'full'
      },
      {
        path:'sign_up',
        component: SignUpComponent,
        pathMatch:'full'
      },
      {
        path:'about', 
        component: AboutComponent
      },
      {
        path:'terms', 
        component: TermsComponent
      },
      {
        path:'faq',
        component: FaqComponent,
        pathMatch:'full'
      },
      {
        path:'contact',
        component: ContactComponent,
        pathMatch:'full'
      },
      {
        path:'search/:id', 
        component: SearchComponent
      },
      {
        path:'email',
        // canActivate:[AuthGuard],
        component: EmailComponent,
        pathMatch:'full'
      },
      {
        path:'request_form/:name', 
        // canActivate:[AuthGuard],
        component: RequestFormComponent
      },
      {
        path:'profile',
        canActivate:[AuthGuard],
        component: ProfileComponent,
      },
      {
        path:'profile/:save',
        canActivate:[AuthGuard],
        component: ProfileComponent,
      },
      {
        path:'view_profile/:id',
        component: ViewProfileComponent,
      },
      {
        path:'employer_verification',
        canActivate:[AuthGuard],
        component: EmployerVerficationComponent,
      },
      {
        path:'employer_verification/:save',
        canActivate:[AuthGuard],
        component: EmployerVerficationComponent,
      },
      {
        path:'settings',
        canActivate:[AuthGuard],
        component: SettingsComponent,
      },
      {
        path:'**', 
         redirectTo:'people'
      }

    ])
  ],
  declarations: [],
  providers: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
