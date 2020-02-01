for (let index = 0; index < 4; index++) {
    motors.largeBC.tank(50, 50, 2, MoveUnit.Rotations)
    motors.largeA.run(50, 1, MoveUnit.Rotations)
    motors.largeBC.tank(50, 50, 5, MoveUnit.Rotations)
    motors.stopAll()
}
for (let index = 0; index < 2; index++) {
    motors.largeBC.tank(50, 50, 2, MoveUnit.Rotations)
    motors.largeA.run(50, 1, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, 15, MoveUnit.Seconds)
}
motors.largeD.run(40, 10, MoveUnit.Seconds)
motors.largeD.run(40, 1, MoveUnit.Rotations)
for (let index = 0; index < 2; index++) {
    motors.largeBC.tank(100, 100, 5, MoveUnit.Seconds)
    motors.largeBC.tank(20, 20, 20, MoveUnit.Seconds)
    motors.stopAll()
}
motors.largeCD.tank(77, 77, 25, MoveUnit.Seconds)
motors.largeBC.tank(50, 50, 1, MoveUnit.Rotations)
motors.largeD.run(40, 23, MoveUnit.Seconds)
motors.stopAll()
for (let index = 0; index < 3; index++) {
    motors.largeBC.tank(100, 100, 5, MoveUnit.Rotations)
    motors.largeA.run(60, 2, MoveUnit.Rotations)
}
