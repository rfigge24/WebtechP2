var styleClassNames = ['default','⚠fontsize-micro⚠','fontsize-8px','fontsize-16px', 'fontsize-24px', 'textcolor-blue', 'textcolor-red', 'textcolor-green', 'textcolor-magenta', 'textcolor-cyan', 'textcolor-brown'];
var elementsToStyle;
var footer;
var selector1;
var selector2;

var selectedElement;
var selectedStyle;

window.addEventListener("load", myFunction, false)


function myFunction(){
    var tagQuerie = ['body', 'nav', 'header', 'footer', 'aside', 'article', 'section'];
    // Traversing the dom tree using Depth-first search to find all elements corresponding to a tag in our querie:
    elementsToStyle = domTraverser(document.body, tagQuerie, []);

    // Creating the selectors to add to our footer and adding the attributes:
    footer = document.querySelector('footer');
    selector1 = document.createElement('select');
    selector2 = document.createElement('select');

    selector1.setAttribute("name", "elementSelector");
    selector1.setAttribute("id", "element-selector");  
    selector2.setAttribute("name", "styleSelector");
    selector2.setAttribute("id", "style-selector");

    //using our optionFactory function to create options for each element in our arrays:
    for (const [idx, element] of elementsToStyle.entries()) {
        element.classList.add(styleClassNames[0]);
        optionFactory(idx, element.tagName, selector1);
    }
    footer.appendChild(selector1);
    changeSelectedElementOption();      //initilising the selectedElementOption
    

    for (const [idx, styling] of styleClassNames.entries()){
        optionFactory(idx, styling, selector2);
    }
    footer.appendChild(selector2);
    changeSelectedStyleOption();        //initilising the selectedStyleOption

    // Adding the EventListners to the selector elements:
    selector1.addEventListener("input", changeSelectedElementOption, false);
    selector2.addEventListener("input", changeSelectedStyleOption, false);
}

// Function to traverse the DOM-tree and returns an array with the Elements in the dom of whom the tagName is in the tagList:
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


function optionFactory(idx, optionText, selector){
    var option = document.createElement('option');
    option.value = idx;     //The value is the index of the option in the arrays created before.
    var text = document.createTextNode(idx + ".) " + optionText);
    option.appendChild(text);
    selector.appendChild(option);
}

function changeSelectedElementOption(){
    var selectedIndex = selector1.selectedIndex;
    var selectedOption = selector1.options[selectedIndex];
    var selectedValue = selectedOption.value;
    selectedElement = elementsToStyle[selectedValue];


    for (let i = 0; i < styleClassNames.length; i++) {
        let className = styleClassNames[i];
        if (selectedElement.classList.contains(className)) {
            selector2.selectedIndex = i;
            selectedStyle = styleClassNames[i];
            break;
        }
    }
}

function changeSelectedStyleOption(){
    var selectedIndex = selector2.selectedIndex;
    var selectedOption = selector2.options[selectedIndex];
    var selectedValue = selectedOption.value;

    //remove existing classnames from selectedElementOption
    styleClassNames.forEach(function(className) {
        if (selectedElement.classList.contains(className)) {
            selectedElement.classList.remove(className);
        }
    })

    selectedStyle = styleClassNames[selectedValue];
    selectedElement.classList.add(selectedStyle);
}
