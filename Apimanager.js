function ApiCall() {

    const serverIp = document.getElementById("ServerInput").value; // gets ip from user
    const apiUrl = `https://mcapi.us/server/status?ip=${serverIp}`;
    const imageUrl = `https://mcapi.us/server/image?ip=${serverIp}`;

    
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
            document.getElementById("ServerStuff").innerText = data.server.name+ "\n" + data.players.now + "/" + data.players.max   ;
            document.getElementById("Image").src = data.favicon
            ;

        })
        .catch(error => {
            console.error('Error:', error); // Log  errors
        });
    }
    

    

