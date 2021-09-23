import { Component, ElementRef, ViewChild } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular PDF Experiments';

  @ViewChild('main', { static: true })
  private readonly mainElement!: ElementRef<HTMLElement>;

  async saveAsPdf() {
    html2pdf().from(this.mainElement.nativeElement).save();
  }
}
