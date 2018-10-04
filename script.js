
newform.onsubmit = function()
{
    event.preventDefault();
    var username = document.getElementsByName("username")[0];
     var secletcity =document.getElementById("city");
     var zipcode = document.getElementsByName("zipcode")[0].value;
     var isvalid = true;
      if (username .value == "")
      {
          console.log("Enter your name");
          isvalid = false;
        
      }
      if(city.value ="sc")
      {
        console.log("please select your option");
        isvalid = false;

      }
      if( document.querySelector(".genderclas:checked")==null)
      {
        console.log("check this radion btton");
        isvalid = false;

      }
   if(!Number(zipcode))
   {
    console.log("please number in zipcode");
    isvalid = false

   

   }

      if(isvalid)
      {
        newform.submit();
      }


 


}
