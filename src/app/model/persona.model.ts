export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    contacto: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion:string, contacto:string, img: string,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.contacto = contacto;
        this.img = img;
    }
}