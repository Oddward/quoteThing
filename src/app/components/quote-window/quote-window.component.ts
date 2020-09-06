import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-window',
  templateUrl: './quote-window.component.html',
  styleUrls: ['./quote-window.component.scss']
})
export class QuoteWindowComponent implements OnInit {
  @Input() public quoteOut: string;
  @Input() public authorOut: string;

  @Input() public quoteclr: string = 'white';
  @Input() public authorclr: string = 'gray';
  public aAlign: string = 'right';
  public bgclr: string;

  @Input() public qfsize: number;
  @Input() public afsize: number;

  @Input() public qFont: string;
  @Input() public aFont: string;

  @Input()
  public  bwidth: number;
  public  bclr: string;
  public bradius: number;

  public markTL: boolean = true;
  public markBR: boolean = true;

  constructor() { }

  public ngOnInit() {
    this.quoteOut = 'Your quote shows here';
    this.authorOut = 'Citation';
  }

  // @Input()

  // public setQuote( txt: string ) {
  //   this.quoteOut = txt;
  // }

  // public getQuote() {
  //   return this.quoteOut;
  // }

  // public setAuthor( txt: string ) {
  //   this.authorOut = txt;
  // }

  // public getAuthor() {
  //   return this.authorOut;
  // }

}
