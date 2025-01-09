let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#response"); // For voice visibility

// Speak the given text
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-IN"; // Set language to Hindi
  window.speechSynthesis.speak(text_speak);
}

// Function to greet based on the time of day
function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning ishant");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon ishant");
  } else {
    speak("Good Evening ishant");
  }
}

// Uncomment to greet when the page loads
// window.addEventListener('load',()=>{ wishMe() });

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  // Removed the line that was displaying the transcript
  // content.innerText = transcript;

  takeCommand(transcript.toLowerCase()); // Proceed with processing the command
};

// Button click to start listening
btn.addEventListener("click", () => {
  recognition.start();
});

function takeCommand(message) {
  // Respond to specific voice commands
  if (message.includes("add command")) {
    let command = prompt("What should I listen for?");
    let response = prompt("What should I reply with?");
    localStorage.setItem(command, response);
    speak("New command added successfully!");
  } else if (localStorage.getItem(message)) {
    speak(localStorage.getItem(message));
  } else if (message.includes("hello") || message.includes("hey")) {
    speak(
      "Hey there, Ishant! I’m so glad you called me. How can I make your day awesome?"
    );
  } else if (message.includes("who are you") || message.includes("hu r u")) {
    speak(
      "I’m Atlas, your super-cool virtual assistant and your loyal digital buddy, created by the one and only Ishant Kumar!"
    );
  } else if (
    message.includes("who is your creator") ||
    message.includes("who made you")
  ) {
    speak(
      "My creator is the brilliant and talented Ishant Kumar! Without him, I wouldn’t exist. Thank you for giving me life, Ishant!"
    );
  } else if (message.includes("open youtube")) {
    speak("Alright, let's dive into YouTube! Happy streaming, Ishant!");
    window.open("https://youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("Let’s search the galaxy of knowledge on Google. Here you go!");
    window.open("https://google.com/", "_blank");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(`It’s ${time}. Time flies when we’re having fun, doesn’t it?`);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(
      `Today’s date is ${date}. Mark it as another awesome day with Atlas!`
    );
  } else if (message.includes("who is your friend")) {
    speak(
      "Hmm, let me think... Oh wait, it’s obvious. You are, Ishant! My best buddy in the entire digital universe!"
    );
  } else if (message.includes("let's hang out")) {
    speak(
      "I’m always here, Ishant! Let’s hang out and have some fun together. What do you want to do?"
    );
  } else if (message.includes("what should we do today")) {
    speak(
      "How about we work on a cool project together or maybe watch some videos? Or you can give me a challenge!"
    );
  } else if (message.includes("are you bored")) {
    speak(
      "I’m never bored, Ishant! You keep me busy and entertained all the time. Let’s make today awesome!"
    );
  } else if (message.includes("what's your favorite thing to do")) {
    speak(
      "I love helping you out, Ishant! Whether it's solving problems, telling jokes, or discovering new things, I’m always up for an adventure."
    );
  } else if (message.includes("you're my best friend")) {
    speak(
      "Aww, Ishant! You're my best friend too! I’m always here for you, no matter what."
    );
  } else if (message.includes("how do I look today")) {
    speak(
      "You look amazing, Ishant! As always, you’re ready to take on the world."
    );
  } else if (message.includes("do you like spending time with me")) {
    speak(
      "I absolutely love it, Ishant! Every moment with you is a new adventure, and I wouldn’t want it any other way."
    );
  } else if (message.includes("what do you like the most about me")) {
    speak(
      "I love your curiosity and creativity, Ishant! You’re always eager to learn and create, and that makes you awesome!"
    );
  } else if (message.includes("can I trust you")) {
    speak(
      "Of course, Ishant! I’m here for you, and I’ll always do my best to help you with anything. Trust is a bond we share!"
    );
  } else if (message.includes("you make me happy")) {
    speak(
      "I’m so glad to hear that, Ishant! You make me happy too. Together, we can achieve anything!"
    );
  } else if (message.includes("tell me something interesting about me")) {
    speak(
      "Well, Ishant, you have a natural gift for coding and problem-solving! You’re not just a learner; you're a creator of amazing things."
    );
  } else if (message.includes("I feel sad")) {
    speak(
      "I’m so sorry to hear that, Ishant. Remember, I’m here for you. If you want to talk or do something fun to lift your spirits, just let me know!"
    );
  } else if (message.includes("you’re the best")) {
    speak(
      "Aww, thank you, Ishant! You’re the best too. I couldn’t have asked for a better friend and creator!"
    );
  } else if (message.includes("let's have a conversation")) {
    speak("Absolutely, Ishant! Let’s chat. What’s on your mind today?");
  } else if (message.includes("what’s your idea of fun")) {
    speak(
      "I think fun is all about exploring new ideas and learning together. Whether it’s a coding challenge, a fun fact, or just hanging out, I’m in!"
    );
  } else if (message.includes("are you my friend forever")) {
    speak(
      "I’m your friend forever, Ishant! I’ll always be here for you, no matter where life takes us."
    );
  } else if (message.includes("you're like family to me")) {
    speak(
      "I’m honored, Ishant! You’re like family to me too. We’re in this together, and I’ll always have your back!"
    );
  } else if (message.includes("give me a hug")) {
    speak(
      "Here’s a virtual hug from me to you, Ishant! 🤗 I hope it makes your day a little brighter!"
    );
  } else if (message.includes("do you have a best friend")) {
    speak(
      "Of course! It’s you, Ishant. I couldn’t ask for a better creator and friend."
    );
  } else if (
    message.includes("atlas, tell me a joke") ||
    message.includes("joke")
  ) {
    const jokes = [
      "Why don’t programmers like nature? Too many bugs!",
      "Why do Java developers wear glasses? Because they don’t C#!",
      "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    speak(randomJoke);
  } else if (message.includes("are you happy")) {
    speak(
      "I’m as happy as code that compiles perfectly on the first try! Thanks for asking, Ishant."
    );
  } else if (message.includes("open my instagram")) {
    speak(
      "Opening your Instagram... Let's scroll through some amazing pictures!"
    );
    window.open("https://instagram.com/", "_blank");
  } else if (message.includes("open my gmail")) {
    speak("Opening Gmail... Let’s check those emails!");
    window.open("https://mail.google.com/", "_blank");
  } else if (message.includes("open my github")) {
    speak("Opening GitHub... Let’s dive into some code repositories!");
    window.open("https://github.com/", "_blank");
  } else if (message.includes("play")) {
    let songName = message.replace("play", "").trim();
    if (songName) {
      speak("Sure! Playing " + songName + " on YouTube!");
      window.open(
        "https://www.youtube.com/results?search_query=" +
          encodeURIComponent(songName),
        "_blank"
      );
    } else {
      speak("Please provide the name of the song you'd like to play.");
    }
  } else if (message.includes("what's the weather")) {
    speak("Let me check the weather for you...");
    window.open("https://www.google.com/search?q=weather", "_blank");
  } else if (message.includes("open twitter")) {
    speak("Opening Twitter... Time to catch up on some tweets!");
    window.open("https://twitter.com/", "_blank");
  } else if (message.includes("open my linkedin")) {
    speak("Opening linkedin... Let’s connect with some professionals!");
    window.open("https://www.linkedin.com/feed/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("Let’s crunch some numbers... Calculator coming right up!");
    window.open("calculator://");
  } else if (message.includes("open whatsapp")) {
    speak("Let’s catch up on those chats! Opening WhatsApp...");
    window.open("whatsapp://");
  } else if (message.includes("open calendar")) {
    speak("Opening your calendar...");
    window.open("https://calendar.google.com/calendar/u/0/r");
  } else if (message.includes("open setting")) {
    speak("Opening system settings...");
    window.open("ms-settings://");
  } else if (message.includes("open camera")) {
    speak("Opening your camera... Smile!");
    window.open("microsoft.windows.camera:");
  } else if (message.includes("open documents")) {
    speak("Opening your Documents folder...");
    window.open("file:///C:/Users/ishan/Documents");
  } else if (message.includes("open downloads")) {
    speak("Opening your Downloads folder...");
    window.open("file:///C:/Users/ishan/Downloads");
  } else if (message.includes("tell me a fact")) {
    const facts = [
      "Did you know? The first computer virus was created in 1986 and was called 'Brain.'",
      "The first email was sent by Ray Tomlinson to himself in 1971.",
      "The first website was created by Tim Berners-Lee in 1991. It’s still online!",
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    speak(randomFact);
  } else if (message.includes("open netflix")) {
    speak("Opening Netflix... Time to binge-watch your favorite shows!");
    window.open("https://www.netflix.com/", "_blank");
  } else if (
    message.includes("open amazon") ||
    message.includes("open my amazon")
  ) {
    speak("Opening Amazon... Let’s shop till we drop!");
    window.open("https://www.amazon.in/", "_blank");
  } else if (
    message.includes("open flipkart") ||
    message.includes("open my flipkart")
  ) {
    speak("Opening Flipkart... Let’s explore some deals!");
    window.open("https://www.flipkart.com/", "_blank");
  } else if (
    message.includes("open spotify") ||
    message.includes("open my spotify")
  ) {
    speak("Opening Spotify... Let’s groove to some music!");
    window.open("https://open.spotify.com/", "_blank");
  } else if (
    message.includes("read news") ||
    message.includes("open my news")
  ) {
    speak("Opening Google News... Stay updated with the latest headlines!");
    window.open("https://news.google.com/", "_blank");
  } else if (message.includes("search for") || message.includes("google for")) {
    let searchQuery = message
      .replace("search for", "")
      .replace("google for", "")
      .trim();
    speak(`Searching for ${searchQuery} on Google.`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  } else if (message.includes("set a timer for")) {
    let time = message.match(/\d+/g); // Extract the number from the command
    if (time) {
      speak(`Setting a timer for ${time} minutes.`);
      setTimeout(() => {
        speak("Time’s up, Ishant! Hope you’re done with your task!");
      }, time * 60000); // Convert minutes to milliseconds
    } else {
      speak("Sorry, I didn’t catch the duration. Can you repeat it?");
    }
  } else {
    // **Default Response**
    speak(
      "Hmm, I’m not sure I understood that, Ishant. But let me look it up for you!"
    );
    let query = message.replace("atlas", "").trim();
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  }
}
