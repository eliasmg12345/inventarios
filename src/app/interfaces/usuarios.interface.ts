export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export class Usuarios{
    
​​apellido_usuario:string;
email_usuario:string;
estado_cargo:string;
estado_usuario: string;
id_cargo:string;
id_oficina: string;
id_usuario: string;
nombre_cargo: string;
nombre_usuario:string;
password: string;
telefono_usuario: string;
}
export interface UserResponse extends Usuarios{
    message: string;
    token: string;
    userId: number;
    role: Roles;
  }