import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit{
//   export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked
// ,OnDestroy
  @Input('srvElement')
  element!: {type:string; name:string; content: string} ;
  @Input() name!:string;
@ViewChild('heading') header!:ElementRef;
// @ContentChild('heading') paragraph!:ElementRef;
  constructor() {
  console.log('constructor called')
}
// ngOnChanges(changes:SimpleChanges) {
//   console.log("ngOnchange called")
//   console.log(changes);
// }

  ngOnInit() {
console.log('ngOnInit called');
console.log('Text Content: ' + this.header.nativeElement.textContent)
console.log('Text Content pf paragraph: ' + this.header.nativeElement.textContent)
}
// ngDoCheck() {
//   console.log('ngDoCheck called');
// }
// ngAfterContentInit() {
//   console.log('ngAfterContentInit called')
// }
// ngAfterContentChecked() {
//   console.log('ngAfterContentchecked called')}
// ngAfterViewInit() {
//   console.log('ngAfterViewchecked called')}
// ngAfterViewChecked() {
//   console.log('ngAfterViewchecked called');
// }
// ngOnDestroy() {
//   console.log('ngOnDestroy called')
//}
}

