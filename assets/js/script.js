let btn_click = document.getElementById("btn_click").onclick =function AddRow() {
    

    document.getElementById("table").style.display="block";
    let firstName=document.getElementById("firstName").value
    let lastName=document.getElementById("flastName").value
    let old=document.getElementById("old").value


   let list1=[0];
   let list2=[0];
   let list3=[0];

   let x=0;
   let n=1;
   function AddRow(){
    let AddRown=document.getElementById("table");
    let NewRow=AddRown.insertRow(n);
    
    list1[x]=document.getElementById("firstName").value;
    list2[x]=document.getElementById("lastName").value;
    list3[x]=document.getElementById("old").value;

    let cel1=NewRow.insertCell(0);
    let cel2=NewRow.insertCell(1);
    let cel3=NewRow.insertCell(2);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];

    


    

   }
   



}