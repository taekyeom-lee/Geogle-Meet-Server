const createPeerServerListeners = (peerServer) => {
  peerServer.on('connection', (client) => {
    console.log('successfully connecter to peer js server');
    console.log(clinet.id);
  });
};

module.exports = {
  createPeerServerListeners
};