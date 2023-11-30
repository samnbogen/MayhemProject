import doorImage from "../img/door.jpg";
import carImage from "../img/car.jpg";  
import roadImage from "../img/road.jpg";
import lawnmowerImage from "../img/lawnmower.jpg";
import bangOnDoorImage from "../img/bangOnDoor.jpg";
import runToShedImage from "../img/shed.jpg";
import cabinImage from "../img/cabin.jpg";
import bedroomDoorImage from "../img/bedroomDoor.jpg";
import chainsawImage from "../img/chainsaw.jpg";
import climbOutWindowImage from "../img/climbOutWindow.jpg";
import hideInForestImage from "../img/hideInForest.jpg";
import keepRunningImage from "../img/keepRunning.jpg";
import letItPassImage from "../img/letItPass.jpg";
import stopCarImage from "../img/stopCar.jpg";

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
      image: bedroomDoorImage,
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
      text:"Your friends car is parked just ahead, you make a dash for it knowing that it's unlocked. You pull the handle and slide into the drivers seat, locking all the door behind you. You're not sure what your next move is though, the keys are still in your dead friend's pocket. You watch as Mayhem makes it's way over to the car, stopping just outside your window. You have a great view as it's plunges through the glass, shards flying everywhere as it grabs hold of your neck. You aren't even able to get enough air to be able to scream.",
      image: carImage,
    },
    {
      id: 6,
      text: "This night is so dark, you can hardly tell where you are running. You don't trust yourself to try and veer off the road, not when you can still hear that thing behind you. You're not sure how much longer you can keep running. A pair of headlights blind you as they come around a corner. ",
      image: roadImage,
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
      image: cabinImage,
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
      image: letItPassImage,
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
      image: stopCarImage,
      text:"A car! Hope courses through you at the prospect of getting a ride away from this awful night. You don't have much time to stop them, you jump out in front of the car and start waving your arms. There isn't enough time for the car to come to a stop, it swerves to try and avoid you but there isn't enough time. The impact send your flying into the ditch, your entire side burns and you're pretty sure a few of your ribs are broken. It hurts to breath. The car must of stopped to try and find you, judging by their screams Mayhem found them first. You can't even stand to make a run for it, you wait in agony for the screams to stop. It's almost a mercy when Mayhem finally makes it's way over to you and places it's boot on your throat.  ",
    },
    {
      id:10,
      image: bangOnDoorImage,
      text:"You hammer your fist against the door and even attempt to open it yourself but find it locked. Eventually you hear the occupants of the cabin shout through the door trying to get you to identify yourself. You beg them to open the door, but they hesitate and that gives Mayhem just enough time to get to you. There is no time to run, Mayhem run's a blade clean through you. You cough up a mouthful of blood just as the door swings open. You try to tell them to run but all that comes out is more blood.",
      
    },
    {
      id:11,
      text:"You think better of leading that things towards more people, you don't want to be responsible for their deaths. You run towards the shed instead, hoping that there will be something inside to help. Luckily it is unlocked, the lights from the house illuminating the contents inside. ",
      image: runToShedImage,
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
      text:"You hope that the passing car serves as a distraction for Mayhem and you jump into the forest. Branches scratch across your arms and face, you can't see in inch ahead of yourself in the dark. It's slow moving trying to feel your way through the trees, you're only hope is that is also slowing down what is following you. You realize that was a foolish thought when those burning eyes appear before you. You try and turn and run but you can see the gleam of eyes all around you like the whole forest came to watch you die. You don't stand a chance as Mayhem stalks towards you can smashes you into the side of a tree. ",
      image: hideInForestImage,
    },
    {
      id:13,
      text:"Your lungs burn and you can feel your legs cramping up. There isn't anything behind you when you risk a quick glance behind. You need a break, so you slow to a walk and take a better look. Still nothing there. You're not as out of shape as you thought! That relief is quickly squashed and you find Mayhem has managed to get ahead of you. It must have cut through the trees. You can hear the delight in it's laughter as he knocks you to the ground. That laughter rings through your head as his hands tighten around your throat.",
      image: keepRunningImage,
    },
    {
      id:14,
      text:"On the shelf you spot a chainsaw, and it makes you wonder just how mortal Mayhem is. You want to find out. You pick up the chainsaw, recalling how your father always started his. You place it on the ground, get a good grip on it and pull sharply on the starting cord. You hear it attempt to start a few times before it comes to life. Perfect timing because when you turn around you see Mayhem in the yard stalking towards you. You wish you felt more confident but you don't have time to second guess yourself so you charge forward and jam the tip of the blade into it's chest. You can hear the blade ripping it apart, and you're able to push forward digging it in deeper inside of it.But there is no blood. There is only fire. The flames are uncontrolled, licking at your hands. You're to scared to let go but it so hot. Your sleeves catch on fire and you let go of the chainsaw so you can run but Mayhem already has a hold on you. There is a laugh as he pull you into himself. You scream from the heat. ",
      image: chainsawImage,
    },
    {
      id:15,
      text:"In the middle of the shed sits a riding lawnmower. You jump on top of it, trying to figure out how it starts. Luckily is start with the simple push of a button, the motor roaring to life. ",
      image: lawnmowerImage,
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
      text:"Mayhem is already in the yard, walking towards the shed. You want revenge for your friend, you rev the engine and hit the gas. The speed on the lawnmower in unimpressive, when you hit Mayhem with it he hardly budges. He grabs you off of the seat, and is able to flip the lawnmower over with a single kick. You barely have time to scream as he pushes your face into the blades. ",
    },
      
    {
      id:17,
      text:"Mayhem is already in the yard, but you aren't going to bother with him. You veer away from him and head for the road. You know you just have to wait for the sun to come up and with luck there is enough gas to last that long. It's not the smoothest ride along the gravel road, and you can see Mayhem following along behind you. When the first peek of the sun comes over the horizon you glance back to see Mayhem gone. You survived",
    },
    {
        id:18,
        text:"You can hear it coming, you don't think you would be able to stop it from entering the room. Desperate, you make a dash for the window and pry it open. You climb out of it and fall to the ground on the other side just as you hear the door being smashed open. When you stand you see Mayhem staring back at you from inside.",
        image: climbOutWindowImage,
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
        text:"There is a pounding on the door, the force of it reverberating through your whole body and making your teeth clatter. It surprise that the door hinges hold up under the onslaught. Then they stop. You're to scared to breathe, never mind move. Which is a shame, because the next thing you know there is a sound of splintering wood and your stomach is wet. You look down to see the tip of a blade protruding out of you.",
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