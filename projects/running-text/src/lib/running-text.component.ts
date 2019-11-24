import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-misc-running-text',
  template: `
    <div #line>
      <span #textBox>{{ text }}</span>
    </div>
  `,
  styles: [
    `
      div {
        width: 100%;
        position: relative;
      }

      span {
        position: absolute;
        left: 0;
      }
    `
  ]
})
export class RunningTextComponent implements OnInit {

  @Input() text: string;
  @ViewChild('line', {static: true}) lineRef: ElementRef<HTMLDivElement>;
  @ViewChild('textBox', {static: true}) textBoxRef: ElementRef<HTMLDivElement>;

  get line() {
    return this.lineRef.nativeElement;
  }

  get textBox() {
    return this.textBoxRef.nativeElement;
  }

  async ngOnInit() {
    if (!this.text || this.text === '') {
      throw new TypeError('Text is not provided!');
    }

    const sleep = (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

    while (true) {
      console.log(this.textBox);
      this.textBox.style.right = ((+this.textBox.style.right) - 10).toString();
      await sleep(1);
    }
  }

}
