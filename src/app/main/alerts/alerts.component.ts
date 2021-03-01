import { Component, OnInit } from '@angular/core';

export interface alertas {
  name: string;
  nivel: string;
  hora: string;
}

const ELEMENT_DATA: alertas[] = [
  {name: 'Consumo não identificado acima de 10kWh, por favor checar se você não cadastrou algum aparelho, caso contrario pode está tendo perda de energia',  nivel: 'Importante', hora: '12:30:00'},
  {name: 'Consumo não identificado acima de 10kWh, por favor checar se você não cadastrou algum aparelho, caso contrario pode está tendo perda de energia', nivel: 'Importante', hora: '12:15:00'},
  {name: 'O aparelho Computador, está ligado por mais de 20hrs seguidas',  nivel: 'Aviso', hora: '12:00:00'},
  {name: 'O aparelho ventilador está ligado por masi de 4 horas seguidas',  nivel: 'Aviso', hora: '11:30:00'}
];

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'nivel', 'hora'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
