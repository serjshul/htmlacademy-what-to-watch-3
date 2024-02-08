import {Film} from '../types/film.ts';

export const films: Film[] = [
  {
    title: 'Interstellar',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    year: 2014,
    description: 'It’s huge, it’s cold, it’s soulless. It’s possessed of forces that would rip you to ribbons ' +
      'the second you dared to step off the tiny planetary beachhead it has permitted us. What’s more, it ' +
      'completely defies understanding, at least for anyone who’s not fluent in the language of singularities ' +
      'and space-time and wormholes and all the rest.',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Bill Irwin'],
    rating: 8.7,
    ratingDescription: 'Very good',
    ratingCounter: 156,
    poster: 'https://en.wikipedia.org/wiki/File:Interstellar_film_poster.jpg',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hollywoodreporter.com%2Fnews%2Fgeneral-' +
      'news%2Fglobal-box-office-christopher-nolans-747516%2F&psig=AOvVaw0pnV9qvodSxbe9JT2km82h&ust=17074948' +
      '84793000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCA6KGQnIQDFQAAAAAdAAAAABAQ',
    video: 'https://www.youtube.com/embed/m2vijtILDuk?si=-tGEalVY8Wg7oI2r'
  },
  {
    title: 'Hot Summer Nights',
    genre: 'Romance',
    director: 'Elijah Bynum',
    year: 2017,
    description: 'In 1991, a sheltered teenage boy comes of age during a wild summer he spends on Cape Cod ' +
      'getting rich from selling pot to gangsters, falling in love for the first time, partying and eventually ' +
      'realizing that he is in over his head.',
    cast: ['Timothée Chalamet', 'Maika Monroe', 'Alex Roe', 'Maia Mitchell'],
    rating: 6.4,
    ratingDescription: 'Good',
    ratingCounter: 876,
    poster: 'https://en.wikipedia.org/wiki/File:Hot_Summer_Nights_poster.jpg',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvariety.com%2F2018%2Ffilm%2Freviews%2Fhot-' +
      'summer-nights-review-timothee-chalamet-1202883824%2F&psig=AOvVaw1z_K6qU062YlM77IPejUgS&ust=17074951' +
      '46589000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCS4p6RnIQDFQAAAAAdAAAAABAE',
    video: 'https://www.youtube.com/embed/O5ROSS9ReUY?si=bumj4gK_9fxi_z4N'
  },
  {
    title: 'Asteroid City',
    genre: 'Comedy',
    director: 'Wes Anderson',
    year: 2023,
    description: 'Following a writer on his world famous fictional play about a grieving father who travels ' +
      'with his tech-obsessed family to small rural Asteroid City to compete in a junior stargazing event, ' +
      'only to have his world view disrupted forever',
    cast: ['Jason Schwartzman', 'Scarlett Johansson', 'Tom Hanks', 'Jeffrey Wright', 'Tilda Swinton',
      'Bryan Cranston', 'Edward Norton'],
    rating: 6.5,
    ratingDescription: 'Good',
    ratingCounter: 876,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%2593%25D0%' +
      '25BE%25D1%2580%25D0%25BE%25D0%25B4_%25D0%25B0%25D1%2581%25D1%2582%25D0%25B5%25D1%2580%25D0%25BE%25' +
      'D0%25B8%25D0%25B4%25D0%25BE%25D0%25B2&psig=AOvVaw3TzrEUEnBemPceVJJvPvny&ust=1707495421706000&source' +
      '=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiH0aGSnIQDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.texasmonthly.com%2Farts-entertainment' +
      '%2Fwes-anderson-asteroid-city-review%2F&psig=AOvVaw3TzrEUEnBemPceVJJvPvny&ust=1707495421706000&sou' +
      'rce=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiH0aGSnIQDFQAAAAAdAAAAABAg',
    video: 'https://www.youtube.com/embed/9FXCSXuGTF4?si=MagsfQCpdkAZZR6I'
  },
  {
    title: 'Legally Blonde',
    genre: 'Comedy',
    director: 'Robert Luketic',
    year: 2001,
    description: 'Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to ' +
      'follow him to law school. While she is there, she figures out that there is more to her than just looks',
    cast: ['Reese Witherspoon', 'Luke Wilson', 'Selma Blair', 'Matthew Davis', 'Victor Garber', 'Jennifer Coolidge'],
    rating: 6.5,
    ratingDescription: 'Good',
    ratingCounter: 345,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Flegally_blonde' +
      '&psig=AOvVaw3mahHaiunDYi8qC3wJ0ezO&ust=1707495673386000&source=images&cd=vfe&opi=89978449&ved=0CBIQ' +
      'jRxqFwoTCMD23ZmTnIQDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdivinity.uchicago.edu%2Fsightings%2Farticle' +
      's%2Fgetting-serious-about-legally-blonde&psig=AOvVaw3mahHaiunDYi8qC3wJ0ezO&ust=1707495673386000&source' +
      '=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMD23ZmTnIQDFQAAAAAdAAAAABAJ',
    video: 'https://www.youtube.com/embed/vWOHwI_FgAo?si=lc0bzlT8pzwvUeHY'
  },
  {
    title: 'American Psycho',
    genre: 'Crime',
    director: 'Mary Harron',
    year: 2000,
    description: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate ' +
      'psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies',
    cast: ['Christian Bale', 'Willem Dafoe', 'Jared Leto', 'Josh Lucas', 'Samantha Mathis'],
    rating: 7.6,
    ratingDescription: 'Good',
    ratingCounter: 3032,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0144084%2F&psig=AOvVaw0' +
      '89shL5QxMcp9RwYJVDGSk&ust=1707495881321000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjFj_2TnI' +
      'QDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0144084%2F&psig=AOvVaw' +
      '089shL5QxMcp9RwYJVDGSk&ust=1707495881321000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjFj_2Tn' +
      'IQDFQAAAAAdAAAAABAI',
    video: 'https://www.youtube.com/embed/81mibtQWWBg?si=bVSmqGRE6LnJFVjR'
  },
  {
    title: 'The Devil Wears Prada',
    genre: 'Comedy',
    director: 'David Frankel',
    year: 2006,
    description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the ' +
      'demanding editor-in-chief of a high fashion magazine',
    cast: ['Meryl Streep', 'Anne Hathaway', 'Stanley Tucci', 'Simon Baker'],
    rating: 6.9,
    ratingDescription: 'Good',
    ratingCounter: 9334,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0458352%2F&psig=AO' +
      'vVaw2kxlKhU--WarFFn_AM132E&ust=1707496097935000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoT' +
      'CJjTjuSUnIQDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fmovies-tv%2Fthe-devil-' +
      'wears-prada-movie-facts&psig=AOvVaw2kxlKhU--WarFFn_AM132E&ust=1707496097935000&source=images&cd=vfe&' +
      'opi=89978449&ved=0CBIQjRxqFwoTCJjTjuSUnIQDFQAAAAAdAAAAABAI',
    video: 'https://www.youtube.com/embed/6ZOZwUQKu3E?si=ItKQeIOHn8tVHydM'
  },
  {
    title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
    genre: 'Action',
    director: 'Francis Lawrence',
    year: 2023,
    description: 'Coriolanus Snow mentors and develops feelings for the female District 12 tribute during ' +
      'the 10th Hunger Games.',
    cast: ['Tom Blyth', 'Rachel Zegler', 'Peter Dinklage', 'Jason Schwartzman', 'Hunter Schafer'],
    rating: 6.8,
    ratingDescription: 'Good',
    ratingCounter: 2352,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10545296%2F&psig=' +
      'AOvVaw08a2iPjLAIOS9ugT-POkpt&ust=1707496285989000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqF' +
      'woTCPj74r2VnIQDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10545296%2F&psig=' +
      'AOvVaw08a2iPjLAIOS9ugT-POkpt&ust=1707496285989000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFw' +
      'oTCPj74r2VnIQDFQAAAAAdAAAAABAQ',
    video: 'https://www.youtube.com/embed/RDE6Uz73A7g?si=lNhckgnqayH1q1H'
  },
  {
    title: 'The Divergent Series: Insurgent',
    genre: 'Action',
    director: 'Robert Schwentke',
    year: 2015,
    description: 'Beatrice Prior must confront her inner demons and continue her fight against a powerful ' +
      'alliance which threatens to tear her society apart with the help from others on her side',
    cast: ['Shailene Woodley', 'Theo James', 'Octavia Spencer', 'Jai Courtney'],
    rating: 6.2,
    ratingDescription: 'Good',
    ratingCounter: 237,
    poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2908446%2F&psig=AOv' +
      'Vaw1rRRtscACS3pnZr2ThHW6R&ust=1707496492188000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCM' +
      'C1maCWnIQDFQAAAAAdAAAAABAE',
    preview: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2908446%2F&psig=AO' +
      'vVaw1rRRtscACS3pnZr2ThHW6R&ust=1707496492188000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTC' +
      'MC1maCWnIQDFQAAAAAdAAAAABAI',
    video: 'https://www.youtube.com/embed/IR-l_TSjlEo?si=-xCbcUtlEulI94N9'
  }
];
