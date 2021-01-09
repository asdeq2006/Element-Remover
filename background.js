function clickAction(info, tab){
    
    chrome.tabs.sendMessage(tab.id, {type:"removeSelected"});
}

function createContextMenus(){
    var selectelement = chrome.contextMenus.create({
        "title": "Element Remover",
        "contexts": ["all"]
    })
    
    var showelement = chrome.contextMenus.create({
        "title": "Delete Element",
        "contexts": ["all"],
        "parentId": selectelement,
        "onclick": clickAction
    })
}

createContextMenus();