import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  @Output()
  private _onToggle = new EventEmitter();
  public get onToggle() {
    return this._onToggle;
  }
  public set onToggle(value) {
    this._onToggle = value;
  }

  constructor() { }

  ngOnInit() {
  }

  disparaEvento(){
    this.onToggle.emit();
  }

}
