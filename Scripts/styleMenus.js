window.addEventListener("load", myFunction, false)


function myFunction(){
    tagQuerie = ['body', 'header', 'footer', 'aside', 'article', 'section'];
    elementsToStyle = domTraverser(document.body, tagQuerie, []);
    
    footer = document.querySelector('footer');
    var select1 = document.createElement('select');
    for (const [idx, element] of elementsToStyle.entries()) {
        optionFactory(idx, element, select1);
    }

    footer.appendChild(select1);
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


function optionFactory(idx, elementOption, select){
    var option = document.createElement('option');
    option.value = idx + elementOption.tagName;
    var text = document.createTextNode(idx + ".) " + elementOption.tagName);
    option.appendChild(text);
    select.appendChild(option);
}