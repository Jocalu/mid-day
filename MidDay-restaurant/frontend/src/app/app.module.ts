import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
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
import { DishesComponent } from './pages/dishes/dishes.component'
import { MenusComponent } from './pages/menus/menus.component'
import { AppRoutingModule } from './app-routing.module'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { MatTreeModule } from '@angular/material/tree'
import { HttpClientModule } from '@angular/common/http'
import { DishesSearchComponent } from './pages/dishes/dishes-search/dishes-search.component'
import { DishesAddComponent } from './pages/dishes/dishes-add/dishes-add.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MenusAddComponent } from './pages/menus/menus-add/menus-add.component'
import { MenusDeleteComponent } from './pages/menus/menus-delete/menus-delete.component'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { PopupDishesaddComponent } from './pages/dishes/dishes-add/popup-dishesadd/popup-dishesadd.component'
import { PopupDishessearchComponent } from './pages/dishes/dishes-search/popup-dishessearch/popup-dishessearch.component'
import { PopupMenusaddComponent } from './pages/menus/menus-add/popup-menusadd/popup-menusadd.component'
import { PopupMenusdeleteComponent } from './pages/menus/menus-delete/popup-menusdelete/popup-menusdelete.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LandingComponent,
    BookingsComponent,
    DishesComponent,
    MenusComponent,
    NotFoundComponent,
    DishesSearchComponent,
    DishesAddComponent,
    MenusAddComponent,
    MenusDeleteComponent,
    LoginComponent,
    HomeComponent,
    PopupDishesaddComponent,
    PopupDishessearchComponent,
    PopupMenusaddComponent,
    PopupMenusdeleteComponent
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
    AppRoutingModule,
    MatTreeModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    }, { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
