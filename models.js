class Guitars {
  constructor(attributes) {
    let whitelist = [`description`, `name`, `url`]
    whitelist.forEach(attr => this[attr] = attributes[attr])
  }

  static container() {
    return this.c ||= document.querySelector("#guitarsContainer")
  }

  // This is wrong...
  static card() {
    return this.c ||= document.querySelector("#card-body")
  }
 

  static all() {
    return fetch("http://localhost:3000/guitars", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        return res.text().then(error => Promise.reject(error))
      }
    })
    // what??
    .then(guitarsArray => {
      debugger
    })
  }
  render() {
    this.element ||= document.createElement("div")
    this.element.className = "col-md-4"
    this.element.innerHTML = `
    <div class="card shadow" style="width: auto;">
      <div class="inner">
        <img src="" class="card-img-top">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Link to Purchase</a>
      </div>
    </div>
    `
    this.element.querySelector("img").src = this.url
    this.element.querySelector(".card-title").textContent = this.name
    this.element.querySelector(".card-text").textContent = this.description
    return this.element
  }
}


class Reviews {
  constructor(attributes) {
    let whitelist = [`comments`, `user_id`, `guitar_id`]
    whitelist.forEach(attr => this[attr] = attributes[attr])
  }
}

