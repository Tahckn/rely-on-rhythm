import { Section } from '../components'

function Home() {
  const items = [
    {
      id: 1,
      title: 'Moonlight Reprise',
      description: 'Kai Engel',
      image: 'https://i.scdn.co/image/ab67616d00001e02a3a7f38ea2033aa501afd4cf',
      type: 'Piano',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Irsens_Tale/Kai_Engel_-_04_-_Moonlight_Reprise.mp3',
    },
    {
      id: 9,
      title: 'Death Grip',
      description: 'Independent Music Library',
      image: 'https://i.scdn.co/image/ab67616d00001e02a3a7f38ea2033aa501afd4cf',
      type: 'Piano',
      src: 'https://cdn.freesound.org/previews/639/639487_11943129-lq.mp3',
    },
    {
      id: 2,
      title: "Summer's Day",
      description: 'Independent Music Library',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Chill',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/Fu1XPKEb2e4lcEocPsDuNHloNLKHHU72hcUP7Mgc.mp3',
    },
    {
      id: 10,
      title: 'RSPN',
      description: 'Blank & Kytt',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Chill',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blank__Kytt/Heavy_Crazy_Serious/Blank__Kytt_-_08_-_RSPN.mp3',
    },
    {
      id: 3,
      title: 'The Circle of Fifths',
      description: 'Bus Window',
      image: 'https://i.scdn.co/image/ab67616d00001e02b4f8459b0f719f8a97ee1c8c',
      type: 'Instrumental',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/5e4IH2IDWeuPrwCSgbUsm0Js1VKy3aozpGcpHc1z.mp3',
    },
    {
      id: 4,
      title: 'Night Owl',
      description: 'Broke For Free',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Instrumental',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    },
    {
      id: 5,
      title: 'Rainy Days',
      description: 'Independent Music Library',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Instrumental',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/IM0o2v0d413BQvl5HxKwSpV4JNpdeyfhsnXiee2B.mp3',
    },
    {
      id: 6,
      title: 'Getting It',
      description: 'Double-F the King',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/13Qwc34NjvtzfyKM4h5bZhcJgNsNnI4XrqctIJZc.mp3',
    },
    {
      id: 7,
      title: 'Tension In The Air',
      description: 'HoliznaCC0',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/lRAv3I6kZS9zdv49CEUnPONSwToogtKVurnJqvqg.mp3',
    },
    {
      id: 8,
      title: '12 Zero Daze',
      description: 'kaleidoplasm',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
      src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/3BiQrAaYQ1A3DENOeXJcEzLQV0geMHpQy45sMVy5.mp3',
    },
  ]

  //* TO ADD MORE MUSIC STYLE

  const Energy = items.filter((item) => item.type === 'Energy')
  const Chill = items.filter((item) => item.type === 'Chill')
  const Instrumental = items.filter((item) => item.type === 'Instrumental')
  const Piano = items.filter((item) => item.type === 'Piano')

  return (
    <div className="grid gap-y-8">
      <Section title="Energy" more="/blabalba" items={Energy} />
      <Section title="Chill Out" more="/blabalba" items={Chill} />
      <Section title="Instrumental" more="/blabalba" items={Instrumental} />
      <Section title="Peaceful Piano" more="/blabalba" items={Piano} />
    </div>
  )
}

export default Home
