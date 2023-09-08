import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { DeactivateAccountPopupService } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.service';
import { IItem } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.component';
import { IDialogData } from 'src/app/shared/models/dialog-data';
import { AppointmentsService } from './appointments.service'; // Importe o serviço adequado
import { IAppointment } from './model/appointment'; // Importe o modelo de agendamento adequado

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  private appointments$!: Observable<IAppointment[]>;
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public isLoading!: boolean;
  public items$!: Observable<IItem[]>;

  constructor(
    private appointmentsService: AppointmentsService, // Use o serviço de agendamentos adequado
    private router: Router,
    private deactivateAccountPopupService: DeactivateAccountPopupService
  ) {
    this.appointmentsService
      .loading()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((next) => {
        this.isLoading = next;
      });
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  ngOnInit(): void {
    this.setItems();
  }

  private setItems() {
    this.appointments$ = this.appointmentsService.getAppointments(); // Use o método apropriado
    this.items$ = this.appointments$.pipe(
      map((appointments) => this.mapperToItems(appointments))
    );
  }

  private mapperToItems(appointments: IAppointment[]): IItem[]{
    // Mapeie os agendamentos para a estrutura de IItem
    const list = appointments.map((item) => ({
      id: item.id,
      title: item.nomePaciente, // Substitua pelo campo apropriado
      description: `${item.nomeProcedimento} | ${item.data}`, // Substitua pelos campos apropriados
      content: [item.nomeDentista, item.nomeProcedimento], // Substitua pelos campos apropriados
    })) as IItem[];

    return list;
  }

  public onEditButtonClicked(idAppointment: number): void {
    this.router.navigate(['/appointments/edit', idAppointment]); // Defina a rota de edição adequada
  }

  public onCancelButtonClicked(idAppointment: number): void {
    // Implemente a lógica para cancelamento de agendamento
    // Similar ao onCancelButtonClicked do DoctorsComponent
  }
}
