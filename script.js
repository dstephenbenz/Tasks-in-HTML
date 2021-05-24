async function getToken() {
    try {
        const clientId = "c874b3e4bfb34f66aefdf74d3cb9ca17";
        const clientSecret = "33f3f7df44cb4c11a06f303a447f27bc";
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
            },
            body: "grant_type=client_credentials",

        });
        const data = await result.json();
        console.log(data);
        const token = data.access_token;
        getData(token);

    } catch (err) {
        console.log(err)
    }

}
async function getData(token) {

    try {
        let resp = await fetch("https://api.spotify.com/v1/playlists/5jcwYGwEg9tvAxm9YbRrcw", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            }

        });
        const data = await resp.json();
        console.log(data);
        displayData(data);

    } catch (err) {
        console.log(err);
    }
}

function displayData(val) {
    console.log(val.tracks.items[2].track.album);

    let tbody = document.querySelector('#tbody');
    var s = 1;
    for (var i = 0; i < val.tracks.items.length; i++) {

        if (val.tracks.items[i].track !== null) {

            const name = val.tracks.items[i].track.album.name;
            const avatar = val.tracks.items[i].track.album.images[0].url;
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = s;
            let td2 = document.createElement('td');
            let image1 = document.createElement('img');
            image1.src = avatar;
            td2.innerHTML = image1.src;
            let td3 = document.createElement('td');
            td3.innerHTML = name;
            let td4 = document.createElement("td");
            td4.innerHTML = `
        <a type="button" class="btn text-warning btn-link btn-sm" onClick ="addTracks()">Addtrack</a>
        <a type="button" class="btn text-danger btn-link btn-sm" onClick = "deleteTracks()">Delete</a>
        `;
            tr.append(td1, td2, td3, td4);
            tbody.append(tr);
            s++;
        }
    }

    // for (var i = 0; i < val.tracks.items.length; i++) {
    //     let i = 1;
    //     if (val.tracks.items[i].track !== null) {
    // const newdiv = document.createElement('div');
    // const trackName = document.createElement('h6');

    // trackName.innerText = name;
    // const image1 = document.createElement('img');
    // image1.src = avatar;
    // newdiv.append(trackName);
    // newdiv.append(image1);
    // let seconddiv = document.getElementById('container');
    // seconddiv.append(newdiv);

}

function addTracks() {
    getToken();
    async function getToken() {
        try {
            const clientId = "c874b3e4bfb34f66aefdf74d3cb9ca17";
            const clientSecret = "33f3f7df44cb4c11a06f303a447f27bc";
            const result = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
                },
                body: "grant_type=client_credentials",

            });
            const data = await result.json();
            console.log(data);
            const token = data.access_token;
            addPlayList(token);

        } catch (err) {
            console.log(err)
        }
    }
}
async function addPlayList(token) {

    try {
        let resp = await fetch("https://api.spotify.com/v1/playlists/5jcwYGwEg9tvAxm9YbRrcw/tracks", {
            method: "POST",
            body: { "uris": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json',
            }

        });
        const data = await resp.json();
        console.log(data);

    } catch (err) {
        console.log(err);

    }

}
async function deleteTracks(token) {
    try {
        let resp = await fetch("https://api.spotify.com/v1/playlists/5jcwYGwEg9tvAxm9YbRrcw", {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            }

        });
        const data = await resp.json();
        console.log(data);

    } catch (err) {
        console.log(err);
    }

}
async function reorderTracks(token) {
    try {
        let resp = await fetch("https://api.spotify.com/v1/playlists/5jcwYGwEg9tvAxm9YbRrcw/tracks", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            }

        });
        const data = await resp.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}