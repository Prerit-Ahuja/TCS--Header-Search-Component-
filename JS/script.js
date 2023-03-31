
// const sidenav = document.querySelector('.sidenav');
// const hamburger = document.querySelector('.navbar__hamburger');
// const hamburger2 = document.querySelector('.navbar__hamburger2');
// const search = document.querySelector('.navbar__btn4');
// const input = document.querySelector('.search__input');
// const cross = document.querySelector('.search__input__img');

// hamburger.addEventListener('click', ()=>{
//     hamburger.classList.toggle("modify");
//     sidenav.classList.toggle("show");
//     sidenav.classList.add("animate");
// })

// hamburger2.addEventListener('click', ()=>{
//     hamburger2.classList.toggle('modify');
//     sidenav.classList.toggle("show");
// })

// search.addEventListener('click', ()=>{
//     input.classList.toggle('show');
// })

// cross.addEventListener('click', ()=>{
//     input.classList.toggle('show');
//     suggest.classList.add("hide");
// })



// const sideLink = document.querySelector('.sidenav__link');
// const acc = document.querySelector('.sidenav__accordion');
// const arrow = document.querySelector('.sidenav__arrowdown');
// const sideLink2 = document.querySelector('.sidenav__accordion__head');
// const sideLink3 = document.querySelector('.sidenav__accordion__head2')
// const acc2 = document.querySelector('.sidenav__accordion2');
// const acc3 = document.querySelector('.sidenav__accordion3');
// const plus = document.querySelector('.sidenav__plus__bar2');
// const sideLink4 = document.querySelector('.sidenav__link5');
// const acc4 = document.querySelector('.sidenav__accordion4');

// sideLink.addEventListener('click', ()=>{
//     acc.classList.toggle('show');
//     arrow.classList.toggle('rotate180');
// })

// sideLink2.addEventListener('click', ()=>{
//     acc2.classList.toggle('show');
//     plus.classList.toggle('hide');
// })

// sideLink3.addEventListener('click', ()=>{
//     acc3.classList.toggle('show');
//     plus.classList.toggle('hide');
// })

// sideLink4.addEventListener('click', ()=>{
//     acc4.classList.toggle('show');
// }
// )

// plus.addEventListener('click', ()=>{
//     acc2.classList.toggle('show');
//     plus.classList.toggle('hide');
// })

// let arr = [];
// // Handlebars:
// var data = await fetch('./JS/data.json').then((resolve)=>{
//     return resolve.json()
//   }).then(value=>{
    
//     // myfunc(value);
//     return value;
// }).catch(value=>console.log(value))

//   var cards = document.querySelector('.my__cards');
//   cards.innerHTML = ourGeneratedHTML;
//   console.log(data.tcs);

//   arr = data.tcs;
// //   console.log(data);
// //   myfunc(data);

//   var template = document.getElementById('template').innerHTML;
//   var compiledTemplate = Handlebars.compile(template);
//   var ourGeneratedHTML = compiledTemplate(data);
  
//   cards.innerHTML = ourGeneratedHTML;
// //   console.log(cards.innerHTML);
//   function myfunc(data){
//     //cards.innerHTML = "";
//     var ourGeneratedHTML = compiledTemplate(data);
//     cards.innerHTML = ourGeneratedHTML;
//   }

//   cards.addEventListener('click', ()=>{
//     suggest.classList.add('hide');
//   })

//   const tag__btn = document.querySelectorAll('.tags__button');

//     let news__bool = false;
//     let blog__bool = false;
//     let solution__bool = false;
//     let events__bool = false;
//     let booleanarray = [false,false,false,false]

//     var newarray = [];
// function display(){ 
//     cards.innerHTML = "";
//     // var emptyarray =[];
//     for(let i=0; i<tag__btn.length; i++){
//         if(booleanarray[i] == true){
//             console.log(i,booleanarray[i]);
//             let displayData = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
//             // emptyarray.push(...displayData);
//             newarray.push(...displayData);
//             console.log(newarray);

//            myfunc({"tcs": newarray})
//         }
//     }
// }   

// // function displayFunc(){ 
// //     cards.innerHTML = "";
// //     var emptyarray =[];
// //     for(let i=0; i<tag__btn.length; i++){
// //         if(booleanarray[i] == true){
// //             console.log(i,booleanarray[i]);
// //             let displayData = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
// //             emptyarray.push(...displayData);
// //             // newarray.push(...displayData);
// //             // console.log(newarray);
             
// //            myfunc({"tcs": emptyarray});
// //         }
// //     }
// // }   
//   const suggest = document.querySelector('.suggestions');
    
//     const SearchInput = document.querySelector('.search__input__text');

