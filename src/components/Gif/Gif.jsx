import styles from './gif.module.css'

function Gif({title,id,url}) {
  return (
    <a href={`#${id}`} className={styles.gif}>
      <h4 className={styles.gifTitle}>{title}</h4>
      <img src={url} alt={title} className={styles.gifImg}/>
    </a>
  )
}

export default Gif
