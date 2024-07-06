$('#enterBtn').on('click', function (){

    var jqxhr = $.ajax({

        url:'https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles',
        type: 'GET',
        dataType: 'json'

    })

    jqxhr.done(function(data){
        if(jqxhr.readyState === 4 && jqxhr.status === 200){
            alert("Suceess Getting ISS Data")
            console.log("Data From ISS", data)
            displayThead(data)
            displayBody(data)

        }
      
    })
    jqxhr.fail(function(error){
        alert("Unable to get Data")
        console.log(error)
    })
    jqxhr.always(function (){

        console.log(jqxhr.status)
        console.log(jqxhr.readyState)

    })


})



function displayThead(data){
    let tr =  document.getElementById('headOutput')
    let info = 0

    tr.innerHTML = ''

    for( value of data.values()){
    

        info = Object.keys(value)
        

    }

    info.splice(5, 8)


    for(item of info){

        let th = document.createElement('th')
        th.textContent = item
        tr.appendChild(th)


    }

    
  

}

function displayBody(data){
    console.log("Body Data",data)

    itemsInner = ``


    data.forEach(element => {

        itemsInner +=`
        
            <tr>
                <td>${element.name}</td>
                <td>${element.id}</td>
                <td>${element.latitude}</td>
                <td>${element.longitude}</td>
                <td>${element.altitude}</td>
            </tr>
    
        
        
        `

    });


    document.getElementById('bodyOutput').innerHTML = itemsInner



}