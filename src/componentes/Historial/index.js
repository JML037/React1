import  React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";
import mandoLogo from "../../images/mandoLogo.jpg";
import img01 from '../../images/img01.jpg';
import img05 from '../../images/img05.jpg';
import img02 from '../../images/img02.jpg';
import img08 from '../../images/img08.jpg';
import img10 from '../../images/img10.jpg';

const TablaHistorial = [
    { id: <img src={img10} alt="logo" width="50px"/>, nombre: "EVGA 700 GD, 80+ GOLD 700W", Precio: "S/.460", Fecha: "03/07/22" },
    { id: <img src={img01} alt="logo"width="70px"/>, nombre: "Logitech G pro ", Precio: "S/.440", Fecha: "15/08/22" },
    { id: <img src={img05} alt="logo" width="40px"/>, nombre: " AMD Ryzen 7 5800X de 8 núcleos y 16 subprocesos", Precio: "S/.1400", Fecha: "23/06/22" },
    { id: <img src={img02} alt="logo" width="70px"/>, nombre: "Logitech G Pro X Lightspeed", Precio: "S/.700", Fecha: "28/09/22" },
    { id: <img src={img08} alt="logo" width="50px"/>, nombre: "Monitor ASUS TUF Gaming 23.8»", Precio: "S/.969", Fecha: "10/10/22" },
    






];

const columnas = [
    {
        name: 'Producto',
        selector: 'id',
        sortable: true
    },
    {
        name: "Nombre",
        selector: 'nombre',
        sortable: true

    },
    {
        name: 'precio',
        selector: 'Precio',
        sortable: true

    },

    {
        name: "fecha",
        selector: 'Fecha',
        sortable: true
    }

]


export const Historial = () => {
    return (
        <div>
            <DataTable
            columns={columnas}
            data={TablaHistorial}
            title="Historial de compra"
            />
        </div>
    );
}

export default Historial;