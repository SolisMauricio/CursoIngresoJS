function CalcularPrecio () 
{  
 //Mauricio Solis del Castillo. DIV Z. Grupo 2. TP 04 (integreador clase 07)

    var cantidadDeLamparas;
    var marcaDeLamparas;
    var precioConDescuento;
    var precioDeLamparas;
    var totalBruto;
    var importeMasImpuestos;
    precioDeLamparas = 35;
   
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marcaDeLamparas = document.getElementById("Marca").value;
    
    totalBruto = cantidadDeLamparas * precioDeLamparas;

    if(cantidadDeLamparas > 5)
    {
        precioConDescuento = totalBruto * 0.50;
    }
    else
    {
        switch(cantidadDeLamparas)
        {
            case 5:
                if(marcaDeLamparas == "ArgentinaLuz")
                {
                    precioConDescuento = totalBruto *0.40;
                }
                else
                {
                    precioConDescuento = totalBruto *0.30;
                }
                break;  
            case 4:
                if(marcaDeLamparas == "ArgentinaLuz" || "FelipeLamparas")
                {
                    precioConDescuento = totalBruto *0.25;
                }
                else
                {
                    precioConDescuento = totalBruto *0.20; 
                }
                break;    
            case 3:
                if(marcaDeLamparas == "ArgentinaLuz")
                {
                    precioConDescuento = totalBruto *0.15;
                }
                else
                {
                    if(marcaDeLamparas == "FelipeLamparas")
                    {
                        precioConDescuento = totalBruto *0.10;
                    }
                    else
                    {
                        if(!(marcaDeLamparas == "ArgentinaLuz" || "FelipeLamparas"))
                        {
                            precioConDescuento = totalBruto *0.05;
                        }
                    }
                }
                break;              
        }           
    }
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
     
    if(precioConDescuento > 120)
    {
        importeMasImpuestos = precioConDescuento * 0.1;
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento + importeMasImpuestos;
        alert("IIBB Usted pagó $" + importeMasImpuestos);
    }
}





// /*4.	Para el departamento de iluminación:
// Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
// A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
// B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
// C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
// D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
// E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
// ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//  */
// function CalcularPrecio () 
// //Mauricio Solis del Castillo. DIV Z. Grupo 2. TP 04 Parte A (integreador clase 05)
// {
//     var cantidadDeLamparas;
//     var marcaDeLamparas;
//     var precioConDescuento;
//     var precioDeLamparas;
//     var totalBruto;
//     var importeMasImpuestos;
//     precioDeLamparas = 35;
   
//     cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
//     cantidadDeLamparas = parseInt(cantidadDeLamparas);
//     marcaDeLamparas = document.getElementById("Marca").value;
    
//     totalBruto = cantidadDeLamparas * precioDeLamparas;

//     if(cantidadDeLamparas > 5)
//     {
//         precioConDescuento = totalBruto * 0.50; 
//     }
//     else
//     {
//         if(cantidadDeLamparas == 5)
//         {
//             if(marcaDeLamparas == "ArgentinaLuz")
//             {
//                 precioConDescuento = totalBruto *0.40;
//             }
//             else
//             {
//                 precioConDescuento = totalBruto *0.30;
//             }    
//         }
//         else  
//         {
//             if(cantidadDeLamparas == 4)
//             {
//                 if(marcaDeLamparas == "ArgentinaLuz" || "FelipeLamparas")
//                 {
//                     precioConDescuento = totalBruto *0.25;
//                 }
//                 else
//                 {
//                     precioConDescuento = totalBruto *0.20;
//                 }
//             }
//             else
//             {
//                 if(cantidadDeLamparas == 3)
//                 {
//                     if(marcaDeLamparas == "ArgentinaLuz")
//                     {
//                         precioConDescuento = totalBruto *0.15;
//                     }
//                     else
//                     {
//                         if(marcaDeLamparas == "FelipeLamparas")
//                         {
//                             precioConDescuento = totalBruto *0.10;
//                         }
//                         else
//                         {
//                             if(!(marcaDeLamparas == "ArgentinaLuz" || "FelipeLamparas"))
//                             {
//                                 precioConDescuento = totalBruto *0.05;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }   
//     document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
     
//     if(precioConDescuento > 120)
//      {
//          importeMasImpuestos = precioConDescuento * 0.1;
//          document.getElementById("txtIdprecioDescuento").value = precioConDescuento + importeMasImpuestos;
//          alert("IIBB Usted pagó $" + importeMasImpuestos);
//      }
// }

