// Declare isTrue outside the initialize function to preserve its value
let isTrue = true;
var msg = document.getElementById("birthday-message");
var playButton = document.getElementById('playButton');
var audio = document.getElementById("myAudio");

// Run onload event and initialize function simultaneously
// Run onload event and initialize function simultaneously
function playAudio() {
    playButton.style.display = 'none';
    audio.src = "../audios/introMusic.mp3";
    audio.play();
    audio.play().then(function() {
        console.log("Audio playback started successfully.");
    }).catch(function(error) {
        console.error("Error playing audio:", error);
    });
    
    setTimeout(function() {
        msg.innerText = "Guys sing with me🤗";
      }, 2000);
      
        initialize();
        // const c = setTimeout(() => {
        //     document.body.classList.remove("not-loaded");
        //     clearTimeout(c);
        // }, 1000);
        setTimeout(function() {
            msg.innerText = "Guys, give him a round of applause👏";
            audio.src = "../audios/clap.mp3";
            audio.play();
        }, 19000);
        
};

window.onload = function() {
    // Get all the rotating images
    
const images = document.querySelectorAll('.rotating-image');

// Function to generate a random position within the container dimensions
function getRandomPosition() {
    const maxX = window.innerWidth - 100; // width of the balloon
    const maxY = window.innerHeight - 150; // height of the balloon
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

// Function to apply random position to each image individually
function applyRandomPosition(image) {
    const position = getRandomPosition();
    image.style.left = `${position.x}px`;
    image.style.top = `${position.y}px`;
}

// Apply initial random positions to balloons
images.forEach(applyRandomPosition);

// Move the balloons randomly and float them
function moveBalloons() {
    images.forEach(image => {
        const newPosition = getRandomPosition();
        image.style.animation = `float 2s infinite alternate`;
        image.style.left = `${newPosition.x}px`;
        image.style.top = `${newPosition.y}px`;
    });
}

// Move balloons randomly periodically
setInterval(moveBalloons, 2000); // Adjust the interval as needed


    
playButton.addEventListener('click', playAudio);
    
};



function initialize() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);

            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;

            microphone.connect(analyser);

            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            const volumeDisplay = document.getElementById('volumeDisplay');
            const candle1 = document.getElementById('candle1');
            const candle2 = document.getElementById('candle2');
            const candle3 = document.getElementById('candle3');
            const candle4 = document.getElementById('candle4');
            const photoElement = document.getElementById('photo');

            function checkVolume() {
                var msg1 = document.getElementById("msg1");       
                var msg2 = document.getElementById("msg2");       
                var msg3 = document.getElementById("msg3");       
                var msg4 = document.getElementById("msg4");       
                var msg5 = document.getElementById("msg5");       
                var msg6 = document.getElementById("msg6");       
                var msg7 = document.getElementById("msg7");        

                var audio = document.getElementById("myAudio");
                analyser.getByteFrequencyData(dataArray);
                let total = 0;
                const length = dataArray.length;
                for (let i = 0; i < length; i++) {
                    total += dataArray[i];
                }
                const averageVolume = total / length;
                const volumeLevel = Math.round(averageVolume);
                
                // Update volume display
                // volumeDisplay.innerText = `Volume: ${volumeLevel}`;

                // Check if volume is greater than 95
                
                if (volumeLevel >= 95) {
                    isTrue = false;
                    
                    // Hide flame images
                    msg.innerText = "";
                    candle1.style.display = 'none';
                    candle2.style.display = 'none';
                    candle3.style.display = 'none';
                    candle4.style.display = 'block';                
                    

                    // Display the photo
                    
                } 
                else if(volumeLevel > 75){
                    candle1.style.display = 'none';
                    candle2.style.display = 'none';
                    candle3.style.display = 'block';
                    candle4.style.display = 'none';
                }
                else if(volumeLevel > 30){
                    candle1.style.display = 'none';
                    candle2.style.display = 'block';
                    candle3.style.display = 'none';
                    candle4.style.display = 'none';
                }
                else {
                    setTimeout(function() {
                        msg.innerText = "ඔහොම නම් බෑ ළමයො🤦‍♂️... \nmic එකට ලං වෙලා හොඳට සද්දෙට පිබින්න...!!!";
                      }, 500);
                    // Show flame images
                    candle1.style.display = 'block';
                    candle2.style.display = 'none';
                    candle3.style.display = 'none';
                    candle4.style.display = 'none';
                    // Hide the photo
                    photoElement.style.display = 'none';
                }
                
                // Repeat the function
                if (isTrue) {
                    setTimeout(checkVolume, 100);
                } else {
                    // End the function
                    stream.getTracks()[0].stop();
                    
                    setTimeout(function() {
                        msg.innerText = " ";
                        candle4.style.display = 'none';
                        photoElement.style.display = 'block';
                        
                    }, 1000);
                    setTimeout(function() {
                        msg1.innerHTML = "<b>Happy Birthday Pamu</b>😘";
                        audio.src = "../audios/voice.mp3";
                        audio.play();
                    }, 2000);
                    setTimeout(function() {
                        msg2.innerText = "\nYou are very special, and";
                    }, 4000);
                    setTimeout(function() {
                        msg3.innerText = "I hope you have a great day🌟";
                    }, 6000);
                    setTimeout(function() {
                        msg4.innerText = "You deserve all the happiness in the world😊";
                        
                    }, 8000);
                    setTimeout(function() {
                        msg5.innerText = "\nHave lots of fun today and enjoy your life!🎉"; 
                        
                    }, 11000);
                    setTimeout(function() {
                        msg6.innerText = "Best wishes from your friend";
                         
                    }, 14500);
                    setTimeout(function() {
                        msg7.innerHTML = "<b>Universe</b>🌏"; 
                        
                    }, 15500);
                    setTimeout(function() {
                        audio.src = "../audios/endMusic.mp3";
                        audio.play();
                        audio.volume = 0.6;
                        audio.loop = true; 
                    }, 17000);
                }
            }
            

            setTimeout(function() {
                msg.innerText = "Pamuda blow the candles!!!";
            }, 25000);
            // Call the function initially
            setTimeout(function(){
                checkVolume();
              }, 28000);
            
                
        })
        .catch(err => {
            console.error('Error accessing microphone:', err);
        });
};
