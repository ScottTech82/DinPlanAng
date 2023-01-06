import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { E404Component } from './misc/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealCreateComponent } from './meal/meal-create/meal-create.component';

const routes: Routes = [
{path: "", redirectTo: "/user/list", pathMatch: "full"},

{path: "user/list", component: UserListComponent},
{path: "user/create", component: UserCreateComponent},
{path: "user/update/:id", component: UserUpdateComponent},
{path: "meal/list", component: MealListComponent},
{path: "meal/create", component: MealCreateComponent},


{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }