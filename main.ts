radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (2 == receivedNumber) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (3 == receivedNumber) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
    } else if (4 == receivedNumber) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -100)
        neZha.setMotorSpeed(neZha.MotorList.M2, -100)
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    }
    basic.pause(10)
})
let grupo = 4
radio.setGroup(grupo)
basic.showNumber(grupo)
