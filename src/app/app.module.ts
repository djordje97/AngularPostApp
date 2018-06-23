import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { PostService } from './post-list/post.service';
import { SinglePostComponent } from './single-post/single-post.component';
import {MatDialogModule,MatCardModule,MatButtonModule} from '@angular/material';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostListComponent,
    UserComponent,
    SinglePostComponent,
    AddEditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
