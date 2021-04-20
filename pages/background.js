import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="Mountains"
        src="/breakfast-area.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className={bgText}>
      Blougans B{'&'}B
    </div>
  </div>
)

export default Background
