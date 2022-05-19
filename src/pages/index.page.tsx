import style from './Home/Home.module.scss';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.topbar}/>
      <h1 className={style.title}>Bem-vindo ao Lista Rango</h1>

      <input placeholder='Buscar estabelecimento' className={style.input}/>
    </div>
  )
}

export default Home
