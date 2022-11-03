let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
btn.onclick = ()=> {
    nav.classList.toggle("open");
};
mask.onclick = () => {
    nav.classList.toggle("open");

};
window.setInterval( ()=> {
    document.getElementById( "timer" ).innerHTML = new Date().toLocaleString();
  }, 1000 );
  window.onload = ()=> {
    document.getElementById('btn').onclick = ()=> {
      window.alert('送信されました。');
    }
  }
