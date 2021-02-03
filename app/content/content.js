/*
  TODO: Add template
  {
    url: '',
    date: '',
    time: '',
    name: '',
    guests: '',
    location: '',
    address: ''
  }
*/
const readings = [];

const books = [
  {
    urls: [
      {
        text: 'Graywolf',
        url: 'https://www.graywolfpress.org/books/pilgrim-bell'
      },
      {
        text: 'IndieBound',
        url: 'https://www.indiebound.org/book/9781644450598'
      },
      {
        text: 'Elliott Bay',
        url: 'https://www.elliottbaybook.com/book/9781644450598'
      },
      {
        text: 'Amazon',
        url: 'https://www.amazon.com/Pilgrim-Bell-Poems-Kaveh-Akbar/dp/1644450593/ref=sr_1_2?dchild=1&keywords=kaveh+akbar&qid=1611949324&sr=8-2'
      }
    ],
    preorder: true,
    type: 'BOOK',
    title: 'Pilgrim Bell',
    img: 'pilgrim-bell',
    quotes: [
      {
        quote: 'Akbar writes like someone who has chosen to dig right into what we are as if to die from it, but then does not die and brings us the fullness of what that could look and sound like. We need <em>Pilgrim Bell</em>. We need Kaveh Akbar.',
        speaker: 'Tommy Orange',
        publication: ''
      },
      {
        quote: 'Kaveh Akbar is truly a great writer, and his new collection <em>Pilgrim Bell</em> is a marvel... <em>Pilgrim Bell</em> is destined to become a classic, another blazing torch added to the eternal flames.',
        speaker: 'Mary Karr',
        publication: ''
      }
    ]
  },
  {
    urls: [
      {
        text: 'Alice James Books',
        url: 'https://www.alicejamesbooks.org/bookstore/calling-a-wolf-a-wolf#:~:text=Kaveh%20Akbar\'s%20poems%20appear,Alcoholic%2C%20published%20by%20Sibling%20Rivalry'
      },
      {
        text: 'IndieBound',
        url: 'https://www.indiebound.org/book/9781938584671'
      },
      {
        text: 'Elliott Bay',
        url: 'https://www.elliottbaybook.com/book/9781938584671'
      },
      {
        text: 'Amazon',
        url: 'https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678/ref=sr_1_3?dchild=1&qid=1611949395&refinements=p_27%3AKaveh+Akbar&s=books&sr=1-3&text=Kaveh+Akbar'
      }
    ],
    title: 'Calling A Wolf A Wolf',
    type: 'BOOK',
    img: 'calling-a-wolf-a-wolf',
    quotes: [
      {
        quote: 'A breathtaking addition to the canon of addiction literature.',
        speaker: 'starred review',
        publication: 'Publishers Weekly'
      },
      {
        quote:
          'Akbar proves what books can do in his exceptional debut, which brings us along on his struggle with addiction, a dangerous comfort and soul-eating monster he addresses boldly.',
        speaker: 'starred review',
        publication: 'Library Journal'
      },
      {
        quote:
          'Akbar has what every poet needs: the power to make, from emotions that others have felt, memorable language that nobody has assembled before.',
        speaker: 'Steph Burt',
        publication: 'The Yale Review'
      }
    ]
  },
  {
    urls: [
      {
        text: 'Sibling Rivalry Press',
        url: 'https://siblingrivalrypress.bigcartel.com/product/portrait-of-the-alcoholic-by-kaveh-akbar'
      },
      {
        text: 'Amazon',
        url: 'https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275/ref=sr_1_1?dchild=1&keywords=portrait+of+the+alcoholic&qid=1611949598&sr=8-1'
      }
    ],
    title: 'Portrait of the Alcoholic',
    img: 'portait-of-the-alcoholic',
    type: 'CHAPBOOK',
    quotes: [
      {
        quote:
          "Kaveh Akbar has written one of the best books of poetry I've ever read.",
        speaker: 'Patricia Smith',
        publication: ''
      },
      {
        quote:
          "How does one oscillate between passion and danger? Creative thirst and the thirst that kills? The need to possess by naming and the desire to let what is wild be wild and nameless? Akbar makes no apologies for hunger in this chapbook.",
        speaker: '',
        publication: 'Los Angeles Review'
      }
    ]
  }
];

