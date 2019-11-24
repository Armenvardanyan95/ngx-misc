# @ngx-misc/slow-type

Small Angular component for a slow text typing animation

## Installation

You can install this component using `npm`

```npm install @ngx-misc/slow-type```

## Usage

Import the `SlowType` module into one of your Angular modules

```
import { SlowTypeModule } from '@ngx-misc/slow-type'; 
// your code

@NgModule({
  imports: [SlowTypeModule]
})
export class MyModule {}
```

And just drop the component in your template:

```
<ngx-slow-type text="Hello, world!"></ngx-slow-type>
```

Note: the `text` parameter is required

## Options

You can customize how the `SlowTypeComponent` works using some inputs:

| Input        | Description                                                                                                                      | Type                  | Default Value |
|--------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------------|---------------|
| cursor       | Whether to show the blinking typing cursor                                                                                       | boolean               | true          |
| debounceTime | The range of time (in ms) in which the letters will be added to the screen.  Smaller values mean faster typing                   | number (milliseconds) | 700           |
| editable     | Whether the inputted text can be then edited  by the user. Sets the `contentEditable` property of the underlying `span` element. | boolean               | false         |


## Contribute

If you like `@ngx-misc` or this component in particular, you are welcome to contribute!

Visit our [GitHub repository](https://github.com/Armenvardanyan95/ngx-misc) for more information.
