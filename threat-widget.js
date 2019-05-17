(function(){
var widget =
{
    id: "threats-dashboard",
    version: "1.0",
    title: "Threats",
    description: "Threats detected in last <n> time",
    copyright: "(C)2016 Ridgeback Network Defense, Inc. (GPL3)",
    render: function(e, source)
    {
        var CONSTANTS = {
            THREAT: "threat"
        };
        var config = {
            period:30
        };
        var isAfter = function(date, period){
            return true;
            return date > period;
        };
        var count = source.log().length;

        // Get the list of logs with threats
        var threatList = source.log().filter(function(item){
            var date = new Date(item.timestamp);
            return item.type === CONSTANTS.THREAT && isAfter(date, config.period);
        });

        var threatData = threatList.map(function(threat){
            return {
                id: threat.id,
                src_ip: threat.src_ip,
                src_map: threat.src_map,
                timestamp: threat.timestamp,
                description: threat.description
            }
        });

        var table = document.createElement('table');
        table.appendChild(createHeaderRow());
        threatData.forEach(function(item){
            var row = createRow(item);
            table.appendChild(row);
        });

        var valueNode = $("<div>A total of "+ threatData.length + " threats were detected</div>");

        function createRow(rowData){
            var row = document.createElement('tr');
            for(col in rowData){
                var cell = document.createElement('td');
                cell.innerHTML = rowData[col];
                row.appendChild(cell);
            }
            return row;
        }
        function createHeaderRow(){
            var headerRow = document.createElement('tr');
            ['id','ip','mac','time', 'desc'].forEach(function(column){
                var cell = document.createElement('th');
                cell.innerHTML = column.toUpperCase();
                headerRow.appendChild(cell);
            });
            return headerRow;
        }

        $(e + " .data").append(table);
        $(e + " .value").append(valueNode);
    } // render()
}; // widget
AWM.registerWidget(widget);
})(); // widget