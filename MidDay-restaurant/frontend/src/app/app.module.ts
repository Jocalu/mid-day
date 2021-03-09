import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MatButtonModule } from '@angular/material/button'
import { RegisterComponent } from './pages/register/register.component'
import { MatStepperModule } from '@angular/material/stepper'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { LandingComponent } from './pages/landing/landing.component'
import { BookingsComponent } from './pages/bookings/bookings.component'
import { RecipesComponent } from './pages/recipes/recipes.component'
import { MenusComponent } from './pages/menus/menus.component'
import { AppRoutingModule } from './app-routing.module'
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LandingComponent,
    BookingsComponent,
    RecipesComponent,
    MenusComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
