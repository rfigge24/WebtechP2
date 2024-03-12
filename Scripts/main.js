// Class Book will hold the structural representation of the entire book. 
// It extends class CreativeWork. A Creative Work has an array of authors, a year of creatin and a title.
// Class Author describes an author of the book. It extends class Person. Author should inherit name and year of birth from Person and add an array of titles (strings) of the books this author has written and a link to the Wikipedia page about this author.
// Publisher describes the publishing house that published a book. It extends class Company. Company has a name and a Wikipedia page. Publisher has an array of titles (strings) of books it has published.
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
};

class book extends creativeWork{
    #genre;
    #publisher;
    #cover;
    #plot;
    constructor(title,authors,yearOfCreating,genre,publisher,cover,plot){
        super(title,authors,yearOfCreating);
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
};
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

};

class author extends person{
    //adds to persons things:
    #publishedTitles;
    #wikiUrl;
    constructor(name,yearOfBirth,publishedTitles,wikiUrl){
        super(name,yearOfBirth);
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
};

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
};
class publisher extends company{

};

window.addEventListener('load',formatPage,false);
function formatPage(){
        
    var body = document.querySelectorAll('body')[0];
    var header = document.querySelectorAll('header')[0];
    var aside = document.querySelectorAll('aside')[0];
    var footer = document.querySelectorAll('footer')[0];

    var main = document.createElement('main');
    body.appendChild(main);
    
    var the_circle = new book('The Circle',["David Eggers"],2013,"Science-fiction",'Knopf','https://upload.wikimedia.org/wikipedia/en/2/28/The_Circle_%28Dave_Eggers_novel_-_cover_art%29.jpg',"\"The Circle,\" penned by Dave Eggers, is a gripping tale set in a near-future Silicon Valley, where the power and influence of technology corporations reign supreme. The narrative revolves around Mae Holland, a young and ambitious woman who secures a coveted position at The Circle, a fictional tech company reminiscent of Google or Facebook. As Mae delves deeper into her role, she becomes increasingly enmeshed in the company's culture of transparency and surveillance, blurring the lines between her professional and personal life. Eggers skillfully navigates themes of privacy, ethics, and the consequences of unchecked technological advancement, offering readers a thought-provoking exploration of the perils of a hyper-connected world.");
    
    var book_info = document.createElement('article');
    main.appendChild(book_info);
    var titleNode = document.createElement('section');
    book_info.appendChild(titleNode);
    var plotNode = document.createElement('section');
    book_info.appendChild(plotNode);
    var infoNode = document.createElement('section');
    book_info.appendChild(infoNode);

    //Content of Title node
    var titleHead = document.createElement('h1');
    titleNode.appendChild(titleHead);
    var titleText = document.createTextNode(the_circle.title);
    titleHead.appendChild(titleText);

    var img = document.createElement('IMG');
    img.src = the_circle.cover;
    titleNode.appendChild(img);

    //Content of plotnode
    var plotHead = document.createElement('h2');
    var plotHeadText = document.createTextNode('Plot');
    plotHead.appendChild(plotHeadText);
    plotNode.appendChild(plotHead);

    var plotInfo = document.createElement('p');
    var plotInfoText = document.createTextNode(the_circle.plot);
    plotInfo.appendChild(plotInfoText);
    plotNode.appendChild(plotInfo);

    //Content of infonode
    var infoHead = document.createElement('h2');
    var infoHeadText = document.createTextNode('Additional info')
    infoHead.appendChild(infoHeadText);
    infoNode.appendChild(infoHead);

    var infoTable = document.createElement('TABLE');
    infoNode.appendChild(infoTable);
    var titleTable = document.createElement('TR');
    var authorTable = document.createElement('TR');
    var genreTable = document.createElement('TR');
    var publisherTable = document.createElement('TR');
    var publicationYearTable = document.createElement('TR');

    infoTable.appendChild(titleTable);
    infoTable.appendChild(authorTable);
    infoTable.appendChild(genreTable);
    infoTable.appendChild(publisherTable);
    infoTable.appendChild(publicationYearTable);

    var titleTableHead = document.createElement('TD');
    var titleTableHeadText = document.createTextNode('Title');
    titleTableHead.appendChild(titleTableHeadText);
    titleTable.appendChild(titleTableHead);

    var titleTableText = document.createElement('TD');
    var titleTextHead = document.createTextNode(the_circle.title);
    titleTableText.appendChild(titleTextHead);
    titleTable.appendChild(titleTableText);

    var authorTableHead = document.createElement('TD');
    var authorTableHeadText = document.createTextNode('Author');
    authorTableHead.appendChild(authorTableHeadText);
    authorTable.appendChild(authorTableHead);
    
    var authorHead = document.createElement('TD');
    var authorHeadText = document.createTextNode(the_circle.authors);
    authorHead.appendChild(authorHeadText);
    authorTable.appendChild(authorHead);

    var genreTableHead = document.createElement('TD');
    var genreTableHeadText = document.createTextNode('Genre');
    genreTableHead.appendChild(genreTableHeadText);
    genreTable.appendChild(genreTableHead);

    var genreTableText = document.createElement('TD');
    var genreTextHead = document.createTextNode(the_circle.genre);
    genreTableText.appendChild(genreTextHead);
    genreTable.appendChild(genreTableText);

    var publisherTableHead = document.createElement('TD');
    var publisherTableHeadText = document.createTextNode('Publisher');
    publisherTableHead.appendChild(publisherTableHeadText);
    publisherTable.appendChild(publisherTableHead);

    var publisherTableText = document.createElement('TD');
    var publisherTextHead = document.createTextNode(the_circle.publisher);
    publisherTableText.appendChild(publisherTextHead);
    publisherTable.appendChild(publisherTableText);

        var publicationYearTableHead = document.createElement('TD');
    var publicationYearTableHeadText = document.createTextNode('Year of publication');
    publicationYearTableHead.appendChild(publicationYearTableHeadText);
    publicationYearTable.appendChild(publicationYearTableHead);

    var publicationYearTableText = document.createElement('TD');
    var publicationYearTextHead = document.createTextNode(the_circle.yearOfCreating);
    publicationYearTableText.appendChild(publicationYearTextHead);
    publicationYearTable.appendChild(publicationYearTableText);
}

