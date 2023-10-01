
let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")




setInterval(() => {
     let time = new Date()
     date.innerHTML = time.getDate();
     month.innerHTML = time.getMonth() + 1;
     day.innerHTML = time.getDay();
     year.innerHTML = time.getFullYear();
     hrs.innerHTML = (time.getHours()<10?"0":"") + time.getHours();
     min.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();
     sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds();
},1000)

