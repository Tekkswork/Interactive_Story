const scenes = {
  intro: {
    id: "intro",
    type: "narrative",
    text: [
      "Sienna lives in Washington, USA, in a cramped flat above a closed-down shop.",
      "At night, the streets are silent, but her mind is loud.",
      "Thoughts march, multiply, and mash together, refusing to let her rest.",
      "When sleep finally comes, it is not gentle. It is filled with thoughts about what's happening to the world… and what's going to happen to her..."
    ],
    nextScene: "sms",
    background: "dark",
    backgroundImage: "img/apartment.webp"
  },
  sms: {
    id: "sms",
    type: "narrative",
    text: ["\"PING.\"", "SMS from Mom?"],
    specialText: { type: "sms", content: "Send me money! I need to pay for the fentanyl. Hurry!" },
    nextScene: "drinking",
    background: "dark",
    backgroundImage: "img/apartment.webp"
  },
  drinking: {
    id: "drinking",
    type: "narrative",
    text: ["The world is broken. I hate this… let me just drink to my fullest."],
    specialText: { type: "glitch", content: "Ughh, I am so dizzy…" },
    nextScene: "blackout",
    background: "dark",
    backgroundImage: "img/apartment.webp"
  },
  blackout: {
    id: "blackout",
    type: "transition",
    text: ["The screen goes dark."],
    nextScene: "day1_wake",
    background: "dark"
  },
  day1_wake: {
    id: "day1_wake",
    type: "narrative",
    dayMarker: "DAY 1 — THE OUTBREAK",
    text: [
      "Sienna wakes up on cold pavement.",
      "The city is wrong.",
      "Buildings lean like tired giants. Windows are smashed. A burnt-out bus blocks the road, its destination sign frozen on \"CITY CENTRE.\"",
      "Smoke hangs in the air like a heavy blanket, pressing down on her chest."
    ],
    nextScene: "day1_zombies",
    background: "smoke",
    backgroundImage: "img/city-outbreak.webp"
  },
  day1_zombies: {
    id: "day1_zombies",
    type: "narrative",
    text: [
      "A sound echoes. Groaning. Slow footsteps. Breathing that doesn't seem human.",
      "Zombies? — or…?",
      "She turns the corner.",
      "They are not monsters. They are people.",
      "Their eyes are empty. Their jaws slack. Needles lie scattered on the ground beside them. Small plastic bags drift in the wind.",
      "They move slowly. Drugged. Lost.",
      "They remind Sienna of herself at school — present, but not really there."
    ],
    nextScene: "choice1",
    background: "green",
    backgroundImage: "img/city-outbreak.webp"
  },
  choice1: {
    id: "choice1",
    type: "choice",
    text: [
      "Her heart pounds. No phone. No help. No way out.",
      "She runs.",
      "Sienna sees two places to hide:"
    ],
    choices: [
      { label: "A", text: "An abandoned school building", nextScene: "school" },
      { label: "B", text: "A dark supermarket", nextScene: "supermarket" }
    ],
    background: "smoke",
    backgroundImage: "img/city-outbreak.webp"
  },
  school: {
    id: "school",
    type: "narrative",
    text: [
      "The corridors are silent. Lockers hang open. Papers are scattered across the floor.",
      "In a classroom, she finds a diary."
    ],
    specialText: {
      type: "diary",
      content: "\"I can't sleep. I can't think. I feel like I'm disappearing. I don't want to be addicted anymore, but there is no way out now. Sorry, Mom.\""
    },
    nextScene: "school_danger",
    background: "dark",
    backgroundImage: "img/school.webp"
  },
  school_danger: {
    id: "school_danger",
    type: "narrative",
    text: [
      "The drugged \"zombies\" begin to bang on the doors.",
      "Bang. Bang. Bang.",
      "Her head spins. Lack of sleep makes it hard to think.",
      "She forgets where she came from. She forgets what day it is.",
      "Just like before the world ended."
    ],
    nextScene: "night2",
    background: "red",
    backgroundImage: "img/school.webp"
  },
  supermarket: {
    id: "supermarket",
    type: "narrative",
    text: [
      "The shelves are empty. No food. No comfort. No calm.",
      "A flickering sign buzzes above her head, sharp and irritating.",
      "Her thoughts scatter like birds startled by noise.",
      "The \"zombies\" shuffle between the aisles, drawn to the sound.",
      "Sienna hides behind the counter, holding her breath."
    ],
    specialText: {
      type: "whisper",
      content: "\"This place is not for you, girl. You'll die or end up like us.\""
    },
    nextScene: "night2",
    background: "green",
    backgroundImage: "img/supermarket.webp"
  },
  night2: {
    id: "night2",
    type: "narrative",
    dayMarker: "NIGHT 2 — THE OFFER",
    text: [
      "Sienna finds a backpack on the ground.",
      "Inside: water. A flashlight. And a small bag of pills.",
      "She stares at them.",
      "She is exhausted. Her thoughts won't stop. She just wants silence.",
      "In the distance, the drugged figures stumble through the streets.",
      "They look peaceful in a strange way. Numb."
    ],
    nextScene: "choice2",
    background: "dark",
    backgroundImage: "img/city-outbreak.webp"
  },
  choice2: {
    id: "choice2",
    type: "choice",
    text: ["What does Sienna do?"],
    choices: [
      { label: "A", text: "Take the pills to make everything stop.", nextScene: "pills_take" },
      { label: "B", text: "Throw the pills away and keep moving.", nextScene: "pills_throw" }
    ],
    background: "dark",
    backgroundImage: "img/city-outbreak.webp"
  },
  pills_take: {
    id: "pills_take",
    type: "narrative",
    text: [
      "She swallows them.",
      "The world softens. The sounds fade. The fear disappears.",
      "She feels nothing.",
      "But when she looks at her hands — they tremble.",
      "When she tries to speak — only a hollow sound escapes.",
      "One of the \"zombies\" looks directly at her.",
      "For a second, their eyes reflect each other.",
      "Empty. Tired. Lost.",
      "She understands."
    ],
    specialText: { type: "glitch", content: "She is becoming one of them." },
    nextScene: "day3",
    background: "green"
  },
  pills_throw: {
    id: "pills_throw",
    type: "narrative",
    text: [
      "She throws the pills as far as she can.",
      "Her head pounds. Her body screams for rest.",
      "But she keeps walking."
    ],
    nextScene: "day3",
    background: "dark"
  },
  day3: {
    id: "day3",
    type: "narrative",
    dayMarker: "DAY 3 — THE TRUTH",
    text: [
      "By the third day, Sienna understands the rule of this world:",
      "If you stop moving, they catch you.",
      "Just like anxiety. Just like exhaustion. Just like life before the outbreak.",
      "She meets another survivor, Tom.",
      "He looks worn, but awake."
    ],
    nextScene: "tom_speech",
    background: "smoke",
    backgroundImage: "img/city-outbreak.webp"
  },
  tom_speech: {
    id: "tom_speech",
    type: "narrative",
    text: [
      "He tells her the truth:",
      "\"The drugged aren't monsters. They were people who were tired. People who were alone. People who wanted the noise in their heads to stop.\"",
      "\"The real danger isn't them. It's giving up.\"",
      "He tells her that before the apocalypse, he lost his job. He started taking pills to sleep. Then to feel calm. Then to feel anything.",
      "\"The world ended for me long before the zombies arrived.\""
    ],
    nextScene: "choice3",
    background: "smoke",
    backgroundImage: "img/city-outbreak.webp"
  },
  choice3: {
    id: "choice3",
    type: "choice",
    text: [
      "They reach a wall painted in red letters:",
      "\"HELP IS STILL HERE.\"",
      "It looks safe. But entering means trusting someone else."
    ],
    choices: [
      { label: "A", text: "Keep running alone. Trust only herself.", nextScene: "ending_alone" },
      { label: "B", text: "Enter the safe zone and ask for help.", nextScene: "ending_help" }
    ],
    background: "red",
    backgroundImage: "img/safe-zone.webp"
  },
  ending_alone: {
    id: "ending_alone",
    type: "narrative",
    text: [
      "She runs. She survives.",
      "But every night, the drugged figures return.",
      "They never disappear.",
      "The world never heals.",
      "And slowly, she grows more tired."
    ],
    nextScene: "final_wake",
    background: "dark"
  },
  ending_help: {
    id: "ending_help",
    type: "narrative",
    text: [
      "She steps inside.",
      "The safe zone is quiet. No groaning. No running. No sirens screaming in the distance.",
      "People sit together. Talking. Listening.",
      "Someone offers her water.",
      "For the first time in days, she rests.",
      "The \"zombies\" outside do not vanish — but they move slower. They are not attacking. They are suffering.",
      "The world is broken. But it is not hopeless."
    ],
    nextScene: "final_wake",
    background: "dawn",
    backgroundImage: "img/safe-zone.webp"
  },
  final_wake: {
    id: "final_wake",
    type: "narrative",
    dayMarker: "THE ENDING",
    text: [
      "The world fades.",
      "She wakes up in her bed.",
      "Morning light spills through the curtains, soft and pale.",
      "Her room is messy but familiar. Posters on the wall. A school bag on the floor. A clock blinking 07:12.",
      "Her phone lies beside her. One unread message."
    ],
    specialText: { type: "sms", content: "\"Come over. I have something that will help you relax.\"" },
    nextScene: "final_realization",
    background: "dawn",
    backgroundImage: "img/dawn.webp"
  },
  final_realization: {
    id: "final_realization",
    type: "narrative",
    text: [
      "Her heart drops.",
      "She remembers the zombies.",
      "The zombies were never monsters. They were people.",
      "People who were overwhelmed. People who were stressed. People who wanted silence in their minds.",
      "Just like her.",
      "She was close. Close to saying yes. Close to escaping in the wrong way."
    ],
    nextScene: "choice4",
    background: "dawn",
    backgroundImage: "img/dawn.webp"
  },
  choice4: {
    id: "choice4",
    type: "choice",
    text: [
      "Sienna stares at the message on her phone.",
      "Her thumb hovers over the screen.",
      "The dream echoes in her mind. The empty eyes. The numbness. The slow surrender.",
      "What does she do?"
    ],
    choices: [
      { label: "A", text: "Reply to the message. Maybe it won't be so bad.", nextScene: "final_accept" },
      { label: "B", text: "Delete the message. Choose a different path.", nextScene: "final_delete" }
    ],
    background: "dawn",
    backgroundImage: "img/dawn.webp"
  },
  final_accept: {
    id: "final_accept",
    type: "ending",
    text: [
      "Her thumb taps \"Reply.\"",
      "She types: \"Where?\"",
      "The response comes instantly. As if they were waiting.",
      "She gets dressed. She walks out the door.",
      "The morning light feels cold now.",
      "But she walks anyway.",
      "The cycle continues."
    ],
    specialText: { type: "glitch", content: "Some warnings go unheard." },
    background: "dark",
    backgroundImage: "img/apartment.webp"
  },
  final_delete: {
    id: "final_delete",
    type: "ending",
    text: [
      "She deletes the message.",
      "Sienna sits up slowly.",
      "Her hands shake — not from drugs. From understanding.",
      "The apocalypse was never outside. It was inside her.",
      "Inside a world where pressure, loneliness, and stress push people toward escape.",
      "Today, she will talk to someone.",
      "Today, she will ask for help.",
      "Today, the world does not end.",
      "The dream was a warning.",
      "And she chooses not to become one of them."
    ],
    background: "dawn",
    backgroundImage: "img/dawn.webp"
  }
};

const FIRST_SCENE = "intro";
const STORAGE_KEY = "city-never-slept-save";

// ===== GAME STATE =====
let gameState = loadGame();
let textIndex = 0;
let showChoices = false;
let isTransitioning = false;
let autoTimer = null;

function loadGame() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { currentSceneId: FIRST_SCENE, choices: {}, history: [] };
}

function saveGame() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}