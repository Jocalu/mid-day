import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { BookingsComponent } from './pages/bookings/bookings.component'
import { LandingComponent } from './pages/landing/landing.component'
import { MenusComponent } from './pages/menus/menus.component'
import { DishesComponent } from './pages/dishes/dishes.component'
import { RegisterComponent } from './pages/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'bookings', component: BookingsComponent, canActivate: [AuthGuard] },
  { path: 'dishes', component: DishesComponent, canActivate: [AuthGuard] },
  { path: 'menus', component: MenusComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
