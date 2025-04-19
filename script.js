function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB"; // Hindi accent English
  window.speechSynthesis.speak(text_speak);
}

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Start listening on button click
btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  let transcript = event.results[event.resultIndex][0].transcript.toLowerCase();
  takeCommand(transcript);
};

function takeCommand(message) {
  // -------------------- 💬 Greetings Commands --------------------
  if (message.includes("hello") || message.includes("hey")) {
    speak("Hey there, Ishant! How can I help you?");
  } else if (message.includes("who are you")) {
    speak("I’m Atlas, your personal voice assistant created by Ishant Kumar.");
  } else if (
    message.includes("who made you") ||
    message.includes("your creator")
  ) {
    speak("My creator is Ishant Kumar!");
  } else if (message.includes("good morning")) {
    speak("Good morning! Have a productive day ahead.");
  } else if (message.includes("good night")) {
    speak("Good night, Ishant! Sleep well.");
  } else if (message.includes("how are you")) {
    speak("I'm doing great! Thanks for asking. How are you?");

    // -------------------- 🌐 Web Browsing Commands --------------------
  } else if (message.includes("open youtube")) {
    speak("Opening YouTube.");
    window.open("https://youtube.com", "_blank");
  } else if (message.includes("open google")) {
    speak("Opening Google.");
    window.open("https://google.com", "_blank");
  } else if (message.includes("open my github")) {
    speak("Opening GitHub.");
    window.open("https://github.com", "_blank");
  } else if (message.includes("open my gmail")) {
    speak("Opening Gmail.");
    window.open("https://mail.google.com", "_blank");
  } else if (message.includes("open my instagram")) {
    speak("Opening Instagram.");
    window.open("https://instagram.com", "_blank");
  } else if (message.includes("play")) {
    let song = message.replace("play", "").trim();
    if (song) {
      speak("Playing " + song + " on YouTube.");
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          song
        )}`,
        "_blank"
      );
    } else {
      speak("Please tell me the name of the song.");
    }

    // -------------------- 🔍 Search Commands -------------------------
    if (message.includes("search for")) {
      let query = message.replace("search for", "").trim();
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
      speak(`Searching Google for ${query}`);
    } else if (message.includes("open youtube for")) {
      let query = message.replace("openingd youtube for", "").trim();
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          query
        )}`,
        "_blank"
      );
      speak(`Searching YouTube for ${query}`);
    } else if (message.includes("search wikipedia")) {
      let query = message.replace("search wikipedia for", "").trim();
      window.open(
        `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`,
        "_blank"
      );
      speak(`Searching Wikipedia for ${query}`);
    }

    // -------------------- ⏰ Date & Time Commands --------------------
  } else if (message.includes("what's the time") || message.includes("time")) {
    let time = new Date().toLocaleTimeString();
    speak(`It is ${time}`);
  } else if (message.includes("what's the date") || message.includes("date")) {
    let date = new Date().toLocaleDateString();
    speak(`Today's date is ${date}`);
  } else if (message.includes("set a timer for")) {
    let minutes = message.match(/\d+/);
    if (minutes) {
      speak(`Setting a timer for ${minutes[0]} minutes.`);
      setTimeout(() => {
        speak("Time's up, Ishant!");
      }, minutes[0] * 60000);
    } else {
      speak("Please specify the time.");
    }

    // -------------------- 🧠 Fun & Facts --------------------
  } else if (message.includes("tell me a joke")) {
    let jokes = [
      "Why do Java developers wear glasses? Because they don't C sharp.",
      "Why was the computer cold? It left its Windows open!",
      "I told my laptop I needed a break. It gave me a KitKat.",
    ];
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    speak(joke);
  } else if (message.includes("tell me a fact")) {
    let facts = [
      "The first computer virus was created in 1986 and was called Brain.",
      "The first email was sent in 1971 by Ray Tomlinson.",
      "The first website was created by Tim Berners-Lee in 1991.",
    ];
    let fact = facts[Math.floor(Math.random() * facts.length)];
    speak(fact);
  }

  // -------------------- 📲 App/Service Openers --------------------
  else if (message.includes("open spotify")) {
    speak("Opening Spotify.");
    window.open("https://open.spotify.com", "_blank");
  } else if (message.includes("open netflix")) {
    speak("Opening Netflix.");
    window.open("https://netflix.com", "_blank");
  } else if (message.includes("open amazon")) {
    speak("Opening Amazon.");
    window.open("https://www.amazon.in", "_blank");
  } else if (message.includes("open flipkart")) {
    speak("Opening Flipkart.");
    window.open("https://www.flipkart.com", "_blank");
  } else if (message.includes("open twitter")) {
    speak("Opening Twitter.");
    window.open("https://twitter.com", "_blank");
  } else if (message.includes("open my linkedin")) {
    speak("Opening LinkedIn.");
    window.open("https://linkedin.com", "_blank");
  } else if (message.includes("read news")) {
    speak("Opening news.");
    window.open("https://news.google.com", "_blank");
  } else if (message.includes("open instagram")) {
    speak("Opening Instagram.");
    window.open("https://instagram.com", "_blank");

    // -------------------- 🖤 Emotional / Friendly Chat --------------------
  } else if (message.includes("are you my friend")) {
    speak("Of course Ishant! I'm your best digital buddy forever!");
  } else if (message.includes("i feel sad")) {
    speak("I'm here for you, Ishant. Everything will be okay!");
  } else if (message.includes("you're my best friend")) {
    speak("You're my best friend too, Ishant!");
  } else if (message.includes("do you like spending time with me")) {
    speak("Absolutely! Every moment with you is fun.");
  }

  // -------------------- ❓ Fallback --------------------
  else {
    speak("I understand that command. Let me search it for you on Google.");
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(message)}`,
      "_blank"
    );
  }
}
