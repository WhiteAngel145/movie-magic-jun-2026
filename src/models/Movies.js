import { v4 as uuid } from 'uuid'

const movies = [
  {
    _id: "a3682672-0ee4-1284-8759-35ee253329zv",
    title: 'Jungle Cruise',
    genre: 'Adventure',
    description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.',
    imageUrl: '/img/jungle-cruise.jpeg',
    director: 'Jaume Collet-Serra',
    year: '2021',
    rating: 6.6,
    category: 'movie'
  },
  {
    _id: "z2682672-0ee4-1534-8759-35ee253329ty",
    title: 'Man of Steel',
    genre: 'Superhero',
    description: 'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg',
    director: 'Zack Snyder',
    year: '2013',
    rating: 7.1,
    category: 'movie'
  },
  {
    _id: "x1234567-0ee4-8888-8759-35ee253329aa",
    title: 'Home Alone',
    genre: 'Comedy',
    description: 'It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin, was accidentally left behind. Being home alone was fun for Kevin, until he discovers two burglars about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps.',
    imageUrl: '/img/home-alone.jpeg',
    director: 'Chris Columbus',
    year: '1990',
    rating: 7.7,
    category: 'movie'
  }
];

export default class Movie {

  constructor(data) {
    Object.assign(this, data);
    
    this._id = uuid();
  }

	static find(filter = {}) {
    let result = movies.slice()
    
    if (filter._id) {
      result = result.filter(movie => movie._id === filter._id);
    }

    // if (filter.title) {
    //   //TODO
    // }

    if (filter.genre) {
      result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    if (filter.year) {
      result = result.filter(movie => movie.year === filter.year);
    }

		return result;
	}

  static findOne(filter = {}) {
    let result = movies[0];

    if (filter._id) {
      result = movies.find(movie => movie._id === filter._id);
    }

    return result;
  }

  get id() {
    return this._id;
  }

  save() {
    movies.push(this);

    return this;
  }
}