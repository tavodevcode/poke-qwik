import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const {
    params: { id }
  } = useLocation()

  return <div>Pokemons {id}</div>
})
