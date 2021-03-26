import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessscreenComponent } from './successscreen/successscreen.component';

const routes: Routes = [
                        
                        {path:'form',component:FormComponent},
                        {path:'success',component:SuccessscreenComponent},
                        { path: '', redirectTo: '/form', pathMatch: 'full' },
                        {path:'**',component:FormComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
