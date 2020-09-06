// import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-config',
  templateUrl: './quote-config.component.html',
  styleUrls: ['./quote-config.component.scss'],
})
export class QuoteConfigComponent implements OnInit {
  public quote: string;
  public author: string;

  public fontFam: string;
  public isbold: boolean;
  public isitalic: boolean;
  public qfontsize: number = 50;
  public afontsize: number = 50;

  public bgcolour: string = '#000000';
  public quotecolour: string = '#ffffff';
  public authorcolour: string = '#eeeeee';
  public bordercolour: string;

  public fonts = [ 'acterum', 'montserrat', 'comfortaa', 'nunito-sans', 'sexy-beachy', 'autography', 'playfair' ];
  public quotefont: string;
  public authorfont: string;

  constructor() { }

  public ngOnInit() {
  }

}
