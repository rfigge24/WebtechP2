// Class Book will hold the structural representation of the entire book. 
// It extends class CreativeWork. A Creative Work has an array of authors, a year of creatin and a title.
// Class Author describes an author of the book. It extends class Person. Author should inherit name and year of birth from Person and add an array of titles (strings) of the books this author has written and a link to the Wikipedia page about this author.
// Publisher describes the publishing house that published a book. It extends class Company. Company has a name and a Wikipedia page. Publisher has an array of titles (strings) of books it has published.

//Define all classes
class creativeWork{
    //has:
    #authors;
    #yearOfCreating;
    #title;
    constructor(title,authors,yearOfCreating){
        this.#title = title;
        this.#authors = authors;
        this.#yearOfCreating = yearOfCreating;
        //Forcefully adds itself to author published list.
        for(var author of authors){
            author.addTitle(this);
        }
    }

    //Getters and setters.
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

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            'Title': this.#title,
            'Publication year': this.#yearOfCreating,
            'Author(s)': this.#authors
        };
        return values;
    }
};

class Book extends creativeWork{
    //has:
    #genre;
    #publisher;
    #cover;
    #plot;

    //Constructor
    constructor(title,authors,yearOfCreating,genre,publisher,cover,plot){
        super(title,authors,yearOfCreating);
        this.#genre = genre;
        this.#publisher = publisher;
        this.#cover = cover;
        this.#plot = plot;
        //Forcefully adds itself to publishers published titles
        publisher.addTitle(this);

    }
    //Getters and setters
    get genre () {return this.#genre;}
    set genre(value) {
        if(typeof value !== 'string'){
            throw new Error("Genre must be of type string");
        }
    }
    get publisher () {return this.#publisher;}
    set publisher(value){
        if (!(value instanceof Publisher)){
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

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            ...super.getEnum(),
            'Genre': this.#genre,
            'Publisher': this.#publisher,
            'Cover': this.#cover,
            'Plot': this.#plot
        };
        return values;
    }
};
class Person{
    //has:
    #name;
    #yearOfBirth;
    constructor(name,yearOfBirth){
        this.#name = name;
        this.#yearOfBirth = yearOfBirth;
    }

    //Getters and setters
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

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            'Name':this.#name,
            'Birthyear':this.#yearOfBirth
        }
        return values;
    }

};

class Author extends Person{
    //adds to persons things:
    #publishedTitles;
    #wikiUrl;

    //Constructor
    constructor(name,yearOfBirth,publishedTitles,wikiUrl){
        super(name,yearOfBirth);
        this.#publishedTitles = publishedTitles;
        this.#wikiUrl = wikiUrl;
    }

    //Getters and setters
    get publishedTitles () {return this.#publishedTitles;}
    set publishedTitles(value){
        if (typeof value === 'array'){
            this.#publishedTitles = value;
        }
        else if (value instanceof Author){
            this.#publishedTitles = [value];
        }
        else{
            throw new Error("published is not the correct datatype");
        }
    }
    get wikiUrl () {return this.#wikiUrl};
    set wikiUrl(value){
        if (typeof value !== 'string'){
            throw new Error("WikiUrl must be of type string");
        }
        this.#wikiUrl = value;
        
    }

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            ...super.getEnum(),
            'Bibliography': this.#publishedTitles,
            'Further Info': this.#wikiUrl
        };
        return values;
    }
    //Can be used to add title to published titles
    addTitle(book){
        for(var work of this.#publishedTitles){
            if(work.title == book.title){
                return;
            }
        }
        this.#publishedTitles.push(book);
    }
};

class Company{
    //has:
    #name;
    #wikiUrl;

    //Constructor
    constructor(name,wikiUrl){
        this.#name = name;
        this.#wikiUrl = wikiUrl;
    }
    //Getters and setters
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

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            'Name': this.#name,
            'Further Info': this.#wikiUrl
        };
        return values;
    }
};

class Publisher extends Company{
    //This is added onto company things
    #publishedTitles

    //Constructor
    constructor(name,wikiUrl,publishedTitles){
        super(name,wikiUrl);
        this.#publishedTitles = publishedTitles;
    }

