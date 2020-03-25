const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function(){
  return this.films.map(film => film.title);
}

Cinema.prototype.findFilmByTitle = function(title){
  return this.films.find(film => film.title === title)
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  let filteredFilms = this.films.filter((film) =>{
    return film.genre === genre
  });
  return filteredFilms;
  // return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.isFilmsFromYear = function(year){
  return this.films.some(film => film.year === year);
}

Cinema.prototype.areAllFilmsOverLength = function(length){
  return this.films.every(film => film.length >= length);
}

Cinema.prototype.totalRunningTime = function(){
  return this.films.reduce((totalRunningTime,film)=>{
    return totalRunningTime + film.length;
  },0);
}

Cinema.prototype.filterFilmsByProperty = function (propertyName, propertyValue) {
  return this.films.filter(film => film[propertyName] === propertyValue);
}

module.exports = Cinema;
