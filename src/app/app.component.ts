import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // name = 'untitled6';
  loadedFeature='recipe'
  ngOnInit() {
    interval(1000).subscribe(count=>{
      console.log(count);
    })
  }

  onNavigate(feature:string){
this.loadedFeature=feature;
  }
// ServerElements=[{type:'server',name:'Testserver',content:'Just a test!'}];
// onServerAdded(serverData:{serverName:string,serverContent:string}){
//   this.ServerElements.push({
//     type:'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   })
// }
// onBlueprintAdded(bluePrintData:{serverName:string,serverContent:string}){
//   this.ServerElements.push({
//     type: 'blueprint',
//     name: bluePrintData.serverName,
//     content: bluePrintData.serverContent
//   })
// }
//   onChangeFirst(){
// this.ServerElements[0].name='Changed';
//   }
//   onDestroyFirst(){
//   this.ServerElements.splice(0,1);
//   }
}
