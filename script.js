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
    var x, y, z;
    let img1 = val.images[0].url;
    console.log(img1);
    let name = val.name;
    console.log(name);
    //let trk = data.tracks['items'][0].track;
    //console.log(trk);
    for (var i = 0; i < 7; i++) {
        if (val.tracks['items'][i].track !== null) {
            x = val.tracks['items'][i].track.name;
            y = val.tracks['items'][i].track.popularity;
            z = val.tracks['items'][i].track.preview_url;
            console.log(x, y, z);
        }

    }
    document.getElementById('name').value = name;
    document.getElementById('sngname').value = x;
    document.getElementById('popular').value = y;
    document.getElementById('prvtrack').value = z;

}
async function addTracks(token) {
    try {
        let resp = await fetch("https://api.spotify.com/v1/playlists/5jcwYGwEg9tvAxm9YbRrcw/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M", {
            method: "POST",
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