import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ngx-slow-type',
  template: `
    <span [contentEditable]="">{{ typedText }}</span>
    <span *ngIf="cursor">{{ cursorChar }}</span>
  `,
})
export class SlowTypeComponent implements OnInit, OnDestroy {

  @Input() text: string;
  @Input() cursor = true;
  @Input() debounceTime = 700;
  @Input() editable = false;
  typedText = '';
  cursorChar = '';
  interval: ReturnType<typeof setInterval>;
  timeout: ReturnType<typeof setTimeout>;

  ngOnInit() {
    if (!this.text || this.text === '') {
      throw new TypeError('Text is not provided!');
    }

    const type = (index: number, timeout: number) => {
      this.timeout = setTimeout(() => {
        if (index < this.text.length) {
          this.typedText += this.text.charAt(index);
        }

        type(index + 1, Math.random() * this.debounceTime);
      }, timeout);
    }

    type(0, 0);
    if (this.cursor) {
      const toggleCursorChar = () => this.cursorChar = this.cursorChar === '|' ? '' : '|';
      this.interval = setInterval(toggleCursorChar, 400);
    }
  }

  ngOnDestroy() {
    if (this.cursor) {
      clearInterval(this.interval);
    }
    clearTimeout(this.timeout);
  }

}
