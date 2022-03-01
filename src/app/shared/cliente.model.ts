export interface Cliente{
    DNI: string;
    Pass:string;
    Nombre?:string;
    Direccion?:string;
    Telefono?:string;
    Facturas?: Factura[];
}

export interface Factura{
    Id: number;
    Fecha: Date;
    EsPagada: Boolean;
    EsAnulada: Boolean;
    Lineas: Linea [];
    DameTotal: number;
}

export interface Linea {
    NumLinea: number;
    Precio: number;
}