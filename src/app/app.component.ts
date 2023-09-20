import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  public msg:string="welcome to angular";
  public price:number=32555;
  public birthday:Date=new Date();
  

}
