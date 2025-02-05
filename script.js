let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

// Configuration
const AI_CONFIG = {
  name: "Atlas",
  user: "Ishant",
  language: "hi-IN",
  pitch: 1,
  rate: 1,
  volume: 1,
};

// Speech Synthesis Setup
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = AI_CONFIG.rate;
  utterance.pitch = AI_CONFIG.pitch;
  utterance.volume = AI_CONFIG.volume;
  utterance.lang = AI_CONFIG.language;
  window.speechSynthesis.speak(utterance);
}

// Command Database
const COMMANDS = {
  greetings: {
    patterns: [/hi|hello|namaste|hey/i],
    response: `Good day ${AI_CONFIG.user}. How may I assist you today?`,
  },
  identity: {
    patterns: [/who are you|introduce yourself/i],
    response: `I am ${AI_CONFIG.name}, an AI-powered digital assistant designed to help you with various tasks. Currently operating in version 2.1.`,
  },
  creator: {
    patterns: [/who created you|your developer/i],
    response: `I was developed by ${AI_CONFIG.user}, a skilled software engineer specializing in intelligent systems.`,
  },
  time: {
    patterns: [/current time|time/i],
    response: () => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `The current time is ${time}`;
    },
  },
  // ... Add other commands following the same structure
};

// Enhanced Speech Recognition
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// System Functions
function executeCommand(transcript) {
  const normalizedText = transcript.toLowerCase().trim();
  let commandExecuted = false;

  for (const [category, cmd] of Object.entries(COMMANDS)) {
    if (cmd.patterns.some((pattern) => pattern.test(normalizedText))) {
      const response =
        typeof cmd.response === "function" ? cmd.response() : cmd.response;
      speak(response);
      commandExecuted = true;
      break;
    }
  }

  if (!commandExecuted) {
    handleComplexCommands(normalizedText);
  }
}

function handleComplexCommands(command) {
  const defaultResponses = [
    "Let me research that for you.",
    "Allow me to look that up.",
    "I'll find the most relevant information.",
  ];

  // Command handling logic
  if (command.startsWith("open")) {
    handleApplicationLaunch(command);
  } else if (command.startsWith("search")) {
    handleWebSearch(command);
  } else if (command.startsWith("set timer")) {
    handleTimer(command);
  } else {
    speak(
      defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    );
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(command)}`,
      "_blank"
    );
  }
}

// Application Launch Handler
function handleApplicationLaunch(command) {
  const APP_MAP = {
    youtube: {
      url: "https://youtube.com/",
      response: "Launching YouTube platform",
    },
    github: {
      url: "https://github.com/",
      response: "Accessing code repository platform",
    },
    // ... Add other applications
  };

  const appKey = command.replace("open", "").trim();
  if (APP_MAP[appKey]) {
    speak(APP_MAP[appKey].response);
    window.open(APP_MAP[appKey].url, "_blank");
  } else {
    speak("Application not configured. Would you like me to search for it?");
  }
}

// System Initialization
function initializeAssistant() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  speak(`System initialized. Good ${greeting} ${AI_CONFIG.user}.`);
}

// Event Handlers
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  executeCommand(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
  speak("Awaiting your command");
});

// Initialize the assistant
initializeAssistant();
