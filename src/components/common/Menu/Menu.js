import React, { forwardRef } from 'react'
import './Menu.css'
import MenuItem from './MenuItem/MenuItem'

const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
))

export default Menu
