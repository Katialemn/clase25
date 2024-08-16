const net = require('net');

const server = net.createServer();

server.on('connection' , (socket) =>{  //Evento connection para aceptar nuevas conexiones de clientes con la devolucion de llamada socket.
    socket.on('data', (data) => {   //El servidor (socket)maneja el evento data para recibir y mostrar mensajes de los cientes. Socket representa la conexion entre el servidor y el cliente
        console.log('El cliente' + socket.remoteAddress + " :  " + socket.remotePort + " dice: " + data);
        socket.write('Mensaje Recibido');  //El servidor responde a los mensajes de los clientes con Mensaje Recibido .
    
        }); 
    
server.on('close', () => {
        console.log('Comunicación Finalizada');
        });
    
server.on('error', (err)=> { //El servidor maneja el evento error par mostrar cualquier evento que ocurra
        console.log(err.message);
        });
 
});

server.listen(5000,() => { //El servidor escucha en el puerto 5000.
    console.log('servidor esta esuchando en el puerto', server.address());

});

