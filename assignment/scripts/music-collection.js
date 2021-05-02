console.log(`***** Music Collection *****`);

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
// - Take in the album's `title`, `artist`, `yearPublished` as input
//   parameters
// - Create a new object having the above properties
// - Add the new object to the end of the `collection` array
// - Return the newly created object

function addToCollection(title, artist, yearPublished) {
  album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
} //end addToCollection

// - Test the `addToCollection` function:
// - Add 6 albums to your collection.
//   Aim to have a mix of both same and different artists and
//   published years. (Feel free to share your musical interests,
//   or make stuff up. Totally fine either way.)
// - Console.log each album as added using the returned value.
// - After all are added, console.log the `collection` array.

addToCollection(`Big Soup Time`, `The Ambivalent Soup`, `1994`);
addToCollection(`Cup O' egg day`, `Transient Tim & His Tiny Truck Trio`, `1966`);
addToCollection(`Where Is My Soup`, `The Ambivalent Soup`, `1997`);
addToCollection(`Frizzle Fry (Remastered)`, `Primus`, `1990`);
addToCollection(`I Don't Know Where Your Soup Is, Please Let Go Of Me`, `The Band Formerly Known As 'The Ambivalent Soup'`, `1998`);
addToCollection(`Stand Out - EP`, `Powerline`, `1995`);
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   Take in an array parameter.
//   (This allows it to be reused to show any collection,
//   like the results from the find or search.)
// - Console.log the number of items in the array.
// - Loop over the array and console.log each album's information
//   formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
  console.log(`Number of artists in collection:`, array.length);
  for (let i = 0; i< array.length; i++) {
    // i = 0 means our i variable will be starting at the 0 position of the array
    console.log(array[i].title, `by`, array[i].artist, `published in`, array[i].yearPublished);
  }
}

// what should I return so I don't get 'undefined' at the end of my loop?

// - Test the `showCollection` function.

console.log(showCollection(collection));

// - Add a function named `findByArtist`. This function should:
// - Take in `artist` (a string) parameter
// - Create an array to hold any results, empty to start
// - Loop through the `collection` and add any objects with a
//   matching artist to the array.
// - Return the array with the matching results.
//   If no results are found, return an empty array.

function findByArtist(artist) {
  let artistArray = [];
  if (typeof artist === 'string'){
    for (let check of collection) {
      if (check.artist === artist) {
        artistArray.push(check);
      } // end artist match check
    } // end for of loop checking Collection
  } else {
    console.log(`OOPS!!!! ARTIST NOT FOUND!!!!!!!!!!`, artistArray);
  }// end else statement
    return artistArray;
}

// - Test the `findByArtist` function.
//   Make sure to test with an artist you know is in the collection,
//   as well as an artist you know is not in your collection.
//   Check that for artists with multiple matches, all are found.

console.log(findByArtist(`The Ambivalent Soup`));
console.log(findByArtist(`Prince`));

// Why does my console.log(`OOPS!!!! ARTIST NOT FOUND!!!!!!!!!!`, artistArray);
// Not show up in the console for the `Prince` parameter input?

// ### STRETCH GOALS ###
