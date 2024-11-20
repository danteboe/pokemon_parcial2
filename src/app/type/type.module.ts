import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListarComponent } from './type-listar/type-listar.component';
import { TypeRoutingModule } from './type-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypeRoutingModule
  ],
  declarations: [TypeListarComponent]
})
export class TypeModule { }