const readings = [
  {
    url: '',
    date: 'JAN 26, 2018',
    time: '',
    name: 'The Poetry Center of Chicago',
    guests: '',
    location: '',
    address: 'Chicago, IL'
  },
  {
    url: '',
    date: 'FEB 1, 2018',
    time: '',
    name: 'Washington State U',
    guests: '',
    location: '',
    address: 'Pullman, WA'
  },
  {
    url: '',
    date: 'FEB 10, 2018',
    time: '',
    name: 'Florida State University',
    guests: '',
    location: '',
    address: 'Talahassee, FL'
  },
  {
    url: '',
    date: 'FEB 12, 2018',
    time: '',
    name: 'University of Alabama',
    guests: '',
    location: '',
    address: 'Tuscaloosa, AL'
  },
  {
    url: '',
    date: 'FEB 15, 2018',
    time: '',
    name: 'University of Southern Indiana',
    guests: '',
    location: '',
    address: 'Evansville, IN'
  },
  {
    url: '',
    date: 'FEB 20, 2018',
    time: '',
    name: 'University of St. Francis',
    guests: '',
    location: '',
    address: 'Fort Wayne, IN'
  },
  {
    url: '',
    date: 'FEB 24, 2018',
    time: '',
    name: 'Arizona State University',
    guests: '',
    location: '',
    address: 'Tempe, AZ'
  },
  {
    url: '',
    date: 'FEB 28, 2018',
    time: '',
    name: 'Kellogg Writers Series',
    guests: '',
    location: '',
    address: 'Indianpolis, IN'
  },
  {
    url: '',
    date: 'MAR 1, 2018',
    time: '',
    name: 'Malone University',
    guests: '',
    location: '',
    address: 'Canton, OH'
  },
  {
    url: '',
    date: 'MAR 12-18, 2018',
    time: '',
    name: 'London Shows',
    guests: '',
    location: '',
    address: 'London, UK'
  },
  {
    url: '',
    date: 'MAR 21, 2018',
    time: '',
    name: 'Brockport Writers Forum Reading Series',
    guests: '',
    location: '',
    address: 'Rochester, NY'
  },
  {
    url: '',
    date: 'MAR 22, 2018',
    time: '',
    name: 'NYU Lillian Vernon Reading Series Invitation',
    guests: '',
    location: '',
    address: 'New York, NY'
  },
  {
    url: '',
    date: 'MAR 23, 2018',
    time: '',
    name: 'Manhattan College',
    guests: '',
    location: '',
    address: 'Bronx, NY'
  },
  {
    url: '',
    date: 'APR 3, 2018',
    time: '',
    name: 'Wright State',
    guests: '',
    location: '',
    address: 'Fairborn, OH'
  },
  {
    url: '',
    date: 'APR 5, 2018',
    time: '',
    name: 'Pacific Lutheran University',
    guests: '',
    location: '',
    address: 'Tacoma, WA'
  },
  {
    url: '',
    date: 'APR 10, 2018',
    time: '',
    name: "Midewest Writer's Workshop",
    guests: '',
    location: '',
    address: 'Muncie, IN'
  },
  {
    url: '',
    date: 'APR 13, 2018',
    time: '',
    name: 'Lake Norman Charter High School',
    guests: '',
    location: '',
    address: 'Charlotte, NC'
  },
  {
    url: '',
    date: 'APR 17, 2018',
    time: '',
    name: 'Western Illinois University',
    guests: '',
    location: '',
    address: 'Macomb, IL'
  },
  {
    url: '',
    date: 'APR 19, 2018',
    time: '',
    name: 'Whitman College',
    guests: '',
    location: '',
    address: 'Walla Walla, WA'
  },
  {
    url: '',
    date: 'APR 21, 2018',
    time: '',
    name: 'Wider Than the Sky',
    guests: '',
    location: '',
    address: 'Los Angeles, CA'
  },
  {
    url: '',
    date: 'APR 22, 2018',
    time: '',
    name: 'LA Times Festival of Books',
    guests: '',
    location: '',
    address: 'Los Angeles, CA'
  },
  {
    url: '',
    date: 'APR 26, 2018',
    time: '',
    name: 'Fields Magazine',
    guests: '',
    location: '',
    address: 'Austin, TX'
  },
  {
    url: '',
    date: 'APR 27, 2018',
    time: '',
    name: 'NGC Bocas Lit Fest',
    guests: '',
    location: '',
    address: 'Port of Spain, Trinidad & Tobago'
  },
  {
    url: '',
    date: 'MAY 3, 2018',
    time: '',
    name: 'Lafayette College',
    guests: '',
    location: '',
    address: 'Easton, PA'
  },
  {
    url: '',
    date: 'MAY 5, 2018',
    time: '',
    name: 'Massachusettes Poetry Festival',
    guests: '',
    location: '',
    address: 'Boston, MA'
  },
  {
    url: '',
    date: 'MAY 12, 2018',
    time: '',
    name: 'Flyover Festival',
    guests: '',
    location: '',
    address: 'Columbus, OH'
  },
  {
    url: '',
    date: 'MAY 18-20, 2018',
    time: '',
    name: 'Greensboro Book Fair',
    guests: '',
    location: '',
    address: 'Greensboro, NC'
  },
  {
    url: '',
    date: 'MAY 22, 2018',
    time: '',
    name: 'Folger Shakespeare Library',
    guests: '',
    location: '',
    address: 'Washington, DC'
  },
  {
    url: '',
    date: 'JUN 16-20, 2018',
    time: '',
    name: 'Bucknell University',
    guests: '',
    location: '',
    address: 'Lewisburg, PA'
  }
];

