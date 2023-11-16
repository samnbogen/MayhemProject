{/* example on how we can do it with a 

const texts = [
  {
    id: 1,
    text: `You are Soai, one of the poets. It wasn’t your choice to become one, it was a necessity.

    The tower where you live is called the Bridge. It is divided into five levels. You are on the second one. One level below you won’t live long, one level above is a border between higher and lower society. Each level has several tiers with resident areas, work stations, stores, food places, etc.
    
    You’ve managed to stay on the current level for a while and haven’t been able to move any higher. Your performance during the Writers Fights is mediocre, but you don’t lose hope to get good.`,
    image: mainCharacterImage,
    alt: "A guy looking at the futuristic skyscrapers",
    options: [
      {
        text: `Begin (dark and realistic)`,
        nextText: 2,
      },
      {
        text: `Begin (unicornish spirit)`,
        nextText: 55,
      },
    ],
  },
  {
    id: 2,
    text: `Today is just another day of your second-level life in the Bridge. You woke up in your life-capsule, a tiny container where you live. By the press of a button your bed transformed into a small table with a chair. You sat at it, ate your microscopic portion of the daily ration, then tapped your temples to turn on the VR-implant and logged into zerOne.
    
    Once being loaded into the virtual Bridge, you left your capsule and looked around, thinking where to go. In the evening you take part in the local Writers Fight.`,
    image: apartmentImage,
    alt: "Futuristic apartment",
    options: [
      {
        text: `Go to the Mnemonic bar nearby, your favorite place to hang out.`,
        nextText: 3,
      },
      {
        text: `Visit the Dixie's shop that sells upgrades for the virtual characters.`,
        nextText: 34,
      },
    ],
  }, 

import mainCharacterImage from "../assets/mainCharacterImage.jpg";
import apartmentImage from "../assets/apartmentImage.jpg";
import unicornImage from "../assets/unicornImage.jpg";

export default texts;
*/}

import DeathScreen from "../components/DeathMayhemScreen";

const texts = [
  {
    id: 1,
    text: "Your whole body screams at you to move.",
    options: [
      {
        text: "Run to the door leading outside",
        nextText: 2,
      },
      {
        text: "Stay Run to the bedroom",
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: "Your feel unsteady as you twist around and make a run for the front door. There is no time to grab anything, you fling the door open and start running.",
    options: [
      {
        text: "Run towards the road",
        nextText: 4,
      },
      {
        text: "Run towards the car",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text:"It takes all of your will to make your legs move, but you make inside the bedroom. You slam the door shut behind you can place all your weight against it.",
    options: [
      {
        text: "Climb out the window",
        nextText: 18,
      },
      {
        text: "Continue to block the door",
        nextText: 19,
      },
    ],
  },
  {
    id: 4,
    text: "Your feet slip along the gravel. The last time you ran for anything was to grab the last piece of pie before your uncle could get it. Your lungs burn and you wish you could already take a break but you can hear that thing behind you. You can't see anything in the dark and you have to rely on you memory to remember how the road turns. ",
    options: [
      {
        text: "Keep running along the road",
        nextText: 6,
      },
      {
        text: "Run towards another cabin",
        nextText: 7,
      },
    ],
  },
  {
    id:5,
  },
  {
    id: 6,
    text: "",
    options: [
      {
        text: "Let it pass",
        nextText: 8,
      },
      {
        text: "Try to stop the car",
        nextText: 9,
      },
    ],
  },
  {
    id:7,
    text: "You see a light flicker through the trees to your left, you recall that there was another cabin when you drove up. You can barely see, but you can just make out where the road makes a turn towards the property and you take it. The cabin comes fully into view, the lights inside illuminating it like a beacon of hope. There is a shed beside it.",
    options: [
      {
        text: "Bang on the door",
        nextText: 10,
      },
      {
        text: "Run to the shed",
        nextText: 11,
      },
    ],
  },
  {
    id:8,
    text:"",
    options: [
      {
        text: "Hide in the forest",
        nextText: 12,
      },
      {
        text: "Keep Running",
        nextText: 13,
      },
    ],
  },
  {
    id:9,
  },
  {
    id:10,
    text:"",
    options: [
      {
        text: "",
        nextText: "DeathScreen",
      },
      {
        text: "",
        nextText: "DeathScreen",
      },
    ],
  },
  {
    id:11,
    text:"",
    options: [
      {
        text: "Take the chainsaw",
        nextText: 14,
      },
      {
        text: "Get on the riding lawnmower",
        nextText: 15,
      },
    ],
  },
  {
    id:12,
    text:"",
    options: [
      {
        text: "",
        nextText: "",
      },
      {
        text: "",
        nextText: "",
      },
    ],
  },
  {
    id:13,

  },
  {
    id:14,
    text:"",
    options: [
      {
        text: "",
        nextText:"DeathScreen",
      },
      {
        text: "",
        nextText:"DeathScreen",
      },
    ],
  },
  {
    id:15,
    text:"",
    options: [
      {
        text: "Drive into Mayhem",
        nextText:16,
      },
      {
        text: "Drive it down the road",
        nextText:17,
      },
    ],
  },
  {
    id:16,
    text:"",
    options: [
      {
        text: "",
        nextText: "DeathScreen",
      },
      {
        text: "",
        nextText:"DeathScreen",
      },
    ],
  },
  {
    id:17,
    text:"",
    options: [
      {
        text: "",
        nextText: "",
      },
      {
        text: "",
        nextText: "",
      },
    ],
  },
];

export default texts;