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

import doorImage from "../img/door.jpg";
import carImage from "../img/car.jpg";  
import roadImage from "../img/Road.jpg";

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
      image: doorImage,
      alt: "A door",
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
      image: roadImage,
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
      text:"text for ID 5 ",
    },
    {
      id: 6,
      text: "This night is so dark, you can hardly tell where you are running. You don't trust yourself to try and veer off the road, not when you can still hear that thing behind you. You're not sure how much longer you can keep running. A pair of headlights blind you as they come around a corner. ",
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
      text:"The car is approaching too fast, there is no way to safely stop it. It pains you greatly but you let it pass by. You're not sure how much longer you can keep running.",
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
      text:"text for ID 9 ",
    },
    {
      id:10,
      text:"text for ID 10 ",
      
    },
    {
      id:11,
      text:"You think better of leading that things towards more people, you don't want to be responsible for their deaths. You run towards the shed instead, hoping that there will be something inside to help. Luckily it is unlocked, the lights from the house illuminating the contents inside. ",
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
      
    },
    {
      id:13,
      text:"",
  
    },
    {
      id:14,
      text:"",
      
    },
    {
      id:15,
      text:"In the middle of the shed sits a riding lawnmower. You jump on top of it, trying to figure out how it starts. Luckily is start with the simple push of a button, the motor roaring to life. ",
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
    },
      
    {
      id:17,
      text:"Mayhem is already in the yard, but you aren't going to bother with him. You veer away from him and head for the road. You know you just have to wait for the sun to come up and with luck there is enough gas to last that long. It's not the smoothest ride along the gravel road, and you can see Mayhem following along behind you. When the first peek of the sun comes over the horizon you glance back to see Mayhem gone. You survived",
    },
    {
        id:18,
        text:"You can hear it coming, you don't think you would be able to stop it from entering the room. Desperate, you make a dash for the window and pry it open. You climb out of it and fall to the ground on the other side just as you hear the door being smashed open. When you stand you see Mayhem staring back at you from inside.",
        options: [
            {
              text: "Run into the woods",
              nextText: 20,
            },
            {
              text: "Climb a tree",
              nextText: 21,
            },
          
        ],
    },
    {
        id:19,
        text:"",
    },
    {
        id:20,
        text:"You spot a narrow path leading into the woods, you make a run for it not daring to look back. The path is uneven, branches scratch at your arms as you go.  You can't see in inch ahead of yourself in the dark. It's slow moving trying to feel your way through the trees, you're only hope is that is also slowing down what is following you. You realize that was a foolish thought when those burning eyes appear before you. You try and turn and run but you can see the gleam of eyes all around you like the whole forest came to watch you die. You don't stand a chance as Mayhem stalks towards you can smashes you into the side of a tree. ",
    },
    {
        id:21,
        text:"There is a large oak ahead and you run towards it. You grab at the lowest hanging branch and pull yourself up, your feet scrambling against the trunk of the tree. You don't stop there, grabbing the next branch and climbing ever higher.You don't stop.When you can't climb any higher you finally look back down, your heart beating wildly in your chest. Mayhem seems to smile up at you as flames ingulf the bottom of the tree. There is nowhere for you to run. You watch in dismay as the flames creep higher, the smoke already starting to burn your lungs. ",
    }

  ];
  
  export default texts;