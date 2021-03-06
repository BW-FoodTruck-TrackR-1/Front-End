import axios from 'axios'

export const axiosWithAuth = () => {
  //sets our token to the localstorage
  const token = localStorage.getItem("token")
  return axios.create({
    //sets the base working url so we dont have to type out the whole address in axios calls
    // baseURL: "https://food-truck-back-end.herokuapp.com/",
    headers: {
      Authorization: token
    }
  })
} 