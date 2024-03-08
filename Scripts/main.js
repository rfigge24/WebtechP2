// Class Book will hold the structural representation of the entire book. 
// It extends class CreativeWork. A Creative Work has an array of authors, a year of creatin and a title.
// Class Author describes an author of the book. It extends class Person. Author should inherit name and year of birth from Person and add an array of titles (strings) of the books this author has written and a link to the Wikipedia page about this author.
// Publisher describes the publishing house that published a book. It extends class Company. Company has a name and a Wikipedia page. Publisher has an array of titles (strings) of books it has published.

class book extends creativeWork{
    #genre;
    #publisher;
    #cover;
    #plot;
    constructor(title,authors,yearOfCreating,genre,publisher,cover,plot){
        super(title);
        super(authors);
        super(yearOfCreating);
        this.#genre = genre;
        this.#publisher = publisher;
        this.#cover = cover;
        this.#plot = plot;
    }
    get genre () {return this.#genre;}
    set genre(value) {
        if(typeof value !== 'string'){
            throw new Error("Genre must be of type string");
        }
    }
    get publisher () {return this.#publisher;}
    set publisher(value){
        if (!(value instanceof publisher)){
            throw new Error("Publisher must be of type publisher");
        }
        this.#publisher=value;
    }
    get cover () {return this.#cover;}
    set cover(value){
        if(typeof value !== 'string'){
            throw new Error("Cover must be of type string");
        }
        this.#cover = string.link(value);
    }
    get plot () {return this.#plot;}
    set plot(value) {
        if(typeof value !== 'string'){
            throw new Error("Plot must be of type string");
        }
        this.#plot = plot;
    }
}

class creativeWork{
    //has:
    #authors;
    #yearOfCreating;
    #title;
    constructor(title,authors,yearOfCreating){
        this.#title = title;
        this.#authors = authors;
        this.#yearOfCreating = yearOfCreating;
    }
    get title () {return this.#title;}
    set title(value) {
        if (typeof value !== 'string'){
            throw new Error("Title must be a string")
        }
        this.#title = value;
    }
    get yearOfCreating () {return this.#yearOfCreating;}
    set yearOfCreating(value) {
        let year = Date.year.parse(value);
        if (isNaN(year)){
            throw new Error("Year must be a valid value for year.");
        }
        this.#yearOfCreating = year;
        
    }

    get authors () {return this.#authors;}
    set authors(value){
        if (typeof value === 'array'){
            this.#authors = value;
        }
        else if (value instanceof author){
            this.#authors = [value];
        }
        else{
            throw new Error("Authors is not the correct datatype");
        }
    }
}

class author extends person{
    //adds to persons things:
    #publishedTitles;
    #wikiUrl;
    constructor(name,yearOfBirth,publishedTitles,wikiUrl){
        super(name);
        super(yearOfBirth);
        this.#publishedTitles = publishedTitles;
        this.#wikiUrl = wikiUrl;
    }
    get publishedTitles () {return this.#publishedTitles;}
    set publishedTitles(value){
        if (typeof value === 'array'){
            this.#publishedTitles = value;
        }
        else if (value instanceof author){
            this.#publishedTitles = [value];
        }
        else{
            throw new Error("Authors is not the correct datatype");
        }
    }
}

class person{
    #name;
    #yearOfBirth;
    constructor(name,yearOfBirth){
        this.#name = name;
        this.#yearOfBirth = yearOfBirth;
    }
    get name () {return this.#name;}
    set name(value){
        if (typeof value !== 'string'){
            throw new Error("Name must be of type string");
        }
        this.#name = value;
    }
    get yearOfBirth () {return this.#yearOfBirth;}
    set yearOfBirth(value){
        let year = Date.year.parse(value);
        if (isNaN(year)){
            throw new Error("Year must be a valid value for year.");
        }
        this.#yearOfBirth = year;
    }

}

class publisher extends company{

}

class company{
    #name;
    #wikiUrl;
    constructor(name,wikiUrl){
        this.#name = name;
        this.#wikiUrl = wikiUrl;
    }
    get name () {return this.#name;}
    set name(value){
        if (typeof value !== 'string'){
            throw new Error("Name must be of type string")
        }
    }
    get wikiUrl () {return this.#wikiUrl};
    set wikiUrl(value){
        if (typeof value !== 'string'){
            throw new Error("WikiUrl must be of type string");
        }
        this.#wikiUrl = value;
    }
}

