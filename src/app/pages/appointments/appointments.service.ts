import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { retry, shareReplay } from 'rxjs/operators';
import { IAppointment, INewAppointment } from './model/appointment'; // Importe o modelo apropriado
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private baseUrl = `${API}/api/v1/consultas`;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  public getAppointments(): Observable<IAppointment[]> {
    this.loadingSubject$.next(true);
    const observable = this.httpClient.get<IAppointment[]>(this.baseUrl).pipe(
      retry(3),
      shareReplay()
    );

    observable.subscribe(() => this.loadingSubject$.next(false));

    return observable;
  }

  public loading(): Observable<boolean> {
    return this.loadingSubject$.asObservable();
  }

  public newAppointment(appointment: INewAppointment): Observable<IAppointment> {
    return this.httpClient.post<IAppointment>(this.baseUrl, appointment);
  }

  public getAppointmentById(id: number): Observable<IAppointment> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IAppointment>(url);
  }
  
//   public deactivateAccountById(id: number): Observable<void> {
//     const url = `${this.baseUrl}/${id}`;
//     return this.httpClient.delete<void>(url);
//   }
}
