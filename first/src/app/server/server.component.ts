import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;  
  serverName:string="";
  serverCreationStatus= 'No Server is created.';  
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);


  }
  ngOnInit() {
  }
  onCreateServer(){
    
  this.serverName="Created";
  }
  onUpdateServer(event:Event){
    
    this.serverName=(<HTMLInputElement>event.target).value;
    }

}
