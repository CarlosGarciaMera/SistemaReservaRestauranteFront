import { NgModule } from '@angular/core';

import { ListanegraRoutingModule } from './listanegra-routing.module';
import { ListarVetadosComponent } from './components/listar-vetados/listar-vetados.component';
import { CrearVetadoComponent } from './components/crear-vetado/crear-vetado.component';
import { VetadoHomeComponent } from './components/vetado-home/vetado-home.component';
import { SharedModule } from '@shared/shared.module';
import { ListanegraService } from './shared/service/listanegra.service';


@NgModule({
  declarations: [ListarVetadosComponent, CrearVetadoComponent, VetadoHomeComponent],
  imports: [
    SharedModule,
    ListanegraRoutingModule
  ],
  providers: [ListanegraService]
})
export class ListanegraModule { }
