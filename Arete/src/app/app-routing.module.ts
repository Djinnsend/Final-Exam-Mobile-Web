import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-signup-process',
    loadChildren: () => import('./login-signup-process/login-signup-process.module').then( m => m.LoginSignupProcessPageModule)
  },
  {
    path: 'org-login',
    loadChildren: () => import('./org-login/org-login.module').then( m => m.OrgLoginPageModule)
  },
  {
    path: 'org-register',
    loadChildren: () => import('./org-register/org-register.module').then( m => m.OrgRegisterPageModule)
  },
  {
    path: 'user-events',
    loadChildren: () => import('./user-events/user-events.module').then( m => m.UserEventsPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'user-landing-page',
    loadChildren: () => import('./user-landing-page/user-landing-page.module').then( m => m.UserLandingPagePageModule)
  },
  {
    path: 'user-requests',
    loadChildren: () => import('./user-requests/user-requests.module').then( m => m.UserRequestsPageModule)
  },
  {
    path: 'user-approvals',
    loadChildren: () => import('./user-approvals/user-approvals.module').then( m => m.UserApprovalsPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
