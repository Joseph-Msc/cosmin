const listOfFriends = getListOfFriends();
const containerEl = document.getElementById('container');

listOfFriends.forEach(
  (friendObj) => {
    const template = generateCardTemplate();

    const cardBodyEl = template.getElementsByClassName('card-body')[0];
  
    const cardTitleTemplate = generateCardTitleTemplate([friendObj.firstName, friendObj.lastName].join('   '));
    cardBodyEl.appendChild(cardTitleTemplate);

    if (friendObj.hobbies.length) {
      const hobbiesTitleEl = document.createElement('h5');
      const hobbiesTitleTextNode = document.createTextNode('Hobbies');  
     hobbiesTitleEl.classList.add('h-title');
     hobbiesTitleEl.appendChild(hobbiesTitleTextNode);
     cardBodyEl.appendChild(hobbiesTitleTextNode);
      const listOfHobbiesTemplate = generateHobbiesTemplate(friendObj.hobbies);
      cardBodyEl.appendChild(listOfHobbiesTemplate);
    }
  
  const familyMembersTitleEl = document.createElement('h5');
  familyMembersTitleEl.classList.add('fmb-title');
  const familyMembersTitleTextNode = document.createTextNode('Family Members');
  familyMembersTitleEl.appendChild(familyMembersTitleTextNode);

  friendObj.familyMembers.forEach(
      (familyMemberObj) => {
        const familyMembersTemplate = generateFamilyMembersTemplate(
            [
            familyMemberObj.firstName,
            familyMemberObj.lastName
            ].join('  ')
        );

        if (familyMemberObj.hobbies.length) {
          const familyMemberHobbiesTemplate = generateFamilyMembersHobbiesTemplate(familyMemberObj.hobbies);
          familyMembersTemplate.appendChild(familyMemberHobbiesTemplate);
        }

        cardBodyEl.appendChild(familyMembersTemplate);
        
        containerEl.append(template)
      }
    );
  }
);

function generateCardTemplate() {
  let template
  ['card-body', 'card', 'col-4'].forEach(
    (className) => {
      const divEl = document.createElement('div');
      divEl.classList.add(className);
      if (template) {
        divEl.appendChild(template);
      }
      template = divEl;
    }
  );
  return template
}

function generateCardTitleTemplate(firstLastName) {
  const cardTitleEl = document.createElement('h5');
  cardTitleEl.classList.add('card-title')
  const textNode = document.createTextNode(firstLastName);
  cardTitleEl.appendChild(textNode);

  return cardTitleEl;
}

function generateHobbiesTemplate(listOfHobbies) {
  const divEl = document.createElement('div');
  listOfHobbies.forEach(
      (hobby) => {
          const spanEl = document.createElement('span');
          ['badge', 'badge-primary'].forEach(
              (className) => {
                  spanEl.classList.add(className);
              }
          );
          const textNode = document.createTextNode(hobby);
          spanEl.appendChild(textNode);

          divEl.appendChild(spanEl);
      }
  );
   return divEl;
}

function generateFamilyMembersTemplate(firstLastName) {
  const divEl = document.createElement('div');
  const h5El = document.createElement('h5');
  const textNode = document.createTextNode(firstLastName);
  h5El.appendChild(textNode)
  divEl.appendChild(h5El)

  return divEl;
}

function generateFamilyMembersHobbiesTemplate(hobbies) {
  const ulEl = document.createElement('ul');

  hobbies.forEach(
    (hobby) => {
      const liEl = document.createElement('li');
      const textNode = document.createTextNode(hobby)
      liEl.appendChild(textNode);
      ulEl.appendChild(liEl);
    }
  );

  return ulEl;
}

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
