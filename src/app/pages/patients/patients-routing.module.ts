import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatientsComponent,
    title: 'Pacientes',
  },
  {
    path: 'edit/:id',
    component: EditPatientComponent,
    title: 'Editar',
  },
  {
    path: 'new',
    component: NewPatientComponent,
    title: 'Novo Perfil',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
