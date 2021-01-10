const formatDate = (date, use_option = true, time = true, short = false,year = true) => {
  var d = new Date(date)
  var lang = 'th'

  if (use_option) {
    var options = { month: short ? 'short' : 'long', day: 'numeric' };
    if(year){
      options.year = 'numeric'
    }
    if(time){
       options.hour = '2-digit'
       options.minute = '2-digit'
    }
    return d.toLocaleDateString(lang, options);
  }
  else {
    var options = {month: '2-digit', day: 'numeric' };
    if(year){
      options.year = 'numeric'
    }
    if(time){
       options.hour = '2-digit'
       options.minute = '2-digit'
    }

    return d.toLocaleDateString(lang, options).replace(/\//g, '-');
  }
}


const formatNum = (num) => {
    num = parseFloat(num);
    return (
      num
        .toFixed(2) // always two decimal digits
        .replace(',', '.') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    ) // use . as a separator
}

const calculate = (startTime, endTime) => {
  if(!startTime || !endTime) return;
  var total_time = '';
  var time1 = startTime.split(':'), 
  time2 = endTime.split(':');
  var hours1 = parseInt(time1[0], 10),
  hours2 = parseInt(time2[0], 10),
  
  mins1 = parseInt(time1[1], 10),
  mins2 = parseInt(time2[1], 10);
  var hours = hours2 - hours1, mins = 0;
  if (hours < 0) hours = 24 + hours;
  if (mins2 >= mins1) {
      mins = mins2 - mins1;
  }
  else {
      mins = (mins2 + 60) - mins1;
      hours--;
  }
  // mins = mins / 60; // take percentage in 60
  // hours += mins;
  // hours = hours.toFixed(2);
  // total_time = hours;
  total_time = hours +':'+mins
  return total_time;
}

export const toDateISO = (date) => {
  date = new Date(date);
  return [
      date.getFullYear(), 
      (date.getMonth()+1).toString().padStart(2,'0'),
      date.getDate().toString().padStart(2,'0')  
  ].join('-')
}

export const formToObject = (formData)=>{
  var object = {};
  formData.forEach((value, key) => {
    if(object[key])
      object[key] = [...object[key],value];
    else
      object[key] = value;
  });
    // console.log('object', object);
  return object;

}

export default {
  formatDate,
  formatNum,
  toDateISO,
  calculate
}