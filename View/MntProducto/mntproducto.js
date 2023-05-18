let tabla;
const tbodyproducto_data = document.querySelector('#producto_data')

const init=()=>{

};
 const obtenerDatos = async () => {
     try {
       const respuesta = await axios.get('../../Controller/Producto.php?op=listar');
       const datos = respuesta.data;
       
       console.log(datos);
     } catch (error) {
       console.error('Error al obtener los datos:', error);
     }
   };
  
  obtenerDatos();

  $('#producto_data').DataTable({
    responsive: true,
    language: {
      searchPlaceholder: 'Search...',
      sSearch: '',
      lengthMenu: '_MENU_ items/page',
    }
  });



// const editar = (prod_id) =>{
//     console.log(prod_id);
// }

// const eliminar = (prod_id) =>{
// console.log(prod_id);
// }
// init();