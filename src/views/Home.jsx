import { Section } from '../components'
import items from '../data/Songs'

function Home() {
  const types = items.map((item) => item.type)
  const uniqTypes = [...new Set(types)]

  return (
    <div className="grid gap-y-8">
      {uniqTypes.map((type, index) => (
        <Section
          key={index}
          title={type}
          more="/blabalba"
          items={items.filter((item) => item.type === type)}
        />
      ))}
    </div>
  )
}

export default Home
