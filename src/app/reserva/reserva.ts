export class Reserva {
    constructor (
        public fecha: string,
        public hora: string,
        public tiempo: string,
        public nombreResponsable: string,
        public identificacionResponsable: string,
        public telefonoResponsable: string,
        public cancha: string,
        public valor: number
    ) {}
}
