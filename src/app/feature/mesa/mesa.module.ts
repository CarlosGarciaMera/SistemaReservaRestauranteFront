import { NgModule } from '@angular/core';

import { ListarMesaComponent } from './component/listar-mesa/listar-mesa.component';
import { CrearMesaComponent } from './component/crear-mesa/crear-mesa.component';
import { MesaRoutingModule } from './mesa-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MesaService } from './shared/service/mesa.service';
import { MesaHomeComponent } from './component/mesa-home/mesa-home.component';



@NgModule({
  declarations: [ListarMesaComponent, CrearMesaComponent, MesaHomeComponent],
  imports: [
    MesaRoutingModule,
    SharedModule
  ],
  providers: [MesaService]
})
export class MesaModule { }
