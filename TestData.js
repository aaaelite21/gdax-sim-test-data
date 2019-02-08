module.exports = {
    candles: {
        oneHour: require('./Candles/OneHour'),
        threeDaysAsArray: require('./Candles/ThreeDaysAsArray'),
        threeDaysContinuous: require('./Candles/ThreeDaysContinuous')
    },
    gdaxOutput: {
        twoHistoricRates: require('./GdaxOutput/TwoHistoricRates'),
        fifteenOneMinutes: require('./GdaxOutput/FifteenOneMinutes')
    }
}