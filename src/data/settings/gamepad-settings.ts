export type GamepadSettings = Readonly<{
    deadZones: Readonly<
        Record<
            string,
            {
                axesDeadZones: Readonly<Record<number, number>>;
                buttonDeadZones: Readonly<Record<number, number>>;
            }
        >
    >;
}>;
