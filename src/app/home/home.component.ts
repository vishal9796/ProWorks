import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee="-"
  ptype="-";
  machine="-";
  operation="-";

  loadpage1=true;
  loadpage2=false;
  loadpage3=false;
  loadpage4=false;
  loadpage5=false;

  constructor() { }

  ngOnInit(): void {
  }


  ptypeSelected(ptype:string):void{
    this.ptype=ptype;
    this.showpage(2);
  }
  mtypeSelected(mtype:string):void{    
    this.showpage(3);
  }
  machineSelected(machin:string):void{
    this.machine=machin;
    this.showpage(4);

  }
  oprSelected(opr:string):void{
    this.operation=opr;
    this.showpage(5);
  }
  success():void{
    alert("Successfuly Done!!")
  }
  showpage(pagenumber:number):void{
    switch (pagenumber) {
      case 1:
        this.loadpage1=true;
        this.loadpage2=false;
        this.loadpage3=false;
        this.loadpage4=false;
        this.loadpage5=false;
        break; 
      case 2:
        this.loadpage1=false;
        this.loadpage2=true;
        this.loadpage3=false;
        this.loadpage4=false;
        this.loadpage5=false;
        break;
      case 3:
        this.loadpage1=false;
        this.loadpage2=false;
        this.loadpage3=true;
        this.loadpage4=false;
        this.loadpage5=false;
        break;
      case 4:
        this.loadpage1=false;
        this.loadpage2=false;
        this.loadpage3=false;
        this.loadpage4=true;
        this.loadpage5=false;
        break; 
        case 5:
        this.loadpage1=false;
        this.loadpage2=false;
        this.loadpage3=false;
        this.loadpage4=false;
        this.loadpage5=true;
        break;           
      default:
        break;
    }
    
  }

}
