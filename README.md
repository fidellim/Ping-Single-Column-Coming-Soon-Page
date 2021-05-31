# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![Solution PC](./images/Solution%20PC.png)
![Solution Mobile](./images/Solution%20MobileC.png)
![Solution Mobile Error](./images/Solution%20Mobile%20Erorr.png)

### Links

- Solution URL: [Solution](https://github.com/fidellim/Ping-Single-Column-Coming-Soon-Page)
- Live Site URL: [Live Site](https://serene-rosalind-dbee7e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow

### What I learned

How to determine the screen size in Javascript.

```js
if (window.screen.width > 700) {
	errorText.style.marginBottom = "0rem";
	errorText.style.textAlign = "left";
	errorText.style.paddingLeft = "1rem";
}
```

### Continued development

To be able to learn more complex Javascript

### Useful resources

- [Screen Size in Javascript](https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window) - This helped me determine the screen size in Javascript.

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
