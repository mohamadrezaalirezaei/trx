$(document).ready(function () {
  var ctx = document.getElementById('barChart').getContext('2d');
  var chart;

  function initializeChart() {
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [20, 30, 40, 50, 60, 70, 80, 0, 0, 0, 0, 0],
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'],
          borderWidth: 1,
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 10,
            ticks: {
              color: 'white'
            },
            grid: {
              display: true,
              color: 'rgba(255, 255, 255, 0.05)',
            },
          },
          x: {
            ticks: {
              color: 'white'
            },
            grid: {
              display: false,
            },
          }
        },
        legend: {
          display: false // Remove the legend
        }
      }
    });
  }

  // Initialize the chart
  initializeChart();

  // Update the chart dimensions when the window is resized
  $(window).on('resize', function () {
    if (chart) {
      chart.destroy(); // Destroy the existing chart instance
      initializeChart(); // Re-initialize the chart
    }
  });
});
