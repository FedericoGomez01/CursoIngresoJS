/*4.
Gomez Federico 1H

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta 
al mismo precio de $35 pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene 
un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de 
otra marca el descuento es del 30%.

C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace 
un descuento del 25 % y si es de otra marca el descuento es del 20%.

D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, 
si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precio;
    var precioFinal;
    var marca;
    var descuento;
    var sindescuento;

    // Entrada de datos
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;


    precio = 35;
    precioFinal = cantidadLamparas * precio;


    if(cantidadLamparas > 5) // precioFinal= 210    sinDescuento= 105      descuento=105
    {

        sindescuento =0.5;
    }
    else
    {
        //Ejercicio B
        if(cantidadLamparas == 5)// precioFinal = 175   sinDescuento = 70   descuento =105
        {
            if(marca == "ArgentinaLuz")
            {
                sindescuento = 0.4;
            }
            else //precioFinal = 175  sinDescuento = 
            {
                sindescuento = 0.3;
            }
        }
        else 
        {
            if(cantidadLamparas == 4)// precioFinal = 140   sinDescuento = 35   descuento =105
            {
                if(marca == "ArgentinaLuz" && marca == "FelipeLamparas")
                {
                    sindescuento = 0.25;
                }
                else
                {
                    sindescuento = 0.20;
                }
            }
            else
            {
                if(cantidadLamparas == 3)// precioFinal = 105   sinDescuento = 15,75   descuento =89.25
                {
                    if(marca == "ArgentinaLuz")
                    {
                        sindescuento = 0.15;
                    }
                    if(marca == "FelipeLamparas")
                    {
                        sindescuento = 0.1;
                    }
                    else 
                    {
                        sindescuento = 0.05;
                    }
                }
                
            }
        }
    }

    descuento = precioFinal - (precioFinal*sindescuento);
    if(descuento > 120)
    {
        iibb = descuento * 1.10;
        alert("Usted paga un 10% de ingresos brutos");
        document.getElementById("txtIdprecioDescuento").value = iibb;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = descuento;
    }

}