const books = [
  {
    url: 'https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678',
    title: 'Calling A Wolf A Wolf',
    img: 'calling-a-wolf-a-wolf.jpg',
    quotes: [
      {
        quote: 'A breathtaking addition to the canon of addiction literature.',
        speaker: 'Starred Review',
        publication: 'Publishers Weekly'
      },
      {
        quote:
          'Akbar proves what books can do in his exceptional debut, which brings us along on his struggle with addiction, a dangerous comfort and soul-eating monster he addresses boldly.',
        speaker: 'Starred Review',
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
    url: 'https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275',
    title: 'Portrait of the Alcoholic',
    img: 'portait-of-the-alcoholic.jpg',
    quotes: [
      {
        quote:
          "Kaveh Akbar has written one of the best books of poetry I've ever read.",
        speaker: 'Patricia Smith',
        publication: ''
      },
      {
        quote:
          "Was it Jung who speculated that alcoholism might be an attempt at a material solution for a spiritual problem? Kaveh Akbar seems able to contain both--he's a demotic, as well as a spiritual, poet (the only type of either I trust). Each word in this little book might rise up from somewhere deep in the earth, but they turn into stars.",
        speaker: 'Nick Flynn',
        publication: ''
      }
    ]
  }
];

const words = {
  online: [
    {
      title: 'What Use is Knowing Anything if No One is Around',
      url:
        'http://www.newyorker.com/magazine/2017/06/05/what-use-is-knowing-anything-if-no-one-is-around',
      publication: 'The New Yorker'
    },
    {
      title: 'No is a Complete Sentence',
      url:
        'http://www.nereview.com/vol-37-no-4-2016/no-is-a-complete-sentence/',
      publication: 'New England Review'
    },
    {
      title: 'Seven Poems',
      url:
        'https://www.poetryfoundation.org/poems-and-poets/poets/detail/kaveh-akbar#about',
      publication: 'Poetry'
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
        'http://www.narrativemagazine.com/issues/poems-week-2015-2016/poem-week/do-you-speak-persian-kaveh-akbar',
      publication: 'Narrative'
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
    },
    {
      title: 'Portrait of the Alcoholic with Shattered Pelvis',
      url: 'http://garev.uga.edu/summer16/akbar.html',
      publication: 'Georgia Review'
    },
    {
      title: 'Seven Poems',
      url: 'http://aprweb.org/poems/exciting-the-canvas',
      publication: 'American Poetry Review'
    },
    {
      title: 'Palmyra',
      url:
        'http://www.pbs.org/newshour/poetry/poet-remembers-the-man-who-fought-and-died-to-save-palmyra/',
      publication: 'PBS NewsHour'
    }
  ],
  reviews: [
    {
      title: 'Calling A Wolf A Wolf',
      reviews: [
        {
          url: 'https://www.publishersweekly.com/978-1-938584-67-1',
          title: 'STARRED review in ',
          publication: 'Publishers Weekly'
        },
        {
          url:
            'http://lj.libraryjournal.com/bestbooks2017/poetry_literature.php',
          title: 'STARRED review in ',
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
        },
        {
          url:
            'https://www.theblueshiftjournal.com/single-post/2017/01/28/Haunted-Reflection-Review-of-Kaveh-Akbar%E2%80%99s-Portrait-of-the-Alcoholic',
          title: 'reviewed in ',
          publication: 'Blueshift Journal'
        },
        {
          url:
            'http://www.greenlindenpress.com/interviews-and-reviews/#/kaveh-akbar/',
          title: 'reviewed in ',
          publication: 'Green Linden Press'
        }
      ]
    }
  ],
  conversations: [
    {
      url:
        'https://thegeorgiareview.com/online/back-and-forth-with-kaveh-akbar/',
      with: 'The Georgia Review'
    },
    {
      url:
        'https://slicemagazine.org/literal-magic-an-interview-with-poet-kaveh-akbar/',
      with: 'Slice'
    },
    {
      url:
        'https://www.thefix.com/kaveh-akbar-maps-unprecedented-experience-portrait-alcoholic',
      with: 'The Fix'
    },
    {
      url:
        'https://medium.com/drunken-boat/witness-the-hour-conversations-with-arab-american-poets-across-the-diaspora-27591ba7a082',
      with: 'Drunken Boat'
    },
    {
      url:
        'http://prairieschooner.unl.edu/blog/kaveh-akbar-illicit-luck-daily-poetry-practice',
      with: 'Prairie Schooner'
    },
    {
      url:
        'http://www.pbs.org/newshour/poetry/poet-remembers-the-man-who-fought-and-died-to-save-palmyra/',
      with: 'PBS NewsHour'
    },
    {
      url: 'http://queenmobs.com/2016/08/editor-akbar/',
      with: "Queen Mob's Teahouse"
    },
    {
      url:
        'http://www.fsunews.com/story/news/2016/01/06/phd-student-isis-victim-poem/78321796/',
      with: 'FSView'
    },
    {
      url:
        'http://www.thereviewreview.net/interviews/giving-poets-room-speak-meaningfully-chat-kaveh-a',
      with: 'The Review Review'
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

export { readings, books, words };
