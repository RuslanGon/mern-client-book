import { useEffect, useState } from "react"

const FavoriteBooksPage = () => {

 const [books, setBooks] = useState([])
 
 useEffect(() => {
  fetch('http://localhost:5000//all-books').then(res => res.json()).then(data => console.log(data))
 }, [])

  return (
    <div>FavoriteBooksPage</div>
  )
}

export default FavoriteBooksPage