// Start fetch Card
let fetchCard = async () => {
  let htmlCard = ""
  let resCard = await fetch("http://localhost:3000/products")
  let dataCard = await resCard.json()
  dataCard.forEach((elem) => {
    htmlCard += `
        <div class="card card-compact bg-base-100 w-96 shadow-xl mt-8">
        <figure>
          <img
            src=${elem.imgSrc}
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${elem.title}</h2>
          <p>${elem.description}</p>
          <div class="card-actions justify-between items-center ">
            <span class="items-center btn bg-neutral-950 text-white">${elem.price} تومان</span>
            <button class="btn bg-neutral-950 text-white" id="basket">خرید</button>
          </div>
        </div>
      </div>
        `
    document.querySelector("div.card-container").innerHTML = htmlCard
  })
}

document.addEventListener("DOMContentLoaded", fetchCard)
// End fetch Card


// Start themes function
let aqua = document.querySelector("ul.menu>li#aqua")
let dark = document.querySelector("ul.menu>li#dark")
let luxury = document.querySelector("ul.menu>li#luxury")

// Start AquaTheme
let changeThemeAqua = () => {
  document.documentElement.setAttribute('data-theme', 'aqua');
}
aqua.addEventListener("click", changeThemeAqua)
// End AquaTheme


// Start DarkTheme
let changeThemeDark = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
}
dark.addEventListener("click", changeThemeDark)
// End DarkTheme

// Start luxuryTheme
let changeThemeLuxury = () => {
  document.documentElement.setAttribute('data-theme', 'luxury');
}
luxury.addEventListener("click", changeThemeLuxury)
// End luxuryTheme

// End theme function


// Start change basketTitle


setTimeout(() => {


  let basketTitle = document.querySelectorAll("button#basket")
  for (let i = 0; i < basketTitle.length; i++) {
    let counter = 1
    basketTitle[i].addEventListener("click", () => {
      basketTitle[i].innerHTML = ` <h4>در سبد خرید شما</h4> <span>${counter++}</span>`
    })

  }



},1000);

// End change basketTitle
// Start another page
$("a#going").click(()=>{
  window.location.href="form.html"
})

// End another page

//open modal


//close modal