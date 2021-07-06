export class Om{
    id_oficina:number;
    nombre_oficina:string;
    nombre_material:string;
    id_tipo:number;
    fecha_compra:string;
    estado:string;
    descripcion_material:string;
    caracteristicas:string;
    id_material:number;
    cantidad:number;
    constructor(pid_oficina=0, 
                pnombre_oficina='',
                pnombre_material='',      
                pid_tipo=0,
                pfecha_compra='',
                pestado='',
                pdescripcion_material='',      
                pcaracteristicas='',
                pid_material=0,
                pcantidad=0){

            this.id_oficina=pid_oficina;
            this.nombre_oficina=pnombre_oficina;
            this.nombre_material=pnombre_material;
            this.id_tipo=pid_tipo;
            this.fecha_compra=pfecha_compra;
            this.estado=pestado;
            this.descripcion_material=pdescripcion_material;
            this.caracteristicas=pcaracteristicas;
            this.id_material=pid_material;
            this.cantidad=pcantidad;

    }
}