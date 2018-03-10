import axios from 'axios'
import {Alert} from 'react-native'

let Api = {
  login (user) {
    return axios.post(`https://limitless-gorge-54663.herokuapp.com/api/login`, user)
      .then(response => {
        if (response.status !== 200) {
          Alert.alert('Bad request.')
        } else {
          return response.data.user
        }
      })
  },
  registration (user) {
    return axios.post(`https://limitless-gorge-54663.herokuapp.com/api/users`, {user})
      .then(response => {
        console.log(response)
        this.setState({user: response.data.user, logout: false})
      })
      .catch(e => {
        console.log(e)
        Alert.alert(e.message)
      })
  }
}

export default Api
