import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { PokemonImage } from '../components/pokemon/pokemon-image'

export default component$(() => {
  const pokemonId = useSignal<number>(1)
  const showBackImage = useSignal<boolean>(false)
  const pokemonVisible = useSignal<boolean>(true)

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return

    pokemonId.value += value
  })

  const toggleBackPokemonImage = $(() => {
    showBackImage.value = !showBackImage.value
  })

  const togglePokemonVisible = $(() => {
    pokemonVisible.value = !pokemonVisible.value
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{pokemonId.value}</span>

      <PokemonImage pokemonId={pokemonId.value} backImage={showBackImage.value} isVisible={pokemonVisible.value} />

      <div class="mt-10 flex gap-5">
        <button onClick$={() => changePokemonId(-1)} class="rounded bg-purple-600 px-4 py-2 font-semibold text-white">
          Anterior
        </button>

        <button
          onClick$={() => toggleBackPokemonImage()}
          class="rounded bg-purple-600 px-4 py-2 font-semibold text-white"
        >
          Voltear
        </button>

        <button
          onClick$={() => togglePokemonVisible()}
          class="rounded bg-purple-600 px-4 py-2 font-semibold text-white"
        >
          Revelar
        </button>

        <button onClick$={() => changePokemonId(1)} class="rounded bg-purple-600 px-4 py-2 font-semibold text-white">
          Siguiente
        </button>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pokeqwik',
  meta: [
    {
      name: 'description',
      content: 'Aprendiendo Qwik'
    }
  ]
}
