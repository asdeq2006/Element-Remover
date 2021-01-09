var delElemt;

document.addEventListener("mousedown", event => {
    delElemt = event.target;
},true)

onMessage = (msg, sender, senders) => {
    switch(msg.type){
        
        case "id":
            document.getElementById(msg.elemt).remove();
            break;
        case "class":
            classElemt = document.getElementsByClassName(msg.elemt);
            /*for(var i =0; i<classElemt.length; i++){
                console.log(classElemt[i]);
            }*/

            [...classElemt].forEach(i => {i.remove();});
            break;
        case "removeSelected":
            console.log(delElemt);
            delElemt.remove();
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);