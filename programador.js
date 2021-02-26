const EventEmitter = require('./events');

// Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();

// Clase Programador.
// Modifica la temperatura de una habitacion.
class Programador extends EventEmitter {

	constructor(configurations) {
		super();

		this.configurations = configurations;

		// para cancelar los temporizadores setInterval:
		this.intervalIds = [];
    
        this.configurations.forEach(configuration => {
            // Crear planificación para todos los dias a la hora indicada
            const sched = later.parse.text('at ' + configuration.hora);

            // Crear un temporizador que emita indefinidamente un evento
            // en los instantes planificados anteriormente:
            this.intervalIds.push(later.setInterval(() => this.emit('ideal', configuration.temperatura), sched));
        }); 
	}
}

exports = module.exports = Programador;