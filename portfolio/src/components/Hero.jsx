import React, { use, useEffect, useState } from 'react'


const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const typewriterMessages = [
        "Welcome to my portfolio",
        "Passionate developer and learner",
        "Data, AI, and Software Enthusiast",
        "Explore my projects and skills",
        
    ];

    useEffect(() => {
        let currentStringIndex = 0;
        let currentCharIndex = 0;
        let currentString = typewriterMessages[currentStringIndex];
        const typingSpeed = 100; // typing speed
        const deletingSpeed = 50; // deleting speed
        const delayBetweenMessages = 2500; // delay between messages 

    function type() { 
        setCurrentText(currentString.substring(0, currentCharIndex ) + '_'); // cursor for typing effect

        if(currentCharIndex++ === currentString.length) {
            setTimeout(() => { // wait before deleting
                deleteText(); 
            }, delayBetweenMessages); 
        } else {
            setTimeout(type, typingSpeed); //keep on typing
        }

    }

    function deleteText() { 
        setCurrentText(currentString.substring(0, currentCharIndex ) + '_'); // cursor for deleting effect
        if(currentCharIndex-- === 0) {
            currentStringIndex = (currentStringIndex + 1) % typewriterMessages.length; // cycle through the messages
            currentString = typewriterMessages[currentStringIndex];
            setTimeout(type, typingSpeed); // start typing next message
        } else {
            setTimeout(deleteText, deletingSpeed); // keep on deleting
        }
    }
    type(); // start the typing effect
    }, []);
  return (
    <div className='p-20 flex flex-col mt-32 space-y-6 text-blue-100'>
        <div className="text-2xl ">I am Jeffrey Anderson</div>
        <div className="text-3xl">{currentText}</div>
    </div>
  )
}

export default Hero