# BirthdayWishing

A fun and interactive web page to wish someone special a happy birthday! This project involves HTML, CSS, and JavaScript to create a delightful birthday experience with balloons, falling dots, a happy birthday song, and a microphone interaction to blow out virtual candles.

## Features

- **Interactive Balloons**: Balloons float around the screen with animations.
- **Confetti**: Falling dots to create a festive atmosphere.
- **Birthday Messages**: Display a sequence of birthday messages.
- **Microphone Interaction**: Blow out the virtual candles by making a noise into the microphone.
- **Background Music**: Happy birthday song and other audio effects.

## File Structure

- **BirthdayWishing/**
  - `README.md`
  - `LICENSE`
  - `.gitattributes`
  - `.git/`
  - **audios/**: Contains all the audio clips.
  - **favicon/**: Contains different sizes of photos.
  - **images/**: Contains all the images and elements that help to create images.
  - **src/**: Contains `index.html`, `script.js`, and `style.css`.

## HTML Structure

The HTML file includes:
- A main container (`#main`) for all elements.
- A container for balloons (`#balloons-container`).
- Confetti elements.
- Instruction text and birthday messages.
- Candles with different states.
- A hidden image to be revealed after the candles are blown out.
- An audio element for background music and effects.

## CSS Styling

The CSS file includes:
- Styling for the body with a background image.
- Customizable birthday messages.
- Styling for the play button.
- Layout for the main container and sub-elements.
- Confetti animation.
- Hover effects for the photo.
- Candle visibility based on microphone volume.

## JavaScript Functionality

The JavaScript file includes:
- Event listener for the play button to start the audio and sequence of messages.
- Function to generate random positions for the balloons and move them.
- Function to initialize microphone access and check the volume level to blow out the candles.
- Timed messages and audio playback for the birthday experience.

## Usage

1. Clone the repository.
2. Open `src/index.html` in a web browser.
3. Click the play button to start the birthday experience.
4. Follow the instructions and enjoy the interactive birthday wish.

## Purpose

The purpose of this repository is to allow you to wish your favorite people in a very lovely way. You can use it to surprise your crush, girlfriend, boyfriend, friends, and family friends.

## Credits

- **Pamuda Uposath De Alwis Goonatilake**: Creator of the BirthdayWishing project. This is his own idea.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
