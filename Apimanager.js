var Number , idnumberer = -1;
var List = {
    Server:
    {
    }
}
function ApiCall() {

    const serverIp = document.getElementById("ServerInput").value; // gets ip from user
    const apiUrl = `https://mcapi.us/server/status?ip=${serverIp}`;

    
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
            if(data.server.name != null)
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
                image.src = data.favicon
                document.getElementById(idnumberer).appendChild(image);
                var h1 = document.createElement("h1");
                h1.classList.add("onlinetext");
                h1.innerText = "online";
                document.getElementById(idnumberer).appendChild(h1);
                var h3 = document.createElement("h3");
                if(!Array.isArray(data.motd_json.extra))
                    {
                        h3.innerText ="";
                        h3.innerText=data.motd_json;
                    }else
                    {
                        h3.innerText = "motd not available"
                    }
                    document.getElementById(idnumberer).appendChild(h3);
                var h2 = document.createElement("h2");
                h2.style = "font-size: 20px;font-family:Pixelify Sans";
                h2.innerText =  data.server.name+ "\n" + data.players.now + "/" + data.players.max  ;
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
