import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/pokemoncontext'
import { Loader } from '../components/Loader'
export const PokemonPage = () => {
  const { getPokemonId } = useContext(PokemonContext)
  const [loading, setloading] = useState(true)
  const [pokemon, setpokemon] = useState({})
  const {id} = useParams()

  const fetchPokemon = async(id)=>{
    const data = await getPokemonId(id)
    setpokemon(data)
    setloading(false)
  }
  useEffect(()=>{
    fetchPokemon(id)
  },[id])

  return (
    <main className='container main-pokemon'>
    {loading ? (
      <Loader />
    ) : (
   
      <>
        <div className='header-main-pokemon'>
          <div className="contenedor-pokemon">
          <span className='number-pokemon'>#{pokemon.id}</span>
          <div className='container-img-pokemon'>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon?.name}`}
            />
          </div>
          </div>
          

          <div className='container-info-pokemon'>
            <h1 className='text-capitalize'>{pokemon.name}</h1>
            <div className="pokemon-types">
                  {
                    pokemon.types.map(type =>(
                        <span className={`type ${type.type.name}`} key={type.type.name} >{type.type.name}</span>
                    ))
                  }
                    
                  
                </div>
            <div className='info-pokemon'>
              <div className='group-info'>
                <p>Altura</p>
                <span>{pokemon.height}</span>
              </div>
              <div className='group-info'>
                <p>Peso</p>
                <span>{pokemon.weight}KG</span>
              </div>
            </div>
          </div>
        </div>

        <div className='container-stats'>
          <h1>Estadísticas</h1>
          <div className='stats'>
            <div className='stat-group'>
              <span>Hp</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[0].base_stat>100?({width:100+'%'}):({width:pokemon.stats[0].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%', backgroundColor:'#2EFF00'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[0].base_stat}
              </span>
            </div>
            <div className='stat-group'>
              <span>Attack</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[1].base_stat>100?({width:100+'%'}):({width:pokemon.stats[1].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%', backgroundColor:'#EC2727'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[1].base_stat}
              </span>
            </div>
            <div className='stat-group'>
              <span>Defense</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[2].base_stat>100?({width:100+'%'}):({width:pokemon.stats[2].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%',backgroundColor:'#472D6B'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[2].base_stat}
              </span>
            </div>
            <div className='stat-group'>
              <span>Special Attack</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[3].base_stat>100?({width:100+'%'}):({width:pokemon.stats[3].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%',backgroundColor:'#FD0000'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[3].base_stat}
              </span>
            </div>
            <div className='stat-group'>
              <span>Special Defense</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[4].base_stat>100?({width:100+'%'}):({width:pokemon.stats[4].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%',backgroundColor:'#1F0742'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[4].base_stat}
              </span>
            </div>
            <div className='stat-group'>
              <span>Speed</span>
              <div style={{width:100+'%'}}>
                <div id="contenedor" style={pokemon.stats[5].base_stat>100?({width:100+'%'}):({width:pokemon.stats[5].base_stat+'%'})}>
                  <div id="barra" style={{width:100+'%',backgroundColor:'#81DFEA'}} >
                    </div>
                  </div>
                </div>
              <span className='counter-stat'>
                {pokemon.stats[5].base_stat}
              </span>
            </div>
          </div>
        </div>
      </>
    )}
  </main>
  )
}