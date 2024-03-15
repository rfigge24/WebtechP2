// Defining the tag queries we look for together with a list of styling options:  
let tagQuerie = ['body', 'header', 'footer', 'aside', 'article', 'section'];
let styles = ['fontsize-16px', 'fontsize-32px', 'textcolor-black', 'textcolor-red'];

window.addEventListener("load", myFunction, false)


function myFunction(){

    // Traversing the dom tree using Depth-first search to find all elements corresponding to a tag in our querie:
    var elementsToStyle = domTraverser(document.body, tagQuerie, []);

    // Creating the selectors to add to our footer and adding the attributes:
    var footer = document.querySelector('footer');
    var select1 = document.createElement('select');
    var select2 = document.createElement('select');

    select1.setAttribute("name", "elementSelector");
    select1.setAttribute("id", "element-selector");  
    select2.setAttribute("name", "styleSelector");
    select2.setAttribute("id", "style-selector");

    //using our optionFactory function to create options for each element in our arrays:
    for (const [idx, element] of elementsToStyle.entries()) {
        optionFactory(idx, element.tagName, select1);
    }

    for (const [idx, styling] of styles.entries()){
        optionFactory(idx, styling, select2);
    }

    footer.appendChild(select1);
    footer.appendChild(select2);
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


function optionFactory(idx, optionText, select){
    var option = document.createElement('option');
    option.value = idx;     //The value is the index of the option in the arrays created before.
    var text = document.createTextNode(idx + ".) " + optionText);
    option.appendChild(text);
    select.appendChild(option);
}