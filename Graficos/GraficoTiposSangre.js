import { StyleSheet, View, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

const GraficoTiposSangre = ({ dataTiposSangre }) => {
  let screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <BarChart
        data={dataTiposSangre}
        width={screenWidth - (screenWidth * 0.1)}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "rgba(255, 0, 0, 0.1)",
          backgroundGradientFromOpacity: 0.1,
          backgroundGradientTo: "rgba(255, 0, 0, 0.1)", 
          backgroundGradientToOpacity: 0.1,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, 
          strokeWidth: 2,
          barPercentage: 0.5,
          fillShadowGradient: "#FF4444", 
          fillShadowGradientOpacity: 1,
        }}
        style={{
          borderRadius: 10,
        }}
        verticalLabelRotation={45}
        withHorizontalLabels={true}
        showValuesOnTopOfBars={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
  },
});

export default GraficoTiposSangre;


