var arr = [
    {dp: "https://aisvip-a.akamaihd.net/masters/1221207/cristiano-ronaldo-bleibt-ein-freier-mann.jpg",story:"https://3.bp.blogspot.com/-NAmzui8fcDk/Vjiu6N1_kLI/AAAAAAAAAN8/ZeI8k2bosXs/s1600/cristiano-ronaldo3_3386467b.jpg"},
    {dp: "https://tse1.explicit.bing.net/th?id=OIP.jKHBRVWDytTl9XLqRRQ7kAHaJ4&pid=Api&P=0&h=180",story:"https://www.si.com/.image/t_share/MTY4MTAyNTc0Nzg3NDA1MDcz/messi-jersey-real-madridjpg.jpg"},
    {dp: "https://tse3.mm.bing.net/th?id=OIP.8k7loRjQxSgvJcgHj2AeGwHaD5&pid=Api&P=0&h=180",story:"https://wp.usatodaysports.com/wp-content/uploads/sites/96/2016/06/brock-lesnar-060616-getty-ftr_2jhdcyavt1es1ri8psb6yuw1x.jpg"},
    {dp: "https://tse3.mm.bing.net/th?id=OIP.7R1zVam7lGD0CFte9pV0DwHaHy&pid=Api&P=0&h=180",story:"https://wallpapercave.com/wp/wp2423728.png"},
];

var storiyan = document.querySelector("#storiyan")

 var clutter = "";
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
       <img id="${idx}" src="${elem.dp}" alt="">
   </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});