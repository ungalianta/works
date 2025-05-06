import React from 'react'

export const Rating = () => {
  return (
    <div>
        <label for="hero">Ваша оценка:</label>
        <input type="number" min="1" max="10"></input>
        <button>Сохранить оценку</button>
    </div>
  )
}
