import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
} from 'src/app/shared/models/registration-form';
import { PatientsService } from '../patients.service';
import { INewPatient } from '../model/patient';
import { take } from 'rxjs';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit{
  public formOptions!: IRegistrationFormOption;
  public message: string = '';
  public success: boolean = false;

  constructor(
    private location: Location,
    private patientsService: PatientsService
  ) {}

  public ngOnInit(): void {
    this.formOptions = {
      type: 'patient',
    };
  }

  public onSubmit(formValues: IRegistrationFormInputValues) {
    const newPatient: INewPatient = {
      nome: formValues.nome,
      telefone: formValues.telefone,
      email: formValues.email,
      cpf: formValues.cpf as string,
      endereco: {
        logradouro: formValues.logradouro,
        bairro: formValues.bairro,
        cidade: formValues.cidade,
        cep: formValues.cep,
        numero: formValues.numero,
        complemento: formValues.complemento,
        uf: formValues.uf,
      },
    };
    console.log('submit ', newPatient);
    // salvar os dados
    this.patientsService
      .newPatient(newPatient)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.message = 'Dados salvos com sucesso';
          this.success = true;
          console.log('Dados salvos com sucesso');
          setTimeout(() => {
            this.location.back();
          }, 1000);
        },
        error: (error) => {
          this.message = 'Erro ao cadastrar os dados';
          this.success = false;
          console.log('Erro ao cadastrar os dados ', error);
        },
      });
  }
}
