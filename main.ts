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
