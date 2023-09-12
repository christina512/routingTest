import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  scroll:number=window.scrollY

  constructor(){
    window.addEventListener("scroll",function (e:any){
    if (this.window.scrollY>0) {
      this.document.getElementById('navbar')?.classList.remove('py-4')
    }else{
      this.document.getElementById('navbar')?.classList.add('py-4')
    }
      })
    
  }

  
  
}
