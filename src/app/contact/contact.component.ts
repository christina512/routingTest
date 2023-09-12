import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  
showLabel(e:any,label:string){
if (e.target.value) {
  document.getElementById(label)?.classList.remove('label-top')
  
} else {
  document.getElementById(label)?.classList.add('label-top')
}

}
  
}
