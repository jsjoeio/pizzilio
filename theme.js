import theme from 'mdx-deck/themes'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Press Start 2P', 'cursive']
  }
});

export default {
  ...theme,
  font: `"Press Start 2P"`,
  colors: {
    text: '#FFF',
    background: '#EE324A',
    link: '#0ff',
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
