import React from 'react'

interface props {
  postId: number
}

export const page = ({ postId }: props) => {
  return (
    <div>{ postId }</div>
  )
}
