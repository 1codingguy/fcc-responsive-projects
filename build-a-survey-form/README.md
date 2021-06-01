# Survey Form - freeCodeCamp

This is a solution to the [Build a Survey Form](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form).

## Table of contents

- [Overview](#overview)
  - [Objective](#objective)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Technologies used](#technologies-used)
  - [Things I learned](#things-i-learned)

- [Author](#author)

## Overview

### Objective

1. Pass all the tests from FCC.
2. Get the page to look as close to the original design as possible.

### Screenshot

![sceenshot](./survey-form.png)

### Links

- [Solution](https://github.com/1codingguy/fcc-responsive-projects/tree/main/build-a-survey-form)
- [Live Site](https://1codingguy.github.io/fcc-responsive-projects/build-a-survey-form/)

## My process

### Technologies used

- HTML 5
- SCSS

### Things I learned

1. `input`, `select`, `textarea` & `button` do not inherit CSS styles by default.
2. `<input>` can be nested inside `<label>`. No `id` is needed to link up both of them.
3. There is no `placeholder` attribute for `<select>` element. To have a default value on the dropdown menu, we can write `value="disabled selected hidden"` inside `<option>`. The meanings of the three attributes are:

- `disabled` - unable to select such option
- `selected` - display the value by default
- `hidden` - this option is hidden once the dropdown menu is opened

## Author

- Github - [1codingguy](https://github.com/1codingguy)