//     SearchInput.addEventListener('change', e =>{
//     const value = e.target.value.toLowerCase();
//     console.log(value);
//     // let displayData = arr.filter(data=> data.title.toLowerCase().indexOf(value) > -1);

//     let newData = newarray.filter(data=> data.title.toLowerCase().indexOf(value) > -1);

//     // if(displayData.length == 0){
//     //     // cards.classList.toggle('style-card')
//     //     cards.innerHTML = "No Results Found !!";
//     // }
//     // else{
//     //     myfunc({"tcs":displayData}) 
//     //     suggest.classList.add("hide");
//     // }

//     if(newData.length == 0){
//         // cards.classList.toggle('style-card')
//         cards.innerHTML = "No Results Found !!";
//     }
//     else{
//         myfunc({"tcs":newData}) 
//         suggest.classList.add("hide");
//     }
// })

// SearchInput.addEventListener('input', e =>{
//     const value = e.target.value.toLowerCase();
//     console.log(value);
//     suggest.classList.remove("hide");
//     // let displayData = arr.filter(data=> data.title.toLowerCase().indexOf(value) > -1);
//     let newData = newarray.filter(data=> data.title.toLowerCase().indexOf(value) > -1);

//     console.log(newData);
//     var all = document.createElement("div");
   
//       suggest.innerHTML = "";
//       all.textContent = "";

//       if(newData.length == 0){
//         var text = document.createElement("div");
//         text.textContent = "No results found!";
//         all.append(text);
//     }

//     for(let i=0; i<newData.length; i++){
//         var text = document.createElement("div");
//         text.classList.add("style")
//         text.textContent = newData[i].title;
//         all.append(text);
//     }
//     suggest.append(all);
// })

// const All = document.querySelector('.tags__elements--item')
//     All.addEventListener('click', ()=>{
//         const result = arr;
//         All.classList.add('highlight');
        
//         myfunc({"tcs": result});
//     })

// // let newData = [];

// const News = document.querySelector('.tags__elements--item1');
// News.addEventListener('click', ()=>{
//     // const News__result = arr.filter(data => data.tag == "News");
//     // myfunc({"tcs": News__result});
//     News.classList.toggle('highlight');
//     All.classList.remove('highlight');
//     if(News.classList.contains('highlight')){
//         booleanarray[0]= true;
//         display();
//     }
//     else{
//         booleanarray[0]= false;
//         display();
//     }
// })

// const Blog = document.querySelector('.tags__elements--item2');
// Blog.addEventListener('click', ()=>{
//     // const News__result = arr.filter(data => data.tag == "News");
//     // myfunc({"tcs": News__result});
//     Blog.classList.toggle('highlight');
//     All.classList.remove('highlight');
//     if(Blog.classList.contains('highlight')){
//         booleanarray[1]= true;
//         display();
//     }
//     else{
//         booleanarray[1]= false;
//         display();
//     }
// })

// const Solution = document.querySelector('.tags__elements--item3');
// Solution.addEventListener('click', ()=>{
//     // const News__result = arr.filter(data => data.tag == "News");
//     // myfunc({"tcs": News__result});
//     Solution.classList.toggle('highlight');
//     All.classList.remove('highlight');
//     if(Solution.classList.contains('highlight')){
//         booleanarray[2]= true;
//         display();
//     }
//     else{
//         booleanarray[2]= false;
//         display();
//     }
// })

// const Events = document.querySelector('.tags__elements--item4');
// Events.addEventListener('click', ()=>{
//     // const News__result = arr.filter(data => data.tag == "News");
//     // myfunc({"tcs": News__result});
//     Events.classList.toggle('highlight');
//     All.classList.remove('highlight');
//     if(Events.classList.contains('highlight')){
//         booleanarray[3]= true;
//         display();
//     }
//     else{
//         booleanarray[3]= false;
//         display();
//     }
   
// })
// // for(let i=0; i<tag__btn.length; i++){
// //     tag__btn[i].addEventListener('click', ()=>{

// //         const highlight__result = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
// //         tag__btn[i].classList.toggle('highlight');
        
// //         if(tag__btn[i].classList.contains('highlight')){
             
// //             console.log(tag__btn[i].innerHTML);
// //             console.log(highlight__result);
// //             myfunc({"tcs": highlight__result}); 
// //         }
// //         else{
// //             const result = arr;
// //             myfunc({"tcs": result});
// //             console.log("false");
// //         }
// //     })
// // }

// // for(let i=0; i<tag__btn.length; i++){
// //     tag__btn[i].addEventListener('click', ()=>{

// //         news__bool = true;

// //         // const highlight__result = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
// //         tag__btn[i].classList.toggle('highlight');
        

// //     })
// // }

// const border = document.querySelector('.bottom');
// const drop1 = document.querySelector('.dropdown1__btn');

