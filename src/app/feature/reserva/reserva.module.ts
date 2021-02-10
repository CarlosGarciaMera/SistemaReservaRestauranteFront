import { NgModule } from '@angular/core';

import { ReservaRoutingModule } from './reserva-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ReservaHomeComponent } from './components/reserva-home/reserva-home.component';
import { ReservaService } from './shared/service/reserva.service';


@NgModule({
  declarations: [ListarReservaComponent, CrearReservaComponent, ReservaHomeComponent],
  imports: [
    SharedModule,
    ReservaRoutingModule
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
