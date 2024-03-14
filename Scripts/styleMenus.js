window.addEventListener("load", myFunction, false)

function myFunction(){
    tagQuerie = ['body', 'header', 'footer', 'aside', 'article', 'section']
    nodessss = domTraverser(document.body, tagQuerie, []);
    console.log(nodessss);
}


function domTraverser(node, tagList, matchedNodes){
    // Check if the current node is inside our list of tags:
    if (tagList.includes(node.tagName.toLowerCase())){
        matchedNodes.push(node);
    }

    // Recursive calls:
    for (let i = 0; i < node.children.length; i++) {
        domTraverser(node.children[i], tagList, matchedNodes);
    }

    return matchedNodes;
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


// function optionFactory(){

// }