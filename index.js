const wrapper =document.querySelector(".sliderwrapper");
const menuItems=document.querySelectorAll(".menuItem")

function submitPayment() {
    
    window.location.href = 'payment.html';
  }
  

menuItems.forEach((item, index) => {
    item.addEventListener("click",()=> {
        wrapper.style.transform=`translateX(${-100 * index }vw)`;

    });
});