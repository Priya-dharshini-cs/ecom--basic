var ProductsContainer= document.getElementById("product")
var Search=document.getElementById("Search")
var productList=ProductsContainer.querySelectorAll("div")

Search.addEventListener("keyup",function(){
    var EnteredValue= event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1){
        var productName=productList[count].querySelector("p").textContent
        if(productName.toUpperCase().indexOf(EnteredValue)<0){
            productList[count].style.display="none"
        }
        else{
           productList[count].style.display= "block"
        }
        }
        

    }
)