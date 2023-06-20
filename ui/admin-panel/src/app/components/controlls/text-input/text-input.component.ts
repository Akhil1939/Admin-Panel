import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() label: string='';
  @Input() text: string='';
  @Input() placeHolder:string ='';
  @Input() pattern:string='';
  
  @Input() errorString:string='';

<<<<<<< HEAD
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(){
    this.valueChange.emit(this.text);
=======
  @Input() label: string='';
  @Input() text: string='';
  @Output() textChange = new EventEmitter<string>();

  onChange(){
    this.textChange.emit(this.text);
    console.log("from tag", this.text);
>>>>>>> 63298cf39cb4ee5ba6a60cc7c01a9cdab676f740
  }
}
