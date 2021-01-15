class Guitars {
  constructor(attributes) {
    let whitelist = [`description`, `name`, `url`]
    whitelist.forEach(attr => this[attr] = attributes[attr])
  }


  static all() {
    return fetch("http://localhost3000/guitars")
  }


}


class Reviews {
  constructor(attributes) {
    let whitelist = [`comments`, `user_id`, `guitar_id`]
    whitelist.forEach(attr => this[attr] = attributes[attr])
  }
}