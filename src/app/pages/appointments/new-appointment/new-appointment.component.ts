import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
} from 'src/app/shared/models/registration-form';
import { AppointmentsService } from '../appointments.service';
import { IEspecialidade, INewAppointment } from '../model/appointment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent implements OnInit {
  public formOptions!: IRegistrationFormOption;
  public message: string = '';
  public success: boolean = false;

  constructor(
    private appointmentsService: AppointmentsService,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.formOptions = {
      type: 'appointment',
    };
  }

  public onSubmit(formValues: IRegistrationFormInputValues) {
    let newAppointment: INewAppointment | undefined = undefined;
  
    if (this.formOptions.type === 'appointment') {
      if (
        formValues.idDentista !== undefined &&
        formValues.idPaciente !== undefined &&
        formValues.idProcedimento !== undefined &&
        formValues.data !== undefined
      ) {
        newAppointment = {
          idDentista: formValues.idDentista,
          idPaciente: formValues.idPaciente,
          idProcedimento: formValues.idProcedimento,
          data: formValues.data,
          especialidade: formValues.especialidade as IEspecialidade,
        };
      }
    }
  
    console.log('submit ', newAppointment);
  
    if (newAppointment) {
      // salvar os dados
      this.appointmentsService
        .newAppointment(newAppointment)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.message = 'Dados salvos com sucesso';
            this.success = true;
            setTimeout(() => {
              this.location.back();
            }, 1000);
          },
          error: () => {
            this.message = 'Erro ao cadastrar os dados';
            this.success = false;
          },
        });
    }
  }  
}