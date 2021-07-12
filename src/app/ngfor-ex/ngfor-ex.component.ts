import { Component, OnInit } from '@angular/core';
import { Movie2 } from '../model/movie';

@Component({
  selector: 'app-ngfor-ex',
  templateUrl: './ngfor-ex.component.html',
  styleUrls: ['./ngfor-ex.component.css'],
})
export class NgforExComponent implements OnInit {
  movieAdd: Movie2 = new Movie2();

  constructor() {}

  ngOnInit(): void {}

  title: string = 'Top 5 Movies';

  get itemNum() {
    return this.movies2.length;
  }

  movies: Movie[] = [
    {
      title: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate: 'March 4, 2016',
    },
    {
      title: 'Batman v Superman: Dawn of Justice',
      director: 'Zack Snyder',
      cast: 'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate: 'March 25, 2016',
    },
    {
      title: 'Captain American: Civil War',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
      releaseDate: 'May 6, 2016',
    },
    {
      title: 'X-Men: Apocalypse',
      director: 'Bryan Singer',
      cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
      releaseDate: 'May 27, 2016',
    },
    {
      title: 'Warcraft',
      director: 'Duncan Jones',
      cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate: 'June 10, 2016',
    },
  ];

  movies2: Movie2[] = [
    {
      title: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate: new Date(2016, 3, 4),
    },
    {
      title: 'Batman v Superman: Dawn of Justice',
      director: 'Zack Snyder',
      cast: 'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate: new Date(2016, 3, 25),
    },
    {
      title: 'Captain American: Civil War',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
      releaseDate: new Date(2016, 5, 6),
    },
    {
      title: 'X-Men: Apocalypse',
      director: 'Bryan Singer',
      cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
      releaseDate: new Date(2016, 5, 27),
    },
    {
      title: 'Warcraft',
      director: 'Duncan Jones',
      cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate: new Date(2016, 6, 10),
    },
  ];

  CompositeKey(index: any, item: Movie2) {
    return item.title + item.director;
  }

  deleteMovie(index: number): void {
    this.movies2.splice(index, 1);
    alert('Bạn có muốn xoá?');
  }
  addMovie(): void {
    this.movies2.push(this.movieAdd);
    this.movieAdd = new Movie2();
  }
}

class Movie {
  title: string = '';
  director: string = '';
  cast: string = '';
  releaseDate: string = '';
}
