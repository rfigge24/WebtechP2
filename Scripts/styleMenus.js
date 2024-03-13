window.addEventListener("load", myFunction, false)

function myFunction(){
    var elementArray = [];
    var body = document.querySelectorAll('body');
    var headers = document.querySelectorAll('header');
    var footers = document.querySelectorAll('footer');
    var asides = document.querySelectorAll('aside');
    var articles = document.querySelectorAll('article');
    var sections = document.querySelectorAll('section');

    var elementSelector = document.createElement('select');

    elementArray = [body, headers, footers, asides, articles, sections]

    for (elementList in elementArray) {
        for (element in elementList){
            element.innerHTML
        }
    }

//     footer = document.querySelector('footer');
//     var select1 = document.createElement('select');
//     var option1 = document.createElement('option')
//     option1.value = "hoi"
//     var text1 = document.createTextNode("hoi")
//     option1.appendChild(text1)
//     select1.appendChild(option1)

//     var option2 = document.createElement('option')
//     option2.value = "doei"
//     var text2 = document.createTextNode("hoi")
//     option2.appendChild(text2)
//     select1.appendChild(option2)
//     footer.appendChild(select1);
}

// function optionFactory(){

// }