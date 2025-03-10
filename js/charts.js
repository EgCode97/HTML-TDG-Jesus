document.addEventListener('DOMContentLoaded', function () {
    // Function to get CSS variable value
    function getCSSVariableValue(variable) {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    // Load Google Charts
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawTemperatureChart();
        drawHumidityChart();
    }

    function drawTemperatureChart() {
        // Retrieve CSS variables
        const backgroundColor = getCSSVariableValue('--background-color');
        const textColor = getCSSVariableValue('--text-color');

        // Example data for temperature
        var data = google.visualization.arrayToDataTable([
            ['Time', 'Temperature'],
            ['12:00', 20],
            ['13:00', 22],
            ['14:00', 23],
            ['15:00', 21],
            ['16:00', 24]
        ]);

        // Chart options
        var options = {
            backgroundColor: backgroundColor,
            titleTextStyle: {
                color: textColor
            },
            hAxis: {
                textStyle: {
                    color: textColor
                }
            },
            vAxis: {
                textStyle: {
                    color: textColor
                }
            },

            curveType: 'function',
            legend: {
                position: 'bottom',
                textStyle: { color: textColor }
            }
        };

        // Draw the temperature chart
        var chart = new google.visualization.LineChart(document.getElementById('temperature-chart'));
        chart.draw(data, options);

        // Update big number
        var lastTemperature = data.getValue(data.getNumberOfRows() - 1, 1);
        document.getElementById('temperature-big-number').innerText = lastTemperature + '°C';
    }

    function drawHumidityChart() {
        // Retrieve CSS variables
        const backgroundColor = getCSSVariableValue('--background-color');
        const textColor = getCSSVariableValue('--text-color');

        // Example data for humidity
        var data = google.visualization.arrayToDataTable([
            ['Time', 'Humidity'],
            ['12:00', 30],
            ['13:00', 35],
            ['14:00', 40],
            ['15:00', 45],
            ['16:00', 50]
        ]);

        // Chart options
        var options = {
            backgroundColor: backgroundColor,
            titleTextStyle: {
                color: textColor
            },
            hAxis: {
                textStyle: {
                    color: textColor
                }
            },
            vAxis: {
                textStyle: {
                    color: textColor
                }
            },
            curveType: 'function',
            legend: {
                position: 'bottom',
                textStyle: { color: textColor }
            }
        };

        // Draw the humidity chart
        var chart = new google.visualization.LineChart(document.getElementById('humidity-chart'));
        chart.draw(data, options);

        // Update big number
        var lastHumidity = data.getValue(data.getNumberOfRows() - 1, 1);
        document.getElementById('humidity-big-number').innerText = lastHumidity + '%';
    }
});