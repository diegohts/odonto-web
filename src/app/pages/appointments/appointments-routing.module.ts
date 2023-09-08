import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppointmentsComponent,
    title: 'Consultas',
  },
  {
    path: 'new',
    component: NewAppointmentComponent,
    title: 'Cadastrar consulta',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
