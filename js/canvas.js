const ctx = document.getElementById('myChart').getContext('2d');
// const labels = Utils.days({count: 7});
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'WPM',
            data: [65, 36, 53, 34, 28, 67, 23],
            borderColor: 'black',
            fill: false,
        }],
    },
    options: {
        maintainAspectRatio: false
    }
})
