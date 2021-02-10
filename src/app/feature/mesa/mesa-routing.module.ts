import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMesaComponent } from './component/crear-mesa/crear-mesa.component';
import { ListarMesaComponent } from './component/listar-mesa/listar-mesa.component';
import { MesaHomeComponent } from './component/mesa-home/mesa-home.component';


const routes: Routes = [
  {
    path: '',
    component: MesaHomeComponent,
    children: [
      {
        path: 'crear',
        component: CrearMesaComponent
      },
      {
        path: 'listar',
        component: ListarMesaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
