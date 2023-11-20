function formatDate(inputDate) {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    let hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    let period = "am";
  
    if (hour >= 12) {
      hour -= 12;
      period = "pm";
    }
  
    if (hour === 0) {
      hour = 12;
    }
  
    const formattedDate = `${month} ${day}, ${year}, ${hour}:${minute.toString().padStart(2, '0')} ${period}`;
    return formattedDate;
  }
  
  // ------------------Contoh penggunaan-----------------------
  const inputDate = "2001-03-10 17:16:51";
  const formattedOutput = formatDate(inputDate);
  console.log(formattedOutput);
  