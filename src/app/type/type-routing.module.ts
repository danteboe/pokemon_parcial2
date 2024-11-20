import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeListarComponent } from './type-listar/type-listar.component';

const routes: Routes = [
  { path: 'list/:type', component: TypeListarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRoutingModule {}