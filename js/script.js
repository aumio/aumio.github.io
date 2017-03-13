var data = {
		    labels: [
		        "Photoshop",
		        "Illustrator",
		        "Dreamweaver"
		    ],
		    datasets: [
		        {
		            data: [70, 10, 20],
		            backgroundColor: [
		                "#7cbcfe",
		                "#ffa01c",
		                "#89ea04"
		            ],
		            hoverBackgroundColor: [
		                "#7cbcfe",
		                "#ffa01c",
		                "#89ea04"
		            ]
		        }]
		};
		var ctx = document.getElementById("myChart");
		var myDoughnutChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
		});