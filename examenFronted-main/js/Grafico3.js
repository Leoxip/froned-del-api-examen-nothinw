const SEGUNDA_CONSULTA = "http://localhost:8080/api/inicio/readOrdeCountries"


const apenasCarga = async () => {
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Orden / Año',
                backgroundColor: ['#7A4768', '#A945D4', '#6768D0', '#65AED0', '#65D0BE', '#43E3C8', '#43E373', '#4FE343', '#BFE343', '#E3AB43'],
                borderColor: ['White'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    fetch(SEGUNDA_CONSULTA)
        .then(response => response.json())
        .then(datos => mostrar(datos))
        .catch(error => console.log(error))


    const mostrar = (articulos) => {
        articulos.forEach(element => {
            myChart.data['labels'].push(element.ShippedDate)
            myChart.data['datasets'][0].data.push(element.OrderID)
            myChart.update()
    });

    }
}
        fetch(SEGUNDA_CONSULTA)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].OrderID}</td><td>${data[i].ShippedDate}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
        }