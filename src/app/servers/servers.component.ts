import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
AllowNewServer=false;
ServerCreationStatus='No server was created!'
serverName='TestServer'
  servers=['TestServer','TestServer 2'];
  serverCreated=false;
  constructor() {
    setTimeout(()=>{
      this.AllowNewServer=true;
    },5000);
  }
  ngOnInit(): void {
  }
onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
  this.ServerCreationStatus='Server was created!' + this.serverName;
}
  onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value

  }
}
