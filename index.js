const dropList = document.querySelectorAll(".drop select");

for(let i = 0; i < dropList.length; i++){
    for(currency_code in country_code){
        let selected;
        if(i = 0){
            selected = currency_code == "USD" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}
