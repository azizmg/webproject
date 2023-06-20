const cityName = document.getElementById('cityName')
const submitbtn = document.getElementById('submitbtn')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const datahide=document.querySelector('.middle_layer')
const getinfo = async (event) => {
    event.preventDefault()
    let cityval = cityName.value;
    if (cityval == "") {
        city_name.innerText = "Please Write the city name before search";
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=12ce1755283b8149376a8f0517fb5f8c`
            const response = await fetch(url)
            const data = await response.json();
            const arrdata = [data]
            const cityn=arrdata[0].name
            if(cityval=='sahiwal'){
                city_name.innerText = `Sahiwal.${arrdata[0].sys.country}` ;
            }
            else{
            city_name.innerText = `${arrdata[0].name}.${arrdata[0].sys.country}`;
              }
            temp.innerText = `${arrdata[0].main.temp}`;
            const tempmode = arrdata[0].weather[0].main;
            if (tempmode == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#0eccc68;'></i><p style='font-size:10px'>clear</p>";
            }
            else if (tempmode == "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i><p style='font-size:10px'>cloudy</p>"
            }
            else if (tempmode == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i><p style='font-size:10px'>rain</p>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#0eccc68;'></i><p style='font-size:10px''margin-left:25px'>clear</p>";
            }
            // console.log(arrdata)
            datahide.classList.remove('data_hide')
        } catch { 
            city_name.innerText = "Please Write the city name properly";
            datahide.classList.add('data_hide')
     }
    }
}
submitbtn.addEventListener('click', getinfo);
// ______________________Date 
const today_date=document.getElementById('today_date')
const day=document.getElementById('day')
var month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
var dayname = [
    'Sun',
    'Mon',
    'Tus',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
   
    
]
gettm=()=>{
    let dt=new Date();
    let dat=dt.getDate();
    let td=dayname[dt.getDay()];
    let mt=month[dt.getMonth()]
today_date.innerHTML=`${dat}&nbsp &nbsp${mt}`;
day.innerHTML=`${td}`;

}
gettm();