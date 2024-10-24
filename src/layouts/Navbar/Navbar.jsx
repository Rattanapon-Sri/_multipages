import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ tab, setTab, products, carts, setToken, role }) {
  return (
    <div className='navbar-container'>
      <Link to={'/home'}>
        <button
          className={
            'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')
          }
          onClick={() => {
            setTab('home')
          }}
        >
          <span className='bi-house-door'>&nbsp;&nbsp;</span>Home
        </button>
      </Link>

      <Link to={'/calculator'}>
        <button
          className={
            'btn ' +
            (tab === 'calculator' ? 'btn-success' : 'btn-outline-success')
          }
          onClick={() => {
            setTab('calculator')
          }}
        >
          <span className='bi-calculator'>&nbsp;&nbsp;</span>Calculator
        </button>
      </Link>

      <Link to={'/animation'}>
        <button
          className={
            'btn ' +
            (tab === 'animation' ? 'btn-warning' : 'btn-outline-warning')
          }
          onClick={() => {
            setTab('animation')
          }}
        >
          <span className='bi-palette'>&nbsp;&nbsp;</span>Animation
        </button>
      </Link>

      <Link to={'/components'}>
        <button
          className={
            'btn ' +
            (tab === 'components' ? 'btn-info' : 'btn-outline-info')
          }
          onClick={() => {
            setTab('components')
          }}
        >
          <span className='bi-layers'>&nbsp;&nbsp;</span>Components
        </button>
      </Link>

      <Link to={'/todo'}>
        <button
          className={
            'btn ' + (tab === 'todo' ? 'btn-dark' : 'btn-outline-dark')
          }
          onClick={() => {
            setTab('todo')
          }}
        >
          <span className='bi-list-ul'>&nbsp;&nbsp;</span>Todo
        </button>
      </Link>

      <Link to={'/products'}>
        <button
          className={
            'btn ' +
            (tab === 'products' ? 'btn-success' : 'btn-outline-success')
          }
          onClick={() => {
            setTab('products')
          }}
        >
          <span className='bi-shop'>&nbsp;&nbsp;</span>Products ({products.length})
        </button>
      </Link>

      <Link to={'/carts'}>
        <button
          className={
            'position-relative btn ' +
            (tab === 'carts' ? 'btn-warning' : 'btn-outline-warning')
          }
          onClick={() => {
            setTab('carts')
          }}
        >
          <span className='bi-cart'>&nbsp;&nbsp;</span>Carts
          {carts.length > 0 && (
            <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {carts.length < 10 ? carts.length : '9+'}
              <span class='visually-hidden'>unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button
        className='btn btn-outline-danger'
        style={{ marginLeft: '1rem' }}
        onClick={() => setToken('')}
      >
        <span className='bi-box-arrow-right'>&nbsp;&nbsp;</span>Logout
      </button>
    </div>
  )
}

export default Navbar