// drop1.addEventListener('onmouseover', ()=>{
//     border.classList.add('show');
// })



const sidenav = document.querySelector('.sidenav');
const sidenavContent = document.querySelector('.sidenav__content');
const hamburger = document.querySelector('.navbar__hamburger');
const hamburger2 = document.querySelector('.navbar__hamburger2');
const search = document.querySelector('.navbar__btn4');
const input = document.querySelector('.search__input');
const cross = document.querySelector('.search__input__img');

const sideLink = document.querySelector('.sidenav__link');
const acc = document.querySelector('.sidenav__accordion');
const arrow = document.querySelector('.sidenav__arrowdown');
const sideLink2 = document.querySelector('.sidenav__accordion__head');
const sideLink3 = document.querySelector('.sidenav__accordion__head2')
const acc2 = document.querySelector('.sidenav__accordion2');
const acc3 = document.querySelector('.sidenav__accordion3');
const plus = document.querySelector('.sidenav__plus__bar2');
const sideLink4 = document.querySelector('.sidenav__link5');
const acc4 = document.querySelector('.sidenav__accordion4');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("modify");
    sidenav.classList.toggle("show");
    sidenav.classList.add("animate");
})

hamburger2.addEventListener('click', ()=>{
    hamburger2.classList.toggle('modify');
    sidenav.classList.toggle("show");
})

search.addEventListener('click', ()=>{
    input.classList.toggle('show');
})

cross.addEventListener('click', ()=>{
    input.classList.toggle('show');
    suggest.classList.add("hide");
})



// const sideLink = document.querySelector('.sidenav__link');
// const acc = document.querySelector('.sidenav__accordion');
// const arrow = document.querySelector('.sidenav__arrowdown');
// const sideLink2 = document.querySelector('.sidenav__accordion__head');
// const sideLink3 = document.querySelector('.sidenav__accordion__head2')
// const acc2 = document.querySelector('.sidenav__accordion2');
// const acc3 = document.querySelector('.sidenav__accordion3');
// const plus = document.querySelector('.sidenav__plus__bar2');
// const sideLink4 = document.querySelector('.sidenav__link5');
// const acc4 = document.querySelector('.sidenav__accordion4');

sideLink.addEventListener('click', ()=>{
    acc.classList.toggle('show');
    arrow.classList.toggle('rotate180');
})

sideLink2.addEventListener('click', ()=>{
    acc2.classList.toggle('show');
    plus.classList.toggle('hide');
})

sideLink3.addEventListener('click', ()=>{
    acc3.classList.toggle('show');
    plus.classList.toggle('hide');
})

sideLink4.addEventListener('click', ()=>{
    acc4.classList.toggle('show');
}
)

plus.addEventListener('click', ()=>{
    acc2.classList.toggle('show');
    plus.classList.toggle('hide');
})

let arr = [];
// Handlebars:
var data = await fetch('./JS/data.json').then((resolve)=>{
    return resolve.json()
  }).then(value=>{
    
    // myfunc(value);
    return value;
}).catch(value=>console.log(value))

  var cards = document.querySelector('.my__cards');
  cards.innerHTML = ourGeneratedHTML;
  console.log(data.tcs);

  arr = data.tcs;
//   console.log(data);
//   myfunc(data);

  var template = document.getElementById('template').innerHTML;
  var compiledTemplate = Handlebars.compile(template);
  var ourGeneratedHTML = compiledTemplate(data);
  cards.innerHTML = ourGeneratedHTML;

  function myfunc(data){
    var ourGeneratedHTML = compiledTemplate(data);
    cards.innerHTML = ourGeneratedHTML;
  }

  cards.addEventListener('click', ()=>{
    suggest.classList.add('hide');
  })

  const tag__btn = document.querySelectorAll('.tags__button');

    let news__bool = false;
    let blog__bool = false;
    let solution__bool = false;
    let events__bool = false;
    let booleanarray = [false,false,false,false]


    var arrayList = [];
    

function display(){ 
    cards.innerHTML = "";
    var newarray = [];
    for(let i=0; i<tag__btn.length; i++){
        if(booleanarray[i] == true){
            // console.log(i,booleanarray[i]);
            let displayData = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
            newarray.push(...displayData);
            console.log(newarray);
           myfunc({"tcs": newarray})
        }
    }

    if(newarray.length == 0) newarray.push(...arr);
    myfunc({"tcs": newarray})

}   

