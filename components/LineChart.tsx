import { VictoryAxis, VictoryGroup, VictoryLine } from "victory-native";
import { Dimensions } from "react-native";

export function MyLineChart() {
    const dim = Dimensions.get('window');
    return (
        <VictoryGroup padding={0} width={dim.width*0.8} height={dim.height*0.2}>
            <VictoryLine 
                style={{ 
                data: { stroke: "#c43a31" },
                }}
                data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
                ]}
            />
        </VictoryGroup>
    )
}