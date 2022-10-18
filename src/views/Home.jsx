import { Section } from '../components'

function Home() {
  const items = [
    {
      id: 1,
      title: 'Death Grip',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d00001e02a3a7f38ea2033aa501afd4cf',
      type: 'Chill',
    },
    {
      id: 2,
      title: 'Death Grip',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Chill',
    },
    {
      id: 3,
      title: 'The Monkey Store',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d00001e02b4f8459b0f719f8a97ee1c8c',
      type: 'Focus',
    },
    {
      id: 4,
      title: 'Death Grip',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Focus',
    },
    {
      id: 5,
      title: 'Death Grip',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Focus',
    },
    {
      id: 6,
      title: 'Death Grip Energy',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
    },
    {
      id: 7,
      title: 'Death Grip Energy',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
    },
    {
      id: 8,
      title: 'Death Grip Energy',
      description: 'Unavarage Gang',
      image: 'https://i.scdn.co/image/ab67616d0000b273ebccffa708da341c28bccebe',
      type: 'Energy',
    },
  ]

  const Energy = items.filter((item) => item.type === 'Energy')
  const Chill = items.filter((item) => item.type === 'Chill')
  const Focus = items.filter((item) => item.type === 'Focus')

  return (
    <div className="grid gap-y-8">
      <Section title="Energy" more="/blabalba" items={Energy} />
      <Section title="Chill Out" more="/blabalba" items={Chill} />
      <Section title="Focus" more="/blabalba" items={Focus} />
    </div>
  )
}

export default Home
