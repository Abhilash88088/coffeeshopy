import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ApiComponent } from './api/api.component';
import { HeaderComponent } from './header/header.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: HeaderComponent },
  { path: 'productList', component: ApiComponent,canActivate: [] },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers:[AuthGuard]
})
export class AppRoutingModule { }
