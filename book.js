function printname(){

    var fn = document.getElementById("fname").value;
                localStorage.setItem("b1",fn);

                var ln = document.getElementById("lname").value;
                localStorage.setItem("b2",ln);

                var ag = document.getElementById("age").value;
                localStorage.setItem("b3",ag);

                var em = document.getElementById("email").value;
                localStorage.setItem("b5",em);

                var ph = document.getElementById("number").value;
                localStorage.setItem("b6",ph);

                var gen = document.getElementById("rad").value;
                var gender_value;

                if (document.getElementById("male2").checked) {
                gender_value = document.getElementById("male2").value;
                console.log("Selected male");
                }
                    
                else if(document.getElementById("female2").checked){
                    gender_value = document.getElementById("female2").value;
                    
                    
                }else if(document.getElementById("other2").checked){
                    gender_value = document.getElementById("other2").value;
                   
                }  
                localStorage.setItem("b4",gender_value);
            }

            
            
        
        
            function formvalidation() {
                var firstname =
                    document.forms.RegForm.fname.value;
                var lastname =
                    document.forms.RegForm.lname.value;
                var Email =
                    document.forms.RegForm.email.value;
                var phone =
                    document.forms.RegForm.number.value;
                var ageyr =
                    document.forms.RegForm.age.value;

                
                
                var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
                var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
                var regName = /\d+$/g; 
                //var regAge=/^\d{3}$/;                                   // Javascript reGex for Name validation
 
                if (firstname == "" || regName.test(firstname)) {
                    window.alert("Please enter your first name properly.");
                    firstname.focus();
                    return false;
                }
                if (lastname == "" || regName.test(lastname)) {
                    window.alert("Please enter your last name properly.");
                    lastname.focus();
                    return false;
                }
 
                 
                if (Email == "" || !regEmail.test(Email)) {
                    window.alert("Please enter a valid e-mail address.");
                    Email.focus();
                    return false;
                }
                  
 
                if (phone == "" || !regPhone.test(phone)) {
                    alert("Please enter valid phone number.");
                    phone.focus();
                    return false;
                }
                
 
                
 
                return true;
            }
                
            
            function doCheck(){
                var allFilled = true;
            
                var inputs = document.getElementsByTagName('input');
                for(var i=0; i<inputs.length; i++){
                    if(inputs[i].type == "text" && inputs[i].value == ''){
                        allFilled = false;
                        break;
                    }
                }
            
                document.getElementById("button1").disabled = allFilled;
                document.getElementById("button2").disabled = !allFilled;

            }
            
            window.onload = function(){
                var inputs = document.getElementsByTagName('input');
                for(var i=0; i<inputs.length; i++){
                    if(inputs[i].type == "text"){
                        inputs[i].onkeyup = doCheck;
                        inputs[i].onblur = doCheck;
                    }
                }
            };



            function getvalue(){

                var fname2=document.getElementById("firstName1").value;
                sessionStorage.setItem("firstName1",fname2);
                var lname2=document.getElementById("lastName1").value;
                sessionStorage.setItem("lastName1",lname2);
                var age2=document.getElementById("age1").value;
                sessionStorage.setItem("age1",age2);
                var gender = document.getElementById("radio").value;
                       var gender_value1;
       
                       if (document.getElementById("male1").checked) {
                       gender_value1 = document.getElementById("male1").value;
                       }
                           
                       else if(document.getElementById("female1").checked){
                           gender_value1 = document.getElementById("female1").value;
                           
                       }else if(document.getElementById("other1").checked){
                           gender_value1 = document.getElementById("other1").value;
                       
                       }  
                       sessionStorage.setItem("gender1",gender_value1);
                     }
          
           
   
   
   
   
   
         function callvalue(){
           if(document.getElementById('addpassenger').checked) {
             document.getElementById('new').style.display='block';
             document.getElementById('button1').style.display='none';
   
           } else{
             document.getElementById('new').style.display='none';
             document.getElementById('button1').style.display='block';
           }
         }
        