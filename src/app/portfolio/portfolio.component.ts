import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 imgUrl:any =""

  showModal(e:any){
    console.log(e.target);
     let imgSrc:string= e.target.getAttribute('img')
     console.log(imgSrc);
     
      this.imgUrl =document.getElementById(imgSrc)?.getAttribute('src')
      console.log(this.imgUrl)
      
     
     document.getElementById("modal")?.classList.remove('d-none')
    
  }

  close(){
    document.getElementById("modal")?.classList.add('d-none')
  }
}
