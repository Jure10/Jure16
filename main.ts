for (let i = 0; i < 4; i++) {
    motors.largeBC.tank(50, 50, 2, MoveUnit.Rotations)
    motors.largeA.run(50, 1, MoveUnit.Rotations)
    motors.largeBC.tank(50, 50, 5, MoveUnit.Rotations)
    motors.stopAll()
}
for (let i = 0; i < 4; i++) {
    motors.largeBC.tank(50, 50, 2, MoveUnit.Rotations)
    motors.largeA.run(50, 1, MoveUnit.Rotations)
    motors.largeBC.tank(30, 30, 5, MoveUnit.Rotations)
}
