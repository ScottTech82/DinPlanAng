import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { E404Component } from './misc/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
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
import { MemberCreateComponent } from './member/member-create/member-create.component';
import { MemberUpdateComponent } from './member/member-update/member-update.component';

const routes: Routes = [
{path: "", redirectTo: "/meal/list", pathMatch: "full"},

{path: "user/list", component: UserListComponent},
{path: "user/create", component: UserCreateComponent},
{path: "user/update/:id", component: UserUpdateComponent},
{path: "member/list", component: MemberListComponent},
{path: "member/create", component: MemberCreateComponent},
{path: "member/update/:id", component: MemberUpdateComponent},
{path: "meal/list", component: MealListComponent},
{path: "meal/create", component: MealCreateComponent},
{path: "meal/update/:id", component: MealUpdateComponent},
{path: "meal/details/:id", component: MealDetailsComponent},
{path: "ing/list", component: IngListComponent},
{path: "ing/create", component: IngCreateComponent},
{path: "ing/update/:id", component: IngUpdateComponent},
{path: "meal/print/:id", component: MealPrintComponent},



{path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
