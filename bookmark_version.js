javascript:(()=>{console.info("Note: The Project Whitelist Requirement Checker plugin may not work if boincstats changes the layout of the page. This plugin was designed with multiple assumptions about the page layout");var e="background-color:green;border:1px solid black;color:white;text-align:center;font-size:25px",o="background-color:red;border: 1px solid black;color:white;text-align:center;font-size:25px";const t=document.getElementById("tblStats"),n=document.getElementsByClassName("tablescroller")[0];var l=[];for(const e of t.rows)if(e.classList.contains("odd"))for(const o of e.cells)text=o.textContent,curNum=parseInt(text.replaceAll(",","")),isNaN(curNum)||l.push(curNum);var c=0;for(number of l.slice(0,20))0===number&&c++;console.log("ZCD: "+c);var r=document.createElement("div"),s="ZCD is "+c;c<=7?(r.style=e,console.log("ZCD check passed"),s+=" (pass) "):(r.style=o,console.log("ZCD check failed"), s+=" (fail) "),r.appendChild(document.createTextNode(s)),r.append(document.createElement("br")),n.prepend(r);var i=0;for(number of l.slice(0,40))i+=number;var d=0;for(number of l.slice(0,7))d+=number;const u=d/7/(i/40);console.log("WAS "+u);var m=document.createElement("div"),p="WAS ratio is "+u.toFixed(4)+"…";u>=.1?(m.style=e,console.log("WAS check passed"),p+=" (pass) "):(m.style=o,console.log("WAS check failed"),p+=" (fail) "),a=document.createElement("br");m.appendChild(document.createTextNode(p)),m.appendChild(a),n.prepend(m)})();
