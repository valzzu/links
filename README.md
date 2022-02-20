# Links

![open-source](https://img.shields.io/badge/open%20source-❤-FF0000)

_Link page that makes sharing your links easy._

## Usage

1. Fork this repository
2. Edit the config section in `scripts.js`
3. Publish however you wish

## Configuration

### Title

Here you can edit the title to display.

```js
title: "Luximus' links",
```

### Bio

Here you can add a discription about yourself. To make a new paragraph, add more sections.

```js
bio: [
  "Hiya, I'm Luximus! Feel free to call me Luxi.",
  'Check me out on other platforms!',
],
```

### Background

- `color`: A solid color for the background. Can be in HEX and RGB(A) format.
- `image`: Link to an external image. This can be of any type, including gifs.
- `gradient`: basic linear gradient.
  - `from`: Starting color.
  - `to`: Ending color.
  - `angle`: Angle in degrees for the gradient.

_Choose one of the options and delete or comment out the rest._

```js
background: {
  color: '#dddddd',
  image: 'https://i.ibb.co/3yfm8cs/train.gif',
  gradient: {
    from: '#8ec5fc',
    to: '#e0c3fc',
    angle: 45,
  },
},
```

### Links

You can add links to all your socials here!

- `name`: The title of the service/social website.
- `url`: _Optional._ A link to your social page.
- `text`: _Optional._ A text to display something like a username.

```js
links: [
  {
    name: 'Github',
    url: 'https://github.com/luximus-hunter',
    text: 'luximus-hunter',
  },
],
```

### Credit

You can set this to true or false. If you set it to true, it will add a footer with a link to this repository.

```js
credit: true,
```

## License

This project is licensed under the [MIT License](./LICENSE).
