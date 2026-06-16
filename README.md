# Interactive Alphabet Web Application

## Description

This project is an interactive web application that displays the alphabet using dynamic cards. Each letter is presented with basic information, a visual representation, and a flip animation that reveals additional content.

The application is built using HTML, CSS, and JavaScript, with a focus on DOM manipulation and responsive design.

---

## Features

* Automatic generation of alphabet letters (including Ñ)
* Card flip animation (front and back)
* Classification of letters into vowels and consonants
* Responsive layout using CSS Grid
* Dynamic content rendering with JavaScript
* Image support for each letter

---

## Technologies Used

* HTML5
* CSS3 (Flexbox, Grid, Animations)
* JavaScript (DOM manipulation and event handling)

---


## How It Works

* A string containing all letters is converted into an array
* A separate array defines which letters are vowels
* JavaScript dynamically creates each card using `innerHTML`
* Each card is assigned a class based on its type (vowel or consonant)
* Event listeners handle the flip interaction

---

## Example Behavior

Each card includes:

**Front side**

* Letter
* Description
* Flip button

**Back side**

* Image
* Letter type (vowel or consonant)
* Return button

---

## Purpose

This project was created as a practice exercise to improve skills in:

* DOM manipulation
* Responsive web design
* CSS animations
* Dynamic content generation

---

## Future Improvements

* Add audio pronunciation for each letter
* Include interactive games (quiz, memory)
* Integrate external image APIs
* Improve UI/UX design

---

## Author

Developed as part of a learning process in web development.

---

## License

This project is free to use for educational purposes.
