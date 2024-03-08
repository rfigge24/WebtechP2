// Class Book will hold the structural representation of the entire book. 
// It extends class CreativeWork. A Creative Work has an array of authors, a year of creatin and a title.
// Class Author describes an author of the book. It extends class Person. Author should inherit name and year of birth from Person and add an array of titles (strings) of the books this author has written and a link to the Wikipedia page about this author.
// Publisher describes the publishing house that published a book. It extends class Company. Company has a name and a Wikipedia page. Publisher has an array of titles (strings) of books it has published.

class book extends creativeWork{

}

class creativeWork{
    //has:
    authors = [];
    yearOfCreating = "";
    title = "";
}

class author extends person{
    //adds to persons things:
    publishedTitles = [];
    wikiUrl = "";
}

class person{
    name="";
    yearOfBirth=0;

}

class publisher extends company{

}

class company{
    name = "";
    wikiUrl="";
}