    //Getters and setters
    get publishedTitles () {return this.#publishedTitles}
    set publishedTitles(value){
        if (typeof value === 'array'){
            this.#publishedTitles = value;
        }
        else if (value instanceof Book){
            this.#publishedTitles = [value];
        }
        else{
            throw new Error("published is not the correct datatype");
        }
    }

    //Get an object such that we can enumerate over private values.
    getEnum(){
        const values = {
            ...super.getEnum(),
            'Bibliography': this.#publishedTitles
        };
        return values;
    }
    //Can be used to add title to published titles
    addTitle(book){
        for(var work of this.#publishedTitles){
            if(work.title == book.title){
                return;
            }
        }
        this.#publishedTitles.push(book);
    }   
};
//Event that happens when the page is loaded so that content is loaded
window.addEventListener('load',formatPage,false);

//Formats page on load
function formatPage(){
    //Get useful elements of page
    var body = document.querySelectorAll('body')[0];
    var footer = document.querySelectorAll('footer')[0];

    //Make sure elements are in the right place in the DOM
    var main = document.createElement('main');
    body.insertBefore(main,footer);
    
    //Declare classes for info.
    var david_eggers = new Author("David Eggers","1970",[],'https://en.wikipedia.org/wiki/Dave_Eggers');
    //Publishers
    var knopf = new Publisher('Knopf','https://en.wikipedia.org/wiki/Alfred_A._Knopf',[]);
    var mcSweeney = new Publisher('McSweeney\'s',"https://en.wikipedia.org/wiki/McSweeney%27s",[]);
    var simonSchuster = new Publisher('Simon & Schuster',"https://en.wikipedia.org/wiki/Simon_%26_Schuster",[]);
    //Books relevant for website
    var a_heartbreaking_work_of_a_staggering_genius = new Book('A Heartbreaking Work of Staggering Genius',[david_eggers],2000,'Memoir',simonSchuster,"../Media/Images/Further_Works/HeartbreakingWorkStaggeringGenius.jpeg","This memoir, detailing the challenges Eggers faced after the death of both of his parents, thrust him into the literary spotlight. The book is notable for its inventive style and emotional depth, blending humor and pathos as it explores themes of family, grief, and the burdens of responsibility.");
    var what_is_the_what = new Book('What is the What',[david_eggers],2006,'Fiction,Memoir',mcSweeney,"../Media/Images/Further_Works/WhatIsTheWhat.jpeg","This novel is based on the real-life story of Valentino Achak Deng, a Sudanese child refugee and one of the \"Lost Boys of Sudan.\" Eggers tells Deng's harrowing journey from war-torn Sudan to his resettlement in the United States, offering a powerful narrative on survival, identity, and displacement. ");
    var zeitoun = new Book('Zeitoun',[david_eggers],2009,"Nonfiction",mcSweeney,"../Media/Images/Further_Works/Zeitoun.jpeg","In this non-fiction work, Eggers recounts the story of Abdulrahman Zeitoun, a Syrian-American who stayed in New Orleans during Hurricane Katrina. Zeitoun's subsequent arrest and detention without charge highlight issues of racial profiling and the breakdown of justice during disasters. The book is a critical examination of the government's response to Katrina and its impact on personal freedoms.");
    var the_circle = new Book('The Circle',[david_eggers],2013,"Science-fiction",knopf,'https://upload.wikimedia.org/wikipedia/en/2/28/The_Circle_%28Dave_Eggers_novel_-_cover_art%29.jpg',"\"The Circle,\" is a gripping tale set in a near-future Silicon Valley, where the power and influence of technology corporations reign supreme. The narrative revolves around Mae Holland, a young and ambitious woman who secures a coveted position at The Circle, a fictional tech company reminiscent of Google or Facebook. As Mae delves deeper into her role, she becomes increasingly enmeshed in the company's culture of transparency and surveillance, blurring the lines between her professional and personal life. Eggers skillfully navigates themes of privacy, ethics, and the consequences of unchecked technological advancement, offering readers a thought-provoking exploration of the perils of a hyper-connected world.");
    var the_monk_of_mokha = new Book('The Monk of Mokha',[david_eggers],2018,"Nonfiction",mcSweeney,"../Media/Images/Further_Works/TheMonkOfMokha.jpeg","This non-fiction narrative follows Mokhtar Alkhanshali, a Yemeni-American who embarks on a journey to revive Yemeni coffee trade amidst the country's civil war. Eggers blends adventure, history, and a deep look into the complexities of global trade, offering a story that is as informative as it is gripping.");
    var the_parade = new Book('The Parade',[david_eggers],2019,"Fiction",mcSweeney,"../Media/Images/Further_Works/TheParade.jpg","A novel set against the backdrop of an unnamed country recovering from civil war. The story focuses on two foreign contractors tasked with paving a road that will unite the country, exploring themes of Western intervention, the nature of progress, and the illusion of peace and stability.");
    
    //Format page with article and sections
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
    titleHead.appendChild(document.createTextNode(the_circle.title));

    var img = document.createElement('IMG');
    img.src = the_circle.cover;
    titleNode.appendChild(img);
    img.alt = 'Cover of The Circle'
    img.title = 'Cover of The Circle'

    //Content of plotnode
    var plotHead = document.createElement('h2');
    plotHead.appendChild(document.createTextNode('Plot'));
    plotNode.appendChild(plotHead);

    var plotInfo = document.createElement('p'); 
    plotInfo.appendChild(document.createTextNode(the_circle.plot));
    plotNode.appendChild(plotInfo);

    //Content of infonode
    var infoHead = document.createElement('h2');
    infoHead.appendChild(document.createTextNode('Additional info'));
    infoNode.appendChild(infoHead);

    //Create table for additional info


    var infoTable = document.createElement('TABLE');
    infoNode.appendChild(infoTable);
    formatTable(infoTable,the_circle);
    function formatTable(table,value){
        var entries = value.getEnum();
        for(var key of Object.entries(entries)){
            var row = document.createElement("TR");
            table.appendChild(row)
            if(key[0]!="Cover" & key[0]!="Plot"){
                var keyNode = document.createElement("TD");
                row.appendChild(keyNode);
                keyNode.appendChild(document.createTextNode(key[0]));
                
                var itemNode = document.createElement("TD");
                //Add eventlisteners to relevant element.
                //Use enter and leave event so that hovering over tooltip does not get rid of tooltip
                //Mobile first
                if(key[0]=="Author(s)"){
                    for(var i = 0; i < key[1].length; i++){
                        (function(index) {
                            var span = document.createElement("SPAN");
                            itemNode.appendChild(span);
                            var author = key[1][index];
                            if (i==0){
                            span.appendChild(document.createTextNode(author.name));
                            }
                            else{
                                span.appendChild(document.createTextNode(", "+author.name));    
                            }
                            span.addEventListener('click', (event) => {click_tooltip(knopf,event)});
                            span.addEventListener('mouseenter', (event) => create_tooltip(author, event)); 
                            span.addEventListener('mouseleave', (event) => delete_tooltip(event)); 
                            
                        })(i);
                    }
                }
                else if(key[0]=="Publisher"){
                    (function(key){
                        var publisher = key[1];
                        itemNode.appendChild(document.createTextNode(publisher.name));
                        itemNode.addEventListener('click', (event) =>{click_tooltip(publisher,event)});
                        itemNode.addEventListener('mouseenter',(event)=> create_tooltip(publisher,event));
                        itemNode.addEventListener('mouseleave',(event)=> delete_tooltip(event));
                        
                    })(key);
                }
                else{
                    itemNode.appendChild(document.createTextNode(key[1]))
                }
                row.appendChild(itemNode);
            }
        }
    };
    function click_tooltip(value,event){
        var childNodes = event.target.childNodes;
        if (childNodes.length == 2){
            delete_tooltip(event)
        }
        else{
            create_tooltip(value,event);
        }     
    }
    //Function to dynamically create tooltip for any object type
    function create_tooltip(value,event){
        var tooltip = document.createElement('article');
        tooltip.className = 'tooltip';
        
        var info = value.getEnum();
        for(var key of Object.keys(info)){
            var keyNode = document.createElement('p');
            var item = info[key];
            //Show more than 1 title but limit to 3
            if (typeof item == 'object'){
                var itemText = '';
                var n = 0;
                for(i in Object.keys(item)){
                    if (itemText!=''){
                        itemText+=", ";
                    }
                    itemText+= item[i].title;
                    n++;
                    if (n==3){
                        itemText+= '...';
                        break;
                    }
               }
                var item = itemText;
            }
            //Creates clickable link
            if (key == 'Further Info'){
                keyNode.appendChild(document.createTextNode(key+' : '));
                var link = document.createElement('a');
                link.href = item;
                link.target = '_blank';
                link.appendChild(document.createTextNode('Wikipedia'));
                keyNode.appendChild(link);
                
            }
            else{
                keyNode.appendChild(document.createTextNode(key+' : '+ item));
            }
            tooltip.appendChild(keyNode);

        }
        event.target.appendChild(tooltip);
        event.stopPropagation();
    };
    //Makes the tooltip disappear.
    function delete_tooltip(event){
        if (event.target.childNodes.length == 2){
            var tooltip = event.target.lastChild;
            tooltip.textContent = '';
            event.target.removeChild(tooltip);
        }
    }
}

