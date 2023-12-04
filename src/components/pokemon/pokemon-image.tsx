import { component$, useSignal, useTask$ } from '@builder.io/qwik'

interface PokemonImageProps {
  pokemonId: number
  size?: number
  backImage?: boolean
  isVisible?: boolean
}

export const PokemonImage = component$((props: PokemonImageProps) => {
  const { pokemonId, size = 150, backImage = false, isVisible = true } = props

  const imageLoaded = useSignal<boolean>(false)

  useTask$(({ track }) => {
    track(() => pokemonId)

    imageLoaded.value = false
  })

  let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`

  if (!backImage) imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

  return (
    <div class="flex items-center justify-center" style={{ widows: `${size}px`, height: `${size}px` }}>
      {!imageLoaded.value && <span class="text-2xl">Cargando...</span>}
      <img
        src={imageUrl}
        alt="Pokemon Sprite"
        width={size}
        height={size}
        onLoad$={() => {
          imageLoaded.value = true
        }}
        class={[
          {
            hidden: !imageLoaded.value,
            'brightness-0': !isVisible
          },
          'transition-all duration-500 ease-in-out'
        ]}
      />
    </div>
  )
})
