  let patron = ["Sv. Peter a Sv.Pavol", "Sv. Ondrej", "Sv. Jakub st.","Sv. Ján","Sv. Tomáš","Sv. Jakub ml.","Sv. Filip","Sv. Bartolomej","Sv. Matúš","Sv. Šimon", "Sv. Tadeáš","Sv. Matej"];
  
  const date = new Date();
  let dayWeek = date.getDay();
  let month = date.getMonth();

  let rm = document.getElementById("rm").children
  rm[dayWeek + 1].style.display = "block";

  let mj = document.getElementById("mj").children
  mj[dayWeek + 2].style.display = "block"

  let vm = document.getElementById("vm").children
   vm[dayWeek + 1].style.display = "block"

let pat = document.getElementById("pat")
pat.innerHTML = patron[month] 