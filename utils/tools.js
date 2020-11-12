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
export const toDateISO = (date) => {
  date = new Date(date);
  return [
      date.getFullYear(), 
      (date.getMonth()+1).toString().padStart(2,'0'),
      date.getDate().toString().padStart(2,'0')  
  ].join('-')
}

export default {
  formatDate,
  formatNum,
  toDateISO
}