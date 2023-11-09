import { useStoreState } from 'easy-peasy'
import React from 'react'

const Footer = () => {
  const postCount = useStoreState(state => state.pageCount);
  return (
    <footer className='Footer'>
      {/* Copyright &copy; {new Date().getFullYear()} */}
      <p>{postCount}</p>
    </footer>
  )
}

export default Footer