import './styles.css'

const Container = ({ children }) => {
  return (
    <main className="container">
      <header>
        <h1>Evercode Inc. 📱</h1>
      </header>
      {children}
    </main>
  )
}

export default Container;
