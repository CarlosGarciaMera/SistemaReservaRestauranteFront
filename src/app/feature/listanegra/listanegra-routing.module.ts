import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearVetadoComponent } from './components/crear-vetado/crear-vetado.component';
import { ListarVetadosComponent } from './components/listar-vetados/listar-vetados.component';
import { VetadoHomeComponent } from './components/vetado-home/vetado-home.component';


const routes: Routes = [
  {
    path: '',
    component: VetadoHomeComponent,
    children: [
      {
        path: 'crear',
        component: CrearVetadoComponent
      },
      {
        path: 'listar',
        component: ListarVetadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListanegraRoutingModule { }
