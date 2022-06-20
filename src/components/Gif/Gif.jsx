import styles from './gif.module.css'
import { Link } from 'wouter'

function Gif({ title, id, url }) {
  return (
    <Link href={`/gif/${id}`}>
      <div className={styles.gif}>
        <h4 className={styles.gifTitle}>{title}</h4>
        <img src={url} alt={title} className={styles.gifImg} />
      </div>
    </Link>
  )
}

export default Gif
