// config
const config = {
  title: "valzzu's links",
  bio: [
    "Hiya, I'm valzzu! Feel free to call me whats easier for you.",
    'Check me out on other platforms!',
  ],
  background: {
    image: 'https://i.ibb.co/3yfm8cs/train.gif',
  },
  links: [
    {
      name: 'Discord',
      text: 'valzzu#4823',
    },
    {
      name: 'VRChat',
      url: 'https://vrchat.com/home/user/usr_5f4b5d18-d018-4cbe-8797-37912f821931',
      text: 'valzzu',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/valzzu_',
      text: 'valzzu',
    },
    {
      name: 'Epic Games',
      text: 'valzzu_gamer',
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/8hybxwciyn4yu4f24l6odwd9x',
      text: 'valzzu',
    },
    {
      name: 'Github',
      url: 'https://github.com/valzzu',
      text: 'valzzu',
    },
  ],
  credit: true,
};

// DOM elements
const container = document.getElementById('container');
const linkContainer = document.getElementById('linkContainer');
const linkHeader = document.getElementById('linkHeader');
const linkBio = document.getElementById('linkBio');
const linkList = document.getElementById('linkList');
const credit = document.getElementById('credit');

// title
document.title = config.title;
linkHeader.innerHTML = config.title;

// background
const backgroundStyle = document.createElement('style');

if (config.background.color) {
  backgroundStyle.innerHTML = `
    #container {
      background-color: ${config.background.color};
    }
  `;
} else if (config.background.image) {
  backgroundStyle.innerHTML = `
    #container {
      background-image: url('${config.background.image}');
    }
  `;
} else if (config.background.gradient) {
  backgroundStyle.innerHTML = `
    #container {
      background: linear-gradient(${config.background.gradient.angle}deg, ${config.background.gradient.from} 0%, ${config.background.gradient.to} 100%);
    }
  `;
}

document.head.appendChild(backgroundStyle);

// bio
config.bio.forEach((line) => {
  const el = document.createElement('p');
  el.innerHTML = line;

  linkBio.appendChild(el);
});

// links
config.links.forEach((link) => {
  let el = document.createElement('div');

  if (link.url) {
    el = document.createElement('a');
    el.classList.add('clickable');
    el.href = link.url;
  }

  el.classList.add('link');

  el.innerHTML = `<span class='name'>${link.name}</span>`;

  if (link.url) {
    el.innerHTML +=
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM502.6 9.367C496.8 3.578 488.8 0 480 0h-160c-17.67 0-31.1 14.32-31.1 31.1c0 17.67 14.32 31.1 31.99 31.1h82.75L178.7 290.7c-12.5 12.5-12.5 32.76 0 45.26C191.2 348.5 211.5 348.5 224 336l224-226.8V192c0 17.67 14.33 31.1 31.1 31.1S512 209.7 512 192V31.1C512 23.16 508.4 15.16 502.6 9.367z"/></svg>';
  }

  el.innerHTML += `<span class='text'>${link.text}</span>`;

  linkList.appendChild(el);
});

// credit
if (!config.credit) {
  credit.style.display = 'none';
}
