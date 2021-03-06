import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PostListComponent } from "./post-list/post-list.component";
import { SinglePostComponent } from "./single-post/single-post.component";
import { UserComponent } from "./user/user.component";
import { AddEditPostComponent } from "./add-edit-post/add-edit-post.component";

const appRoutes: Routes=[
    {path: '', redirectTo: '/posts' ,pathMatch: 'full'},
    {path: 'login' ,component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'posts/:id',component: SinglePostComponent},
    {path: 'users/:username',component: UserComponent},
    {path: 'add-edit',component: AddEditPostComponent},
    {path: 'add-edit/:id',component: AddEditPostComponent},
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule{

}