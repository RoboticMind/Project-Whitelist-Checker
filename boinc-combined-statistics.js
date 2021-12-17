console.info("Note: The Project Whitelist Requirement Checker plugin may not work if boinc.netsoft-online.com changes the layout of the page. This plugin was designed with multiple assumptions about the page layout")

function parseXML(text){
    parser = new DOMParser(); 
    xmlDoc = parser.parseFromString(text,"text/xml");
    return xmlDoc
}

function processData(xml){
    root = xml.children[0]
    tags = root.children

    len = tags.length

    totalCredits = []
    for(i=len-1; i>len-42; i--){
        curVal = parseInt(tags[i].textContent)
        totalCredits.push(curVal)
    }

    newCredit = []
    for (i=0; i<totalCredits.length-1; i++){
        newCredit.push(totalCredits[i] - totalCredits[i+1])
    }

    return newCredit
}
function displayData(rowData){
    const tableDiv = document.getElementsByClassName("nforumholder")[0]

    //ZCD check
    var zcdCount = 0
    for (number of rowData.slice(0,20)){
        if (number === 0){
            zcdCount++;
        }
    }

    //display results for ZCD
    console.log("ZCD: " + zcdCount)

    var zcdDiv = document.createElement("div")

    var zcdText = "ZCD is " + zcdCount;
    var br = document.createElement("br");

    if (zcdCount <= 7){
        zcdText += " (pass) "
        zcdDiv.classList.add("check-display-pass");
        console.log("ZCD check passed")
    } else {
        zcdText += " (fail) "
        zcdDiv.classList.add("check-display-fail");
        console.log("ZCD check failed")
    }
    zcdDiv.appendChild(document.createTextNode(zcdText));
    zcdDiv.appendChild(br);
    tableDiv.prepend(zcdDiv);


    //WAS Check
    var sum40days = 0
    for (number of rowData.slice(0,40)) { //just in case something changes - we only want the last 40 days anyway
        sum40days += number;
    }
    var sum7days = 0
    for (number of rowData.slice(0,7)) {
        sum7days += number;
    }

    const avg40days = sum40days/40;
    const avg7days = sum7days/7;

    const ratio = avg7days/avg40days; 

    //display results for WAS
    console.log("WAS " + ratio);

    var wasDiv = document.createElement("div")

    var wasText = "WAS ratio is " + ratio.toFixed(4) + "…";
    var br = document.createElement("br");

    if (ratio >= 0.1){
        wasText += " (pass) ";
        wasDiv.classList.add("check-display-pass");
        console.log("WAS check passed");
    } else {
        wasText += " (fail) "
        wasDiv.classList.add("check-display-fail");
        console.log("WAS check failed");
    }
    wasDiv.appendChild(document.createTextNode(wasText));
    wasDiv.appendChild(br);
    tableDiv.prepend(wasDiv)


}


params=new URLSearchParams(window.location.search)
projectID = params.get("project")

requestParams = new URLSearchParams()
requestParams.append("projectid", projectID)
requestURL = "https://boinc.netsoft-online.com/rpc/get_project_tc_history.php?" + requestParams.toString()


fetch(requestURL)
      .then(response => response.text())
      .then(data => parseXML(data))
      .then(processData)
      .then(displayData)