// config
const config = {
  title: "Luximus' links",
  bio: [
    "Hiya, I'm Luximus! Feel free to call me Luxi.",
    'Check me out on other platforms!',
  ],
    background: {
      image: 'https://i.ibb.co/3yfm8cs/train.gif',
  },
  links: [
    {
      name: 'Discord',
      text: 'Luximus#2043',
    },
    {
      name: 'VRChat',
      url: 'https://vrchat.com/home/user/usr_d62468cf-a90b-4bc4-a4f9-c10133e35f2b',
      text: 'Luximus',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/profiles/76561198393226059',
      text: 'Luximus',
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/yxmq93tlmfomm2ir62cs0bq0u?si=6b5fbb8557c84fba',
      text: 'Luximus',
    },
    {
      name: 'Github',
      url: 'https://github.com/luximus-hunter',
      text: 'luximus-hunter',
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

  el.innerHTML = `
    <span class='name'>${link.name}</span>
    <span class='text'>${link.text}</span>
  `;

  linkList.appendChild(el);
});

// credit
if (!config.credit) {
  credit.style.display = 'none';
}
