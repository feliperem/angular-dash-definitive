import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css']
})
export class AparelhosComponent implements OnInit {

  comName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
