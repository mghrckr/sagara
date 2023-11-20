for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("Loop dihentikan karena i sama dengan 5");
      break; 
    }
  
    if (i === 2) {
      console.log("Nilai i = 2 akan dilewati");
      continue;
    }
  
    console.log(i);
  }
  