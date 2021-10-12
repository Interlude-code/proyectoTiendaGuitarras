
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import {useState} from "react";
import {BuscadorContext} from './context/BuscadorContext'
import {SeleccionadoContext} from './context/Seleccionado';
import Private from './layouts/private';
import Pruebas from './pages/pruebas';
import Login from './components/Login';
import NewGuitarPage from './pages/NewGuitarPage'

function App() {

  const [busqueda, setBusqueda] = useState('');
  const [seleccionado,setSeleccionado] = useState('');
 
  return (
    <div >
    <SeleccionadoContext.Provider value={{seleccionado, setSeleccionado}}>
    <BuscadorContext.Provider value={{busqueda, setBusqueda}}>
      <Router>
        <Switch>
          <Route path ={['/dashboard','/newGuitar','/moduloVentas','/moduloVentas/detalleVenta', '/moduloVentas/editarVenta','/moduloClientes', 'moduloClientes/nuevoCliente','/moduloClientes/detalleCliente',' /moduloClientes/paginaEditarCliente', '/productos', '/productos/detalleProducto', '/productos/nuevoProducto','/productos/actualizarProducto','/rolesUsuarios', '/rolesUsuarios/detalleUsuario','/rolesUsuarios/nuevoUsuario','/moduloVendedores', '/moduloVendedores/detalleUsuario','/moduloVendedores/paginaEditarUsuarios','/rolesUsuarios/detalleUsuarios']}> 
            <Private>
              <Switch>
                <Route path='/dashboard'>
                  <Pruebas/>
                </Route>
                <Route path='/newGuitar'>
                  <NewGuitarPage/>
                </Route>
              </Switch>
            </Private>
          </Route>
          <Route path={['/']}>
            <Login/> 
          </Route>
        </Switch>
      </Router>
    </BuscadorContext.Provider>
    </SeleccionadoContext.Provider>
    </div>
  );
}

export default App;
