import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
import { AppInitService } from './app-init.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuitemComponent } from './misc/menuitem/menuitem.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealCreateComponent } from './meal/meal-create/meal-create.component';
import { MealUpdateComponent } from './meal/meal-update/meal-update.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { IngListComponent } from './ingredient/ing-list/ing-list.component';
import { IngCreateComponent } from './ingredient/ing-create/ing-create.component';
import { MealPrintComponent } from './meal/meal-print/meal-print.component';
import { IngUpdateComponent } from './ingredient/ing-update/ing-update.component';
import { MemberListComponent } from './member/member-list/member-list.component';

export function startupServiceFactory(appInit: AppInitService): Function {
  return () => appInit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    HeaderComponent,
    MenuitemComponent,
    UserCreateComponent,
    UserUpdateComponent,
    MealListComponent,
    MealCreateComponent,
    MealUpdateComponent,
    MealDetailsComponent,
    IngListComponent,
    IngCreateComponent,
    MealPrintComponent,
    IngUpdateComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
        deps: [AppInitService],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
