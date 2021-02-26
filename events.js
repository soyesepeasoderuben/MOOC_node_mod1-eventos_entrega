// Clase EventEmitter.
// Modifica la temperatura de una habitacion.
// Metodos:
//    on
//    emit
class EventEmitter {
	
	constructor() {
		this.listeners = [];
	}

	on(eventName, listener) {
        (this.listeners[eventName] = (this.listeners[eventName] || [])).push(listener);
	}

	emit() {
        const [eventName, eventParameters] = arguments;
        (this.listeners[eventName] || []).forEach(listener => listener(eventParameters));
 	}
}

exports = module.exports = EventEmitter;
