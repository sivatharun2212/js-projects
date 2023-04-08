
let button = document.querySelector(".check-btn");
let resultSpace = document.querySelector(".result");


button.addEventListener("click", () => {

let firstPersonName = document.querySelector(".name1").value.toLowerCase().replace(/\s/g, "");

let secondPersonName = document.querySelector(".name2").value.toLowerCase().replace(/\s/g, "");

if(firstPersonName || secondPersonName != ""){


}else{
    resultSpace.innerHTML = "First enter names"
}
for(let i=0; i<firstPersonName.length;i++){
    for(let j=0;j<secondPersonName.length;j++){
        if(firstPersonName[i] == secondPersonName[j]){
            let a1 = firstPersonName.substring(0,i);
            let a2 = firstPersonName.substring(i+1,firstPersonName.length);
            firstPersonName = a1+a2;
            i=-1;

            let b1 = secondPersonName.substring(0,j);
            let b2 = secondPersonName.substring(j+1,secondPersonName.length);
            secondPersonName = b1+b2;
            j=-1;
            break;
        }
    }
}

let mergedName = firstPersonName+secondPersonName;
let count = mergedName.length;
let flamesArr = ["f","l","a","m","e","s"];
let step = 1;
for(let x=6; x>1; x--){
    let letterToBeRemoved=((count%flamesArr.length)+step)-1;
    if(letterToBeRemoved>flamesArr.length){
        letterToBeRemoved=letterToBeRemoved%flamesArr.length;
    }
    if(letterToBeRemoved==0){
        letterToBeRemoved=flamesArr.length;
    }
    flamesArr.splice(letterToBeRemoved-1,1);
    step=letterToBeRemoved;
}

flames = {
    "f":"friends",
    "l":"lovers",
    "a":"affection",
    "m":"marriage",
    "e":"enemies",
    "s":"siblings"
}

let result = flames[flamesArr[0]]
resultSpace.innerHTML = result;



})





