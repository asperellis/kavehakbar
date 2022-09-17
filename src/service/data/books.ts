import { Book } from '../../types'

export const books: Book[] = [
  {
    urls: [
      {
        text: 'Penguin',
        url: 'https://www.penguin.co.uk/books/312973/the-penguin-book-of-spiritual-verse/9780241391587'
      },
      {
        text: 'Book Depository',
        url: 'https://www.bookdepository.com/The-Penguin-Book-of-Spiritual-Verse-Kaveh-Akbar/9780241391587?redirected=true&utm_medium=Google&utm_campaign=Base5&utm_source=US&utm_content=The-Penguin-Book-of-Spiritual-Verse&selectCurrency=USD&w=AFCCAU992G3RPLA8VTL5&gclid'
      },
      {
        text: 'Amazon',
        url: 'https://www.amazon.com/Penguin-Spiritual-Divine-Classics-anglais/dp/024139158X/ref=asc_df_024139158X_nodl/?tag=hyprod-20&linkCode=df0&hvadid=583511040923&hvpos=&hvnetw=g&hvrand=5873716623907449363&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocph'
      }
    ],
    preorder: false,
    type: 'BOOK',
    title: 'The Penguin Book of Spiritual Verse',
    img: 'spiritual-verse',
    quotes: [
      {
        quote: 'There cannot be any other anthology that ranges so widely.',
        speaker: 'John Barton',
        publication: ''
      },
      {
        quote: 'A delightful celebration of human creativity, with new insights from a trusted guide: Kaveh Akbar.',
        speaker: 'Chine McDonald',
        publication: ''
      },
      {
        quote: 'The chorus of voices gathered offer a balm, a consolation, a tune, in our desolate world.',
        speaker: 'Ilya Kaminsky',
        publication: ''
      },
      {
        quote: 'Vibrating across this thick bundle of verse is the animation of the spirit enmeshed with the body, astounding in its ever-shifting forms, its irrepressible music.',
        speaker: 'Jenny Xie',
        publication: ''
      }
    ]
  },
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
        text: 'Open Books',
        url: 'https://open-books-a-poem-emporium.myshopify.com/products/08-03-2021-pilgrim-bell-by-kaveh-akbar?_pos=1&_sid=dc3ff7f67&_ss=r'
      },
      {
        text: 'Amazon',
        url: 'https://www.amazon.com/Pilgrim-Bell-Poems-Kaveh-Akbar/dp/1644450593/ref=sr_1_2?dchild=1&keywords=kaveh+akbar&qid=1611949324&sr=8-2'
      }
    ],
    preorder: false,
    type: 'BOOK',
    title: 'Pilgrim Bell',
    img: 'pilgrim-bell',
    quotes: [
      {
        quote: '<em>Pilgrim Bell</em> is bracing in its honesty and noteworthy in its steadfast adherence to finding the spiritual in even the most mundane settings. Akbar’s mesmerizing dexterity with language is at its most compelling when he is relentlessly pursuing the truth―a hunt that’s present in every poem in this volume.',
        speaker: '',
        publication: 'TIME'
      },
      {
        quote: 'Akbar is exquisitely sensitive to how language can function as both presence and absence. . . . His practice of taking language apart, and harnessing the empty space around it, makes even the most familiar words seem eerie and unexpected.',
        speaker: '',
        publication: 'The New Yorker'
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
    preorder: false,
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
    preorder: false,
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