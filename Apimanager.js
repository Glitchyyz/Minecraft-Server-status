var Number , idnumberer = -1;
var List = {
    Server:
    {
    }
}

function ApiCall() {
    const serverIp = document.getElementById("ServerInput").value; // gets ip from user
    var apiUrl = `https://api.mcsrvstat.us/3/${serverIp}`;
    if(document.getElementById("toggle").checked ===true )
        {
            apiUrl = `https://api.mcsrvstat.us/bedrock/3/${serverIp}`
        }




    
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
            if(data.online === true)
            {
                localStorage.removeItem("deeznutz6969");
                
                List.Server[idnumberer + 1] = serverIp;
                localStorage.setItem("deeznutz6969",JSON.stringify( List))
                
                console.log(localStorage.getItem("deeznutz6969"));

                const moves = document.querySelectorAll('.minecraftServerList');
                const totalElements = moves.length;
                moves.forEach((div )=> {
                    const id = parseInt(div.id);
                     const invertedOffset = 250 * (totalElements - 1 - id) + 20;
                        div.style.top = `${invertedOffset}px`;
                        });
                
                var div = document.createElement("div");
                div.classList.add("minecraftServerList");
                div.id = idnumberer;
                div.style.position = "absolute"
                div.style.top = "20px";
                document.getElementById("ServerList").appendChild(div);
                var image = document.createElement("img");
                image.src = data.icon
                image.style.borderRadius ="15px";
                document.getElementById(idnumberer).appendChild(image);
                var div1 = document.createElement("div");
                div1.classList.add("greenDot");
                document.getElementById(idnumberer).appendChild(div1);
                
                var h3 = document.createElement("h3");
                h3.innerHTML = data.motd.html;
                h3.style = "font-size: 15px;font-family:Arial, Helvetica, sans-serif; background:black;"
                    document.getElementById(idnumberer).appendChild(h3);
                var h2 = document.createElement("h2");
                h2.style = "font-size: 15px;font-family:Arial, Helvetica, sans-serif; text-align: center;" ;
                h2.innerText =  data.version+ "\n Players: " + data.players.online + "/" + data.players.max+"\n"+serverIp  ;
                document.getElementById(idnumberer).appendChild(h2);
                
                idnumberer++;
                 
            
            
            }else
            {
                document.getElementById("Image").src = null;
                document.getElementById("checkmark").innerText = ""
                document.getElementById("ServerStuff").innerText = "Server Offline";
            }

        })
        .catch(error => {
            console.error('Error:', error); // Log  errors
        });
    }


function copyip(){
    const copyText = document.getElementById("ServerInput").value;
    navigator.clipboard.writeText(copyText);

}
function Clear(){
    idnumberer = -1;
    List = {
        Server:
        {
        }
    }
    const moves = document.querySelectorAll('.minecraftServerList');
                moves.forEach((div )=> {
                    div.remove();
                        });
}   
