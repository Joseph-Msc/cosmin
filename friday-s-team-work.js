document.getElementsByTagName('title')[0].innerText = 'Friday\'s Team Work';

// consol log the first name of all the odd elements of the array.

const listOfFriends = getListOfFriends();

listOfFriends.forEach(
    (obj, index) => {
        if (index % 2) {
            console.log(obj.firstName);
        }
    }
);

listOfFriends.forEach(
    (obj, index) => {
        if (index % 2 !== 0) {
            console.log(obj.firstName);
        } 
    }
);

function getListOfFriends() {
    return [{
        firstName: "Sam",
        lastName: "Goldsmith",
        hobbies: ["football", "reading", "drawing"],
        familyMembers: [{
            firstName: "Jack",
            lastName: "Goldsmith",
            hobbies: ["football", "guitar", "running"],
          },
          {
            firstName: "Will",
            lastName: "Goldsmith",
            hobbies: ["Gaming", "reading", "drawing"],
          },
          {
            firstName: "Ruth",
            lastName: "Goldsmith",
            hobbies: ["cooking", "art", "shopping"],
          },
        ]
      },
      {
        firstName: "Tim",
        lastName: "Banks",
        hobbies: ["football", "coding", "gaming"],
        familyMembers: [{
            firstName: "Paul",
            lastName: "Banks",
            hobbies: ["football", "Chess", "dogs"],
          },
          {
            firstName: "Lisa",
            lastName: "Banks",
            hobbies: ["cooking", "yoga", "dogs"],
          },
        ]
      },
      {
        firstName: "Zach",
        lastName: "Lau",
        hobbies: ["football", "basketball", "gaming"],
        familyMembers: [{
            firstName: "Zoe",
            lastName: "Lau",
            hobbies: ["swimming", "netball", "art"],
          },
          {
            firstName: "Jasper",
            lastName: "Lau",
            hobbies: ["football", "swimming", "gaming"],
          },
          {
            firstName: "Milo",
            lastName: "Lau",
            hobbies: ["karate", "judo", "taekwondo"],
          },
        ]
      },
      {
        firstName: "Henry",
        lastName: "Xu",
        hobbies: ["football", "gaming", "swimming"],
        familyMembers: [{
            firstName: "Bob",
            lastName: "Xu",
            hobbies: ["football", "maths", "music"],
          },
          {
            firstName: "Jing",
            lastName: "Xu",
            hobbies: ["cooking", "cleaning", "shopping"],
          },
        ]
      },
      {
        firstName: "Alex",
        lastName: "Kelly",
        hobbies: ["football", "basketball", "gaming"],
        familyMembers: [{
            firstName: "Derea",
            lastName: "Kelly",
            hobbies: ["cooking", "music", "dancing"],
          },
          {
            firstName: "Simon",
            lastName: "Kelly",
            hobbies: ["football", "cooking", "driving"],
          },
        ]
      },
      {
        firstName: "Ciaran",
        lastName: "Mckennel",
        hobbies: ["football", "gaming", "drawing"],
        familyMembers: [{
            firstName: "Lucy",
            lastName: "Mckennel",
            hobbies: ["drawing", "writing", "netball"],
          },
          {
            firstName: "Dave",
            lastName: "Mckennel",
            hobbies: ["dancing", "driving", "basketball"],
          },
          {
            firstName: "Denise",
            lastName: "Mckennel",
            hobbies: ["dancing", "yoga", "dog"],
          },
        ]
      },
      {
        firstName: "Sebastian",
        lastName: "Berry",
        hobbies: ["football", "running", "swimming"],
        familyMembers: [{
            firstName: "Harry",
            lastName: "Berry",
            hobbies: ["football", "reading", "cooking"],
          },
          {
            firstName: "Cathy",
            lastName: "Berry",
            hobbies: ["shopping", "cooking", "yoga"],
          },
        ]
      },
      {
        firstName: "Will",
        lastName: "Flowers",
        hobbies: ["football", "reading", "drawing"],
        familyMembers: [{
            firstName: "Danny",
            lastName: "Flowers",
            hobbies: ["football", "reading", "drawing"],
          },
          {
            firstName: "Lucy",
            lastName: "Flowers",
            hobbies: ["gardening", "painting", "yoga"],
          },
        ]
      },
      {
        firstName: "Ethan",
        lastName: "Lee",
        hobbies: ["gaming", "tennis", "magic"],
        familyMembers: [{
            firstName: "Cara",
            lastName: "Lee",
            hobbies: ["horse riding", "boxing", "knitting"],
          },
          {
            firstName: "Marie",
            lastName: "Lee",
            hobbies: ["singing", "swimming", "drawing"],
          },
          {
            firstName: "James",
            lastName: "Lee",
            hobbies: ["Skydaiving", "singing", "gaming"],
          },
        ]
      },
      {
        firstName: "Rory",
        lastName: "Smith",
        hobbies: ["football", "running", "music"],
        familyMembers: [{
            firstName: "Mary",
            lastName: "Smith",
            hobbies: ["singing", "drawing", "coding"],
          },
          {
            firstName: "Jamey",
            lastName: "Smith",
            hobbies: ["football", "reading", "drawing"],
          },
        ]
      },
      {
        firstName: "Kush",
        lastName: "Gold",
        hobbies: ["football", "writing", "running"],
        familyMembers: [{
            firstName: "Minjay",
            lastName: "Gold",
            hobbies: ["walking", "dt", "swimming"],
          },
          {
            firstName: "Deena",
            lastName: "Gold",
            hobbies: ["singing", "showering", "coding"],
          },
          {
            firstName: "Dave",
            lastName: "Gold",
            hobbies: ["cooking", "writing", "reading"],
          },
        ]
      },
      {
        firstName: "Jack",
        lastName: "Goith",
        hobbies: ["golf", "chess", "karate"],
        familyMembers: [{
            firstName: "Ava",
            lastName: "Goith",
            hobbies: ["golf", "chess", "badminton"],
          },
          {
            firstName: "Daniel",
            lastName: "Goith",
            hobbies: ["skydiving", "gaming", "cooking"],
          },
        ]
      },
      {
        firstName: "harry",
        lastName: "patel",
        hobbies: ["football", "gaming", "memes"],
        familyMembers: [{
            firstName: "dipesh",
            lastName: "patel",
            hobbies: ["football", "surfing", "dancing"],
          },
          {
            firstName: "daniel",
            lastName: "patel",
            hobbies: ["football", "reading", "drawing"],
          },
          {
            firstName: "samantha",
            lastName: "patel",
            hobbies: ["surfing", "running", "writing"],
          },
        ]
      },
      {
        firstName: "Charlie",
        lastName: "Humphries",
        hobbies: ["football", "bicycle", "reading"],
        familyMembers: [{
            firstName: "Amber",
            lastName: "Humphries",
            hobbies: ["football", "reading", "gaming"],
          },
          {
            firstName: "Elsa",
            lastName: "Humphries",
            hobbies: ["shopping", "reading", "drawing"],
          },
          {
            firstName: "Will",
            lastName: "Humphries",
            hobbies: ["football", "reading", "cooking"],
          },
        ]
      },
      {
        firstName: "Ben",
        lastName: "Green",
        hobbies: ["football", "running", "rugby"],
        familyMembers: [{
            firstName: "Ron",
            lastName: "Green",
            hobbies: ["geneology", "rugby", "drawing"],
          },
          {
            firstName: "Holly",
            lastName: "Green",
            hobbies: ["rugby", "reading", "baking"],
          },
        ]
      },
      {
        firstName: "Paul",
        lastName: "Blake",
        hobbies: ["football", "gaming", "blogging"],
        familyMembers: [{
            firstName: "James",
            lastName: "Blake",
            hobbies: ["football", "yoga", "gaming"],
          },
          {
            firstName: "Audie",
            lastName: "Blake",
            hobbies: ["Cooking", "shopping", "piano"],
          },
        ]
      },
      {
        firstName: "Millie",
        lastName: "James",
        hobbies: ["Cooking", "music", "swimming"],
        familyMembers: [{
            firstName: "Bridget",
            lastName: "James",
            hobbies: ["catering", "Refinishing Furnitureg", "drawing"],
          },
          {
            firstName: "Barry",
            lastName: "James",
            hobbies: ["Playing The Stock Market", "Public Speaking", "running"],
          },
          {
            firstName: "Linda",
            lastName: "James",
            hobbies: ["cooking", "baking", "dancing"],
          },
        ]
      },
      {
        firstName: "Sam",
        lastName: "lam",
        hobbies: ["football", "blogging", "music"],
        familyMembers: [{
            firstName: "Carrie",
            lastName: "lam",
            hobbies: ["shopping", "cooking", "art"],
          },
          {
            firstName: "David",
            lastName: "lam",
            hobbies: ["shopping", "scuplting", "cooking"],
          },
        ]
      }, {
        firstName: "Perry",
        lastName: "evens",
        hobbies: ["walking", "coding", "dogs"],
        familyMembers: [{
            firstName: "Shela",
            lastName: "evens",
            hobbies: ["music", "cats", "drawing"],
          },
          {
            firstName: "Mandy",
            lastName: "evens",
            hobbies: ["shopping", "surfing", "singing"],
          },
          {
            firstName: "Albert",
            lastName: "evens",
            hobbies: ["naps", "comics", "drawing"],
          },
        ]
      },
      {
        firstName: "Elyse",
        lastName: "rong",
        hobbies: ["dancing", "reading", "singing"],
        familyMembers: [{
            firstName: "Lillian",
            lastName: "rong",
            hobbies: ["shopping", "reading", "music"],
          },
          {
            firstName: "Jullian",
            lastName: "rong",
            hobbies: ["dogs", "tv", "cooking"],
          },
        ]
      },
    ]
  }