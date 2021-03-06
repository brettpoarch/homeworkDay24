import io from 'socket.io-client'
import store from '../store'
//const socket = io.connect('http://localhost:3001')
const socket = io.connect('http://192.168.0.29:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})