import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDucks'
import Detalle from './Detalle'
const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    //console.log(pokemones)

    return (
        <div className="row">
            <div className="col-md-5">
                <h3>Lista de Pokemones</h3>
                <div className="d-flex justify-content-start d-grid gap-2">

                    {
                        pokemones.length === 0 &&
                        <button onClick={() => dispatch(obtenerPokemonesAccion())}
                            className="btn btn-primary btn-sm">Obtener</button>
                    }
                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())}
                            className="btn btn-success btn-sm">Anterior</button>
                    }
                    {
                        next &&
                        <button onClick={() => dispatch(siguientePokemonAccion())}
                            className="btn btn-success btn-sm">Siguiente</button>
                    }

                </div>

                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li key={item.name} className="list-group-item text-uppercase">
                                {item.name}
                                <button className="btn btn-info float-end"
                                onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                                >Info</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-5">
                <h3>Detalle del Pokémon</h3>
                <Detalle/>
            </div> 
        </div>
    )
}

export default Pokemones
