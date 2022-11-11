let btn_add = document.getElementById("btn_add").onclick =function () {
    

    // document.getElementById("table").style.display="block";
    let firstName=document.getElementById("name").value
    let lastName=document.getElementById("lastName").value
    let old=document.getElementById("age").value
   
    let st_table=document.querySelector("tbody");
    st_table.innerHTML+=`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${old}</td>
  </tr>
    `
}