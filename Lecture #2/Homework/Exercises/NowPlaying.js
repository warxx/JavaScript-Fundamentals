/**
 * Created by warXx_ on 5/28/2017.
 */
function nowPlaying(arr) {

    let songName = arr[0];
    let artistName = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${artistName} – ${songName} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09'])