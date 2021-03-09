import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { BookingsComponent } from './pages/bookings/bookings.component'
import { LandingComponent } from './pages/landing/landing.component'
import { MenusComponent } from './pages/menus/menus.component'
import { DishesComponent } from './pages/dishes/dishes.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
