import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  tran: string[][];
  value: any;
  view=true;
  amountvalue : number[]= [1,1,1,1,1];
  idvalue : string[]= ['1','1','1','1','1'];
  i=0;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.transaction().subscribe({
      next: data => {
        console.log(data.data.data);
        this.tran=data.data.data;
        console.log("%%%%%%", this.tran[0])
        console.log(this.amountvalue[2]);
       
      },
      error: err => {
        console.log(err);
      }
    });

  }
  transactions()
  {
    this.view=false;
    this.authService.transaction().subscribe({
      next: data => {
         console.log(JSON.stringify(data.data.data));
         this.value=data.data.data;
         console.log("@@@@@@@@",(Object.keys(data.data.data)).map(k => this.value[k])[0].amount);
         this.amountvalue[0]=((Object.keys(data.data.data)).map(k => this.value[k])[0].amount);
         
         console.log((Object.keys(data.data.data)).map(k => this.value[k])[4].amount);
         for(let x: number = 0; x<5; x++){
          console.log(this.amountvalue[x]);
          this.idvalue[x]=((Object.keys(data.data.data)).map(k => this.value[k])[x].id);
         this.amountvalue[x]=((Object.keys(data.data.data)).map(k => this.value[k])[x].amount);
         console.log(this.amountvalue[x]);
         }
        this.tran=(Object.keys(data.data.data)).map(k => this.value[k]);
        console.log("index",JSON.stringify(this.tran[0]));
       
      },
      error: err => {
        console.log(err);
      }
    });

  }

}
