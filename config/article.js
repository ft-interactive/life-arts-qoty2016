export default () => ({ // eslint-disable-line

  // link file UUID
  id: '47075188-e590-11e7-97e2-916d4fbac0da',

  // canonical URL of the published page
  // https://ig.ft.com/sites/life-arts-qoty2016 get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/quiz/life-arts-qoty-2017',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-12-22T12:00:00Z'),

  headline: 'FT quiz of the year 2017',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'A year’s supply of Laurent-Perrier Cuvée Rosé awaits the winner of this cultural challenge',

  topic: {
    name: 'Life & Arts',
    url: 'https://www.ft.com/life-arts',
  },

  // relatedArticle: {
  //   text: 'Related article',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: 'FT quiz of the year 2017',
    description: 'Montage of gifts',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A41ab56c4-e592-11e7-a685-5634466a6915?source=ig&width=700',
    width: 700, // ensure correct width
    height: 394, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Ludovic Hunter-Tilney', url: 'https://www.ft.com/ludovic-hunter-tilney' },
  ],

  // Appears in the HTML <title>
  title: 'FT quiz of the year 2017',

  // meta data
  description: 'A year’s supply of Laurent-Perrier Cuvée Rosé awaits the winner of this cultural challenge',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
