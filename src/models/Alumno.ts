export class Alumno {
    nombre: string;
    edad: number;
    curso: string;
    promedio: number;
    fechaInscripcion: string;

    constructor(nombre: string, edad: number, curso: string, promedio: number, fechaInscripcion: string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.promedio = promedio;
        this.fechaInscripcion = fechaInscripcion;
    }

    public static obtenerAlumnos(): Alumno[] {
         const alumnos: Alumno[] = [
            new Alumno("Juan Pérez", 18, "A", 5, "2023-09-24T12:00:00Z"),
            new Alumno("María García", 19, "B", 8.7, "2023-09-24T12:00:00Z"),
            new Alumno("Carlos Rodríguez", 20, "A", 7.8, "2023-09-24T12:00:00Z"),
            new Alumno("Ana López", 19, "C", 8.9, "2023-09-24T12:00:00Z"),
            new Alumno("Pedro Martínez", 18, "B", 9.2, "2023-09-24T12:00:00Z"),
            new Alumno("Luisa Sánchez", 20, "A", 8.0, "2023-09-24T12:00:00Z"),
            new Alumno("Miguel Torres", 19, "C", 7.5, "2023-09-24T12:00:00Z"),
            new Alumno("Sofía González", 18, "B", 9.7, "2023-09-24T12:00:00Z"),
            new Alumno("Javier Ramírez", 20, "A", 8.6, "2023-09-24T12:00:00Z"),
            new Alumno("Laura Díaz", 19, "C", 8.4, "2023-09-24T12:00:00Z"),
            new Alumno("Andrés Romero", 18, "A", 9.0, "2023-09-24T12:00:00Z"),
            new Alumno("Paola Cruz", 20, "B", 3.0, "2023-09-24T12:00:00Z"),
            new Alumno("Diego Vargas", 19, "C", 8.1, "2023-09-24T12:00:00Z"),
            new Alumno("Valentina Ortega", 18, "A", 9.3, "2023-09-24T12:00:00Z"),
            new Alumno("Fernando Silva", 20, "B", 3.1, "2023-09-24T12:00:00Z"),
            new Alumno("Isabel Paredes", 19, "C", 4, "2023-09-24T12:00:00Z"),
            new Alumno("Eduardo Morales", 18, "A", 9.4, "2023-09-24T12:00:00Z"),
            new Alumno("Adriana Torres", 20, "B", 7.7, "2023-09-24T12:00:00Z"),
            new Alumno("Raúl Jiménez", 19, "C", 8.3, "2023-09-24T12:00:00Z"),
            new Alumno("Carmen Navarro", 18, "A", 9.6, "2023-09-24T12:00:00Z"),
        ];
        return alumnos;
    }
}