






delthis = () => {

    chrome.tabs.query({ active: true, currentWindow: true },    
        function(tabs) {  
          
          var radios = document.getElementsByName("getelemtby");
          var itemValue = "";
          radios.forEach( items  => {
            if(items.checked){
              itemValue = items.value;
            }
          })
          chrome.tabs.sendMessage(tabs[0].id, {type: itemValue, elemt: document.getElementById("getelemt").value});
          
        }
      );
}


document.getElementById("del").addEventListener("click", delthis);
