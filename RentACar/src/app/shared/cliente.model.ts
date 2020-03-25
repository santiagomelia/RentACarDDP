export interface Cliente{
    DNI: string;
    pass:string;
    Nombre?:string;
    Direccion?:string;
    Telefono?:string;
    facturas?: Factura[];
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