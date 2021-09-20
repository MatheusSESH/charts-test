import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis } from "victory";

import  DataSheetJson ,{ DataProps, FileProps } from "../../../service/workbook";

const PageContent: React.FC = () => {
  const [data, setData] = useState<DataProps[]>()

  useEffect(() => {
    setData(DataSheetJson)

    console.log(DataSheetJson)
  }, [])

  return (
    <>
     <ol className="color-catalog">
       <div>
        <li />
        <span>Galpão primario</span>
       </div>

       <div>
        <li />
        <span>Galpão secundario</span>
       </div>
        
        <div>
          <li />
          <span>Sala administração</span>
        </div>
        
        <div>
          <li />
          <span>Ala de montagem</span>
        </div>

        <div>
          <li />
          <span>Patio de manutenção</span>
        </div>
        
        <div>
          <li />
          <span>Sala de tecnologia</span>
        </div>
      </ol>
    <div className="container">
      <div className="chart-pie">
      <VictoryPie
          data={[1,2,3,4,5,6]}
          colorScale={[ 'green', 'orange', 'blue', 'purple' ,'red', 'black' ]}
        />
      </div>

      <div className="chart-bar">
      <VictoryChart
        domainPadding={80}
        
      >
            <VictoryBar

              barWidth={40}
              alignment="middle"
              domain={{ y: [0, 10] }}
              style={{ 
                data: { fill: ({ index }) => (
                  index === 0 ? "green" : '' || 
                  index === 1 ? "orange" : '' ||
                  index === 2 ? "blue" : '' ||
                  index === 3 ? "purple" : '' ||
                  index === 4 ? "red" : '' ||
                  index === 5 ? "black" : '')},
              }}
              data={[
                { x: 1, y: 2,},
                { x: 2, y: 3,},
                { x: 3, y: 5,},
                { x: 4, y: 4,},
                { x: 5, y: 6,},
                { x: 6, y: 9,}
              ]}
              width={30} height={30}
              labels={({ datum }) => `${datum.y}`}
              scale={{ x: 'time' }}
            />
            <VictoryAxis 
              crossAxis={false}
              scale={{ x: 'time' }}
            //   style={{ 
            //     ticks: {stroke: "transparent"},
            //     tickLabels: { fill:"transparent"} 
            // }}
            />
        </VictoryChart>
      </div>
    </div>
    </>
  );
};

export default PageContent;
