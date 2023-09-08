import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppointmentsComponent } from './appointments.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationFormModule } from 'src/app/shared/components/registration-form/registration-form.module';
import { ListExpansionPanelModule } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.module';
import { DeactivateAccountPopupModule } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.module';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

const matModules = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];

const ngModules = [CommonModule, AppointmentsRoutingModule, ReactiveFormsModule];

const appModules = [
  ListExpansionPanelModule,
  SharedModule,
  RegistrationFormModule,
  DeactivateAccountPopupModule,
];

const appComponents = [
  AppointmentsComponent,
  NewAppointmentComponent
]

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules, ...appModules]
})
export class AppointmentsModule { }
