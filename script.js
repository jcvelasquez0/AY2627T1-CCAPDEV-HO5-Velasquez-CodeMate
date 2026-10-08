new Chart('courseDoughnutChart', {
  type: 'doughnut',
  data: {
    labels: ['CCPROG3', 'CCDSTRU', 'CCDSALG', 'CCAPDEV', 'CSMATH'],
    datasets: [{
      label: 'Active Requests',
      data: [38, 29, 45, 32, 26],
      backgroundColor: [
        '#0d6efd',
        '#6f42c1',
        '#fd7e14',
        '#198754',
        '#dc3545'
      ],
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 14,
          padding: 12
        }
      }
    }
  }
});

new Chart('topicPolarChart', {
  type: 'polarArea',
  data: {
    labels: ['Justin', 'Carlo', 'Miguel', 'Alexa'],
    datasets: [{
      label: 'Completed Sessions',
      data: [44, 38, 52, 41],
      backgroundColor: [
        'rgba(13, 110, 253, 0.65)',
        'rgba(111, 66, 193, 0.65)',
        'rgba(253, 126, 20, 0.65)',
        'rgba(25, 135, 84, 0.65)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 14,
          padding: 10
        }
      }
    }
  }
});

new Chart('competencyRadarChart', {
  type: 'radar',
  data: {
    labels: [
      'CCPROG3',
      'CCDSTRU',
      'CCDSALG',
      'CCAPDEV',
      'CSMATH'
    ],
    datasets: [
      {
        label: 'Dept Average',
        data: [78, 70, 75, 72, 74],
        borderColor: '#6c757d',
        backgroundColor: 'rgba(108, 117, 125, 0.15)',
        borderDash: [5, 5]
      },
      {
        label: 'Applicant Score',
        data: [92, 84, 88, 95, 86],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.25)',
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 40,
        suggestedMax: 100,
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 14,
          padding: 12
        }
      }
    }
  }
});