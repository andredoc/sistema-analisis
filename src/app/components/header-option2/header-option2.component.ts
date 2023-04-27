import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-option2',
  templateUrl: './header-option2.component.html',
  styleUrls: ['./header-option2.component.css']
})
export class HeaderOption2Component implements OnInit {

  @Input() imagen?: string;
  @Input() titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
