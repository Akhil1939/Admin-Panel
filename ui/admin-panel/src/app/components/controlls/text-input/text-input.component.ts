import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  @Input() label: string='';
  @Input() text: string='';
  @Output() textChange = new EventEmitter<string>();

  onChange(){
    this.textChange.emit(this.text);
    console.log("from tag", this.text);
  }
}
