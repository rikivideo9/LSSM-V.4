import type { InternalBuilding } from '../../../typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill(0).map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Paloasema',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
    1: {
        caption: 'Pelastajaoppilaitos',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: multiplyExtension(
            index => ({
                caption: '',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
    },
    2: {
        caption: 'Ambulanssiasema',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
    3: {
        caption: 'Ammattikorkeakoulu',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: multiplyExtension(
            index => ({
                caption: '',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
    },
    4: {
        caption: 'Sairaala',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [
            {
                caption: 'General Internal',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'General Surgeon',
                credits: 10_000,
                coins: 10,
                duration: '7 Days',
                cannotDisable: true,
            },
            {
                caption: 'Gynecology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurosurgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Cardiology',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Cardiac Surgery',
                credits: 70_000,
                coins: 15,
                duration: '7 Days',
                requiredExtensions: [1],
                cannotDisable: true,
            },
        ],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startBeds: 10,
    },
    5: {
        caption: 'Lääkintähelikopteriasema',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 1,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    6: {
        caption: 'Poliisiasema',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
    7: {
        caption: 'Hätäkeskus',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
    },
    8: {
        caption: 'Poliisiammattikorkeakoulu',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: multiplyExtension(
            index => ({
                caption: '',
                credits: 400_000,
                coins: 40,
                duration: '7 days',
                newClassrooms: 1,
                requiredExtensions: index ? [index - 1] : [],
                cannotDisable: true,
            }),
            3
        ),
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startClassrooms: 1,
    },
    13: {
        caption: 'Poliisihelikopteritukikohta',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 1,
        startVehicles: [],
        startParkingLots: 1,
        schoolingTypes: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
    },
    14: {
        caption: 'Kokoontumispaikka',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        isStagingArea: true,
    },
    18: {
        caption: 'Paloasema (pieni)',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 10,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
    19: {
        caption: 'Poliisiasema (pieni asema)',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 2,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
    20: {
        caption: 'Ambulanssiasema (pieni asema)',
        color: '#ff0000',
        credits: 0,
        coins: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: '',
        maxLevel: 0,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: [],
        schoolingTypes: [],
    },
} as Record<number, InternalBuilding>;