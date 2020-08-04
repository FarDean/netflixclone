const tabItems= Array.from(document.querySelectorAll('.tab-item'));
const tabContentItems = Array.from(document.querySelectorAll('.tab-content-item'));

function selectItem(e){
    for(let i = 0;i<tabItems.length;i++){
        tabItems[i].classList.remove("tab-border");
        tabContentItems[i].style.display = 'none'
    }
    
    this.classList.add('tab-border')
}

tabItems.forEach((item,index)=> item.addEventListener('click',(e)=>{
    for(let i = 0;i<tabItems.length;i++){
        tabItems[i].classList.remove("tab-border");
        tabContentItems[i].classList.remove('active');
    }
    item.classList.add('tab-border');
    tabContentItems[index].classList.add('active');
}))