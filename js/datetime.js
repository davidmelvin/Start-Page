function time(){
    var now= new Date(),
    ampm= 'am',
    h= now.getHours(),
    m= now.getMinutes(),
    s= now.getSeconds();
    if(h>= 12){
        if(h>12)h-= 12;
        ampm= 'pm';
    }
    if(m<10) m= '0'+m;
    if(s<10) s= '0'+s;
    return h +':'+m+':'+s+' '+ampm;
}
function date(){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var today = new Date(),
    day = days[today.getDay()],
    month = months[today.getMonth()],
    date = today.getDate(),
    year = today.getFullYear();
    return day + ', ' + month + ' ' + date + ', ' + year;

}
function write(){
    document.getElementById('time').innerHTML= time();
    document.getElementById('date').innerHTML = date();
}
setInterval(
    function(){
        write();}, 1000);