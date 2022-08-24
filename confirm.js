let flight_id=localStorage.getItem("flightid");

           let var1 =localStorage.getItem("b1");
           let var2 =localStorage.getItem("b2");
           let var3 =localStorage.getItem("b3");
           let var4 =localStorage.getItem("b4");
           let var5 =localStorage.getItem("b5");
           let var6 =localStorage.getItem("b6");


let var7=sessionStorage.getItem("firstName1");
let var8=sessionStorage.getItem("lastName1");
let var9=sessionStorage.getItem("age1");
let var10=sessionStorage.getItem("gender1");

flight_id-=1;


console.log(flight_id);

fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));



let content='';

function display_value(data)
{
departure=new Date(data[flight_id].departTime);
arrival=new Date(data[flight_id].ArrivalTime);

content += `

        <div class="column">
        <div class="card" >
        <h3> Flight Details: </h3>
        <h4> ${data[flight_id].flightNum}</h4>
        <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
        <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
        <h4>Departure: <span>${departure.toUTCString()} </span></h4>
        <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
        <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
        </div>
<br>
        <div id="Passenger1">
        <h3>Passenger1 Details: </h3>
        <h5>Name: ${var1} ${var2}</h5>
        <h5>Age: ${var3}</h5>
        <h5>Gender: ${var6}</h5>
        <h5>Email: ${var4}</h5>
        <h5>Phone number: ${var5}</h5>
        </div>
<br>

        <div style="display:none" id="newPassenger">
        <h3> Passenger2 Details:</h3>
        <h5> Name: ${var7} ${var8}</h5>
        <h5> Age: ${var9} </h5>
        <h5> Gender: ${var10} </h5>
        <h5>Email: ${var4}</h5>
        <h5>Phone number: ${var5}</h5>
          
        </div>
        </div>

 


`
document.querySelector("#card-collection1").innerHTML = content;

if(var7!=null) {
    document.getElementById('newPassenger').style = "display:true";
}
else{
    document.getElementById('newPassenger').style.display = none;

}

}
