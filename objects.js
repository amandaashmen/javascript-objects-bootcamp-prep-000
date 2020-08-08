var playlist = {jb: 'intentions'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName= songTitle
}

function removeFromPlaylist(playlist, name) {
  delete playlist.name
}