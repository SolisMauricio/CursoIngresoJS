/* Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.*/

function mostrar()
{

    var deposito;
    var productoIngresado;
    var descripcionDelProducto;
    var kilosAIngresar;
    var acumuladorDeKilos;
    var contadorDeProductos;
    var respuesta;

    respuesta = "si";

    do 
    {
        productoIngresado = prompt("Producto a ingresar: ");
        descripcionDelProducto = prompt("Descripcion del producto: ");
        do
        {
            kilosAIngresar = prompt("Peso total de los productos :");
            isNaN(kilosAIngresar);
            kilosAIngresar = parseFloat(kilosAIngresar);
            deposito = prompt("Ingrese el deposito : \n Avellaneda (20.000KG) \n" +
            "CABA (25.000KG) \n" +  
            "Lanus (15.000 KG) \n");
        } while(isNaN(kilosAIngresar) && (deposito == "CABA" && kilosAIngresar > 25000 || deposito == "Avellaneda" && kilosAIngresar > 20000 || deposito == "Lanus" && kilosAIngresar >15000));
        
        respuesta = prompt("Quiere seguir ingresando productos? (si|no)");

    }while(respuesta == "si");
}