const words = {
  online: [
    {
      title: 'Reading Farrokhzad in a Pandemic',
      url: 'https://lithub.com/reading-farrokhzad-in-a-pandemic/',
      publication: 'Lit Hub'
    },
    {
      title: 'The Palace',
      url: 'https://www.newyorker.com/magazine/poems/kaveh-akbar-the-palace',
      publication: 'The New Yorker'
    },
    {
      title: 'Seven Poems',
      url:
        'https://www.poetryfoundation.org/poems-and-poets/poets/detail/kaveh-akbar#about',
      publication: 'Poetry'
    },
    {
      title: 'What Use is Knowing Anything if No One is Around',
      url:
        'http://www.newyorker.com/magazine/2017/06/05/what-use-is-knowing-anything-if-no-one-is-around',
      publication: 'The New Yorker'
    },
    {
      title: 'Mothers I Once Was',
      url:
        'https://www.theparisreview.org/poetry/7380/mothers-i-once-was-kaveh-akbar',
      publication: 'The Paris Review'
    },
    {
      title: 'Six Poems',
      url: 'https://www.poets.org/poetsorg/poems/445566',
      publication: 'Poets.org'
    },
    {
      title: 'Six Poems',
      url: 'http://www.vqronline.org/people/kaveh-akbar',
      publication: 'Virginia Quarterly Review'
    },
    {
      title: 'Being in This World Makes Me Feel Like a Time Traveler',
      url:
        'https://www.nytimes.com/2017/10/20/magazine/poem-being-in-this-world-makes-me-feel-like-a-time-traveler.html',
      publication: 'The New York Times'
    },
    {
      title: 'Do You Speak Persian?',
      url:
        'https://www.splitthisrock.org/poetry-database/poem/do-you-speak-persian',
      publication: 'Split This Rock'
    },
    {
      title: 'Pilgrim Bell',
      url: 'https://www.thenation.com/article/pilgrim-bell/',
      publication: 'The Nation'
    },
    {
      title: 'Orchids Are Sprouting from the Floorboards',
      url: 'http://thejournalmag.org/archives/11342',
      publication: 'The Journal'
    },
    {
      title: 'Heritage',
      url:
        'https://www.poetrysociety.org/psa/awards/annual/winners/2016/award_9/',
      publication: 'Poetry Society of America'
    }
  ],
  reviews: [
    {
      title: 'Calling A Wolf A Wolf',
      reviews: [
        {
          url:
            'https://apps.npr.org/best-books-2017/#/book/calling-a-wolf-a-wolf',
          title: 'reviewed by NPR (2017 Best Books)',
          publication: ''
        },
        {
          url:
            'https://www.theatlantic.com/entertainment/archive/2017/12/the-best-books-we-missed-in-2017/549218/',
          title: 'reviewed in ',
          publication: 'The Atlantic'
        },
        {
          url:
            'https://www.kenyonreview.org/reviews/calling-a-wolf-a-wolf-by-kaveh-akbar-738439/',
          title: 'reviewed in ',
          publication: 'The Kenyon Review'
        },
        {
          url:
            'http://bostonreview.net/poetry/claire-schwartz-delightful-homelands',
          title: 'reviewed in ',
          publication: 'The Boston Review'
        },
        {
          url: 'https://www.publishersweekly.com/978-1-938584-67-1',
          title: 'starred review in ',
          publication: 'Publishers Weekly'
        },
        {
          url:
            'http://lj.libraryjournal.com/bestbooks2017/poetry_literature.php',
          title: 'starred review in ',
          publication: 'Library Journal'
        },
        {
          url:
            'https://yalereview.yale.edu/sites/default/files/files/Burt%2CStephen_PoetryinReview_jul2017.pdf',
          title: 'reviewed in ',
          publication: 'The Yale Review'
        },
        {
          url:
            'https://pionline.wordpress.com/2017/06/23/working-with-eggshells-a-review-of-kaveh-akbars-calling-a-wolf-a-wolf/',
          title: 'reviewed in ',
          publication: 'Poetry International'
        },
        {
          url:
            'http://www.vqronline.org/poetry-criticism/2017/07/toward-new-masculinity',
          title: 'reviewed in ',
          publication: 'Virginia Quarterly Review'
        }
      ]
    },
    {
      title: 'Portrait of the Alcoholic',
      reviews: [
        {
          url:
            'http://blog.bestamericanpoetry.com/the_best_american_poetry/2017/03/alchemical-the-body-becomes-a-mound-of-jewels-an-ancient-hunger-dante-di-stefano-reviews-kaveh-akbar.html',
          title: 'reviewed in ',
          publication: 'Best American Poetry'
        },
        {
          url:
            'http://blog.pshares.org/index.php/thirst-trap-desperation-in-kaveh-akbars-portrait-of-the-alcoholic/',
          title: 'reviewed in ',
          publication: 'Ploughshares'
        }
      ]
    }
  ],
  conversations: [
    {
      url: 'https://www.pw.org/content/qa_akbar_edits_poetry_of_the_nation',
      with: 'Poets & Writers'
    },
    {
      url:
        'https://www.npr.org/2018/01/14/577712874/kaveh-akbar-is-poetrys-biggest-cheerleader',
      with: 'NPR'
    },
    {
      url: 'https://lithub.com/kaveh-akbar-bewilderment-is-at-the-core-of-every-great-poem/',
      with: 'Lit Hub'
    }
  ],
  press: [
    {
      url: 'https://en.wikipedia.org/wiki/Kaveh_Akbar',
      title: 'Kaveh Akbar Wikipedia Page',
      publication: ''
    },
    {
      url: 'http://www.pbs.org/newshour/art/walt-whitman-poetic-descendants/',
      title:
        'In ‘Whitman’s Descendents,’ photographing some of America’s greatest living poets',
      publication: 'PBS NewsHour'
    },
    {
      url: 'https://www.poetryfoundation.org/foundation/prizes_fellowship',
      title: 'Ruth Lilly and Dorothy Sargent Rosenberg Fellows, 2016',
      publication: 'Poetry Foundation'
    },
    {
      url: 'http://www.kenyonreview.org/2016/08/even-parts-go-missing-forever/',
      title: 'EVEN IF PARTS OF YOU GO MISSING FOREVER',
      publication: 'Kenyon Review'
    },
    {
      url:
        'http://www.kenyonreview.org/2016/08/orchids-transformative-power-longing/',
      title: 'Orchids We Have Been: On The Transformative Power of Longing',
      publication: 'Kenyon Review'
    },
    {
      url:
        'https://www.poetryfoundation.org/harriet/2016/02/prairie-schooner-interviews-kaveh-akbar-man-with-chutzpah/?woo',
      title: 'Prairie Schooner interviews Kaveh Akbar, Man With ‘Chutzpah’',
      publication: 'Poetry Foundation'
    },
    {
      url:
        'http://www.pbs.org/newshour/poetry/poet-remembers-the-man-who-fought-and-died-to-save-palmyra/',
      title: 'Poet remembers the man who fought—and died—to save Palmyra',
      publication: 'PBS NewsHour'
    },
    {
      url:
        'https://www.poetryfoundation.org/harriet/2016/01/kaveh-akbar-reads-palmyra-at-pbs-newshour/',
      title: "Kaveh Akbar Reads 'Palmyra' at PBS NewsHour",
      publication: 'Poetry Foundation'
    },
    {
      url:
        'http://www.thereviewreview.net/reviews/new-journal-dedicates-itself-interviews-poets',
      title: 'New Journal Devotes Itself to Interviews with Poets',
      publication: 'The Review Review'
    },
    {
      url:
        'https://www.poetryfoundation.org/harriet/2015/07/go-ahead-and-speak-meaningfully-with-divedapper/',
      title: 'Go Ahead and Speak Meaningfully With Divedapper',
      publication: 'Poetry Foundation'
    },
    {
      url:
        'https://www.nytimes.com/2015/07/26/books/review/an-unfinished-library.html?_r=1',
      title: 'in',
      publication: 'The New York Times'
    },
    {
      url:
        'https://www.bostonglobe.com/metro/2015/05/15/franz-wright-waltham-pulitzer-prize-winning-poet-dies/kkYxHZXge3tsxS87EmDx4O/story.html',
      title: 'in',
      publication: 'The Boston Globe'
    },
    {
      url:
        'http://therumpus.net/2014/09/divedapper-focuses-on-poet-interviews/',
      title: 'Divedapper Focuses on Poet Interviews',
      publication: 'The Rumpus'
    },
    {
      url: 'https://www.pw.org/content/kaveh_akbar',
      title: 'Kaveh Akbar Listing',
      publication: 'Poets and Writers'
    }
  ]
};

export {
  readings,
  books,
  words
};