function displayFunc(){ 
    cards.innerHTML = "";
    let emptyarray =[];
    for(let i=0; i<tag__btn.length; i++){
        if(booleanarray[i] == true){
            // console.log(i,booleanarray[i]);
            let displayData = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
            emptyarray.push(...displayData);
        }
    }
    if(emptyarray.length == 0) emptyarray.push(...arr)
    return emptyarray;
}   
  const suggest = document.querySelector('.suggestions');
    
    const SearchInput = document.querySelector('.search__input__text');

    SearchInput.addEventListener('change', e =>{
    const value = e.target.value.toLowerCase();
    // console.log(value);
    // console.log(displayFunc())
        var emptyarray = displayFunc();  

        // let emptyarray = displayFunc();
        const cardsData = [];
        emptyarray.forEach(element =>{
            const wordsArray = element.title.split(" ");
            // console.log(wordsArray);
    
            wordsArray.some(word =>{
                if(word.toLowerCase().indexOf(value)==0){
                    cardsData.push(element);
                    return true;
                }
            })
        })
        // console.log(cardsData);

    // let newData = emptyarray.filter(data=> data.title.toLowerCase().indexOf(value) > -1);
        // console.log(emptyarray)

    if(cardsData.length == 0){
        cards.innerHTML = "No Results Found !!";
    }
    else{
        myfunc({"tcs": cardsData}) 
        suggest.classList.add("hide");
    }
})


SearchInput.addEventListener('input', e =>{
    const value = e.target.value.toLowerCase();
    console.log(value);
    suggest.classList.remove("hide");
    // console.log(displayFunc())
    let emptyarray = displayFunc();
    const newData = [];
    emptyarray.forEach(element =>{
        const wordsArray = element.title.split(" ");
        // console.log(wordsArray);

        wordsArray.some(word =>{
            if(word.toLowerCase().indexOf(value)==0){
                newData.push(element.title);
                return true;
            }
        })
    })
    console.log(newData);
    // let newData = emptyarray.filter(data=> data.title.toLowerCase().indexOf(value) > -1);

    // console.log(newData);
    var all = document.createElement("div");
   
      suggest.innerHTML = "";
      all.textContent = "";

      if(newData.length == 0){
        var text = document.createElement("div");
        text.textContent = "No results found!";
        all.append(text);
    }
    

    for(let i=0; i<newData.length; i++){
        var text = document.createElement("div");
        text.classList.add("style")
        text.textContent = newData[i];
        all.append(text);
        text.addEventListener('click', ()=>{
            all.append(text);
        })
    }
    suggest.append(all);
})

const All = document.querySelector('.tags__elements--item')
    All.addEventListener('click', ()=>{
        const result = arr;
        All.classList.add('highlight');
        myfunc({"tcs": result});
    })

const News = document.querySelector('.tags__elements--item1');
News.addEventListener('click', ()=>{
   
    News.classList.toggle('highlight');
    All.classList.remove('highlight');
    if(News.classList.contains('highlight')){
        booleanarray[0]= true;
        display();
    }
    else{
        booleanarray[0]= false;
        display();
    }
})

const Blog = document.querySelector('.tags__elements--item2');
Blog.addEventListener('click', ()=>{
   
    Blog.classList.toggle('highlight');
    All.classList.remove('highlight');
    if(Blog.classList.contains('highlight')){
        booleanarray[1]= true;
        display();
    }
    else{
        booleanarray[1]= false;
        display();
    }
})

const Solution = document.querySelector('.tags__elements--item3');
Solution.addEventListener('click', ()=>{
   
    Solution.classList.toggle('highlight');
    All.classList.remove('highlight');
    if(Solution.classList.contains('highlight')){
        booleanarray[2]= true;
        display();
    }
    else{
        booleanarray[2]= false;
        display();
    }
})

const Events = document.querySelector('.tags__elements--item4');
Events.addEventListener('click', ()=>{
 
    Events.classList.toggle('highlight');
    All.classList.remove('highlight');
    if(Events.classList.contains('highlight')){
        booleanarray[3]= true;
        display();
    }
    else{
        booleanarray[3]= false;
        display();
    }
   
})
// for(let i=0; i<tag__btn.length; i++){
//     tag__btn[i].addEventListener('click', ()=>{

//         const highlight__result = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
//         tag__btn[i].classList.toggle('highlight');
        
//         if(tag__btn[i].classList.contains('highlight')){
             
//             console.log(tag__btn[i].innerHTML);
//             console.log(highlight__result);
//             myfunc({"tcs": highlight__result}); 
//         }
//         else{
//             const result = arr;
//             myfunc({"tcs": result});
//             console.log("false");
//         }
//     })
// }

// for(let i=0; i<tag__btn.length; i++){
//     tag__btn[i].addEventListener('click', ()=>{

//         news__bool = true;

//         // const highlight__result = arr.filter(data=> data.tag == tag__btn[i].innerHTML);
//         tag__btn[i].classList.toggle('highlight');
        

//     })
// }



