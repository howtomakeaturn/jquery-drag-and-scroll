# jquery-drag-and-scroll

A simple, lightweight jQuery plugin for dragging the elements to move the scrollbars

## Installation

Include script *after* the jQuery library 

```html
<script src="/the_path/jquery-drag-and-scroll.js"></script>
```


## Usage

for example, there's a big element inside a small (fixed size) element:

```html
<div id="target">
    <div id='fatty'>HELLO</div>
</div>
```

```css
#target {
    background-color: pink;
    height: 300px;
    width: 300px;
    overflow: scroll;
}
#fatty {
    background-color: red;
    height: 1000px;
    width: 1000px;
}
```

you can enable the plugin with this:

```javascript
$("#target").dragAndScroll();
```
if you still cant figure it out, these's also a demo file in the folder  ;)

## Author

Chuan-Hao, You
https://github.com/poopoo888888
