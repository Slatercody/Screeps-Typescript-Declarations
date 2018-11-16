/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

declare const OK: 0;
declare const ERR_NOT_OWNER: -1;
declare const ERR_NO_PATH: -2;
declare const ERR_NAME_EXISTS: -3;
declare const ERR_BUSY: -4;
declare const ERR_NOT_FOUND: -5;
declare const ERR_NOT_ENOUGH_RESOURCES: -6;
declare const ERR_NOT_ENOUGH_ENERGY: -6;
declare const ERR_INVALID_TARGET: -7;
declare const ERR_FULL: -8;
declare const ERR_NOT_IN_RANGE: -9;
declare const ERR_INVALID_ARGS: -10;
declare const ERR_TIRED: -11;
declare const ERR_NO_BODYPART: -12;
declare const ERR_NOT_ENOUGH_EXTENSIONS: -6;
declare const ERR_RCL_NOT_ENOUGH: -14;
declare const ERR_GCL_NOT_ENOUGH: -15;

declare const FIND_EXIT_TOP: 1;
declare const FIND_EXIT_RIGHT: 3;
declare const FIND_EXIT_BOTTOM: 5;
declare const FIND_EXIT_LEFT: 7;
declare const FIND_EXIT: 10;
declare const FIND_CREEPS: 101;
declare const FIND_MY_CREEPS: 102;
declare const FIND_HOSTILE_CREEPS: 103;
declare const FIND_SOURCES_ACTIVE: 104;
declare const FIND_SOURCES: 105;
declare const FIND_DROPPED_ENERGY: -106;
declare const FIND_DROPPED_RESOURCES: 106;
declare const FIND_STRUCTURES: 107;
declare const FIND_MY_STRUCTURES: 108;
declare const FIND_HOSTILE_STRUCTURES: 109;
declare const FIND_FLAGS: 110;
declare const FIND_CONSTRUCTION_SITES: 111;
declare const FIND_MY_SPAWNS: 112;
declare const FIND_HOSTILE_SPAWNS: 113;
declare const FIND_MY_CONSTRUCTION_SITES: 114;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: 115;
declare const FIND_MINERALS: 116;
declare const FIND_NUKES: 117;
declare const FIND_TOMBSTONES: 118;

declare const TOP: 1;
declare const TOP_RIGHT: 2;
declare const RIGHT: 3;
declare const BOTTOM_RIGHT: 4;
declare const BOTTOM: 5;
declare const BOTTOM_LEFT: 6;
declare const LEFT: 7;
declare const TOP_LEFT: 8;

declare const COLOR_RED: 1;
declare const COLOR_PURPLE: 2;
declare const COLOR_BLUE: 3;
declare const COLOR_CYAN: 4;
declare const COLOR_GREEN: 5;
declare const COLOR_YELLOW: 6;
declare const COLOR_ORANGE: 7;
declare const COLOR_BROWN: 8;
declare const COLOR_GREY: 9;
declare const COLOR_WHITE: 10;

declare const LOOK_CREEPS: "creep";
declare const LOOK_ENERGY: "energy";
declare const LOOK_RESOURCES: "resource";
declare const LOOK_SOURCES: "source";
declare const LOOK_MINERALS: "mineral";
declare const LOOK_STRUCTURES: "structure";
declare const LOOK_FLAGS: "flag";
declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
declare const LOOK_NUKES: "nuke";
declare const LOOK_TERRAIN: "terrain";
declare const LOOK_TOMBSTONES: "tombstone";

declare const OBSTACLE_OBJECT_TYPES: string[]; //"spawn", "creep", "source", "mineral", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal","nuker"

declare const MOVE: "move";
declare const WORK: "work";
declare const CARRY: "carry";
declare const ATTACK: "attack";
declare const RANGED_ATTACK: "ranged_attack";
declare const TOUGH: "tough";
declare const HEAL: "heal";
declare const CLAIM: "claim";

declare const BODYPART_COST: {
    [part: string]: number;
    move: 50;
    work: 100;
    attack: 80;
    carry: 50;
    heal: 250;
    ranged_attack: 150;
    tough: 10;
    claim: 600;
};

declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 600;
declare const CREEP_CORPSE_RATE: 0.2;
declare const CREEP_PART_MAX_ENERGY: 125;

declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const REPAIR_COST: 0.01;
declare const DISMANTLE_COST: 0.005;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    2: 300000,
    3: 1000000,
    4: 3000000,
    5: 10000000,
    6: 30000000,
    7: 100000000,
    8: 300000000
};

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;
declare const CREEP_SPAWN_TIME: 3;
declare const  SPAWN_RENEW_RATIO: 1.2;

declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;

declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;

declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: {
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 100,
    8: 200
};

declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;

declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;

declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;

declare const STRUCTURE_SPAWN: "spawn";
declare const STRUCTURE_EXTENSION: "extension";
declare const STRUCTURE_ROAD: "road";
declare const STRUCTURE_WALL: "constructedWall";
declare const STRUCTURE_RAMPART: "rampart";
declare const STRUCTURE_KEEPER_LAIR: "keeperLair";
declare const STRUCTURE_PORTAL: "portal";
declare const STRUCTURE_CONTROLLER: "controller";
declare const STRUCTURE_LINK: "link";
declare const STRUCTURE_STORAGE: "storage";
declare const STRUCTURE_TOWER: "tower";
declare const STRUCTURE_OBSERVER: "observer";
declare const STRUCTURE_POWER_BANK: "powerBank";
declare const STRUCTURE_POWER_SPAWN: "powerSpawn";
declare const STRUCTURE_EXTRACTOR: "extractor";
declare const STRUCTURE_LAB: "lab";
declare const STRUCTURE_TERMINAL: "terminal";
declare const STRUCTURE_CONTAINER: "container";
declare const STRUCTURE_NUKER: "nuker";

declare const CONSTRUCTION_COST: {
    spawn: 15000,
    extension: 3000,
    road: 300,
    constructedWall: 1,
    rampart: 1,
    link: 5000,
    storage: 30000,
    tower: 5000,
    observer: 8000,
    powerSpawn: 100000,
    extractor: 5000,
    lab: 50000,
    terminal: 100000,
    container: 5000,
    nuker: 100000
};

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;
declare const CONSTRUCTION_COST_ROAD_WALL_RATIO: 150

declare const CONTROLLER_LEVELS: {[level: number]: number};//{1: 200, 2: 45000, 3: 135000, 4: 405000, 5: 1215000, 6: 3645000, 7: 10935000}
declare const CONTROLLER_STRUCTURES: {[structure: string]: {[level: number]: number}};
/**
 * "spawn": {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3},
 * "extension": {0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60},
 * "link": {1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6},
 * "road": {0: 2500, 1: 2500, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
 * "constructedWall": {1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
 * "rampart": {1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
 * "storage": {1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1},
 * "tower": {1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 6},
 * "observer": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1},
 * "powerSpawn": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1},
 * "extractor": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1},
 * "terminal": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1},
 * "lab": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 3, 7: 6, 8: 10},
 * "container": {0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5},
 * "nuker": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1}
 */
declare const CONTROLLER_DOWNGRADE: {[level: number]: number}; //{1: 20000, 2: 5000, 3: 10000, 4: 20000, 5: 40000, 6: 60000, 7: 100000, 8: 150000},
declare const CONTROLLER_DOWNGRADE_RESTORE: 100;
declare const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: 5000;
declare const CONTROLLER_CLAIM_DOWNGRADE: 300;
declare const CONTROLLER_RESERVE: 1;
declare const CONTROLLER_RESERVE_MAX: 5000;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: 15;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: 1000;
declare const CONTROLLER_NUKE_BLOCKED_UPGRADE: 200;

declare const SAFE_MODE_DURATION: 20000;
declare const SAFE_MODE_COOLDOWN: 50000;
declare const SAFE_MODE_COST: 1000;

declare const TOWER_HITS: 3000;
declare const TOWER_CAPACITY: 1000;
declare const TOWER_ENERGY_COST: 10;
declare const TOWER_POWER_ATTACK: 600;
declare const TOWER_POWER_HEAL: 400;
declare const TOWER_POWER_REPAIR: 800;
declare const TOWER_OPTIMAL_RANGE: 5;
declare const TOWER_FALLOFF_RANGE: 20;
declare const TOWER_FALLOFF: 0.75;

declare const OBSERVER_HITS: 500;
declare const OBSERVER_RANGE: 10;

declare const POWER_BANK_HITS: 2000000;
declare const POWER_BANK_CAPACITY_MAX: 5000;
declare const POWER_BANK_CAPACITY_MIN: 500;
declare const POWER_BANK_CAPACITY_CRIT: 0.3;
declare const POWER_BANK_DECAY: 5000;
declare const POWER_BANK_HIT_BACK: 0.5;

declare const POWER_SPAWN_HITS: 5000;
declare const POWER_SPAWN_ENERGY_CAPACITY: 5000;
declare const POWER_SPAWN_POWER_CAPACITY: 100;
declare const POWER_SPAWN_ENERGY_RATIO: 50;

declare const EXTRACTOR_HITS: 500;
declare const EXTRACTOR_COOLDOWN: 5;

declare const LAB_HITS: 500;
declare const LAB_MINERAL_CAPACITY: 3000;
declare const LAB_ENERGY_CAPACITY: 2000;
declare const LAB_BOOST_ENERGY: 20;
declare const LAB_BOOST_MINERAL: 30;
//declare const LAB_COOLDOWN: number; DEPRECATED
declare const LAB_REACTION_AMOUNT: 5;
declare const LAB_UNBOOST_ENERGY: 0;
declare const LAB_UNBOOST_MINERAL: 15;

declare const GCL_POW: 2.4;
declare const GCL_MULTIPLY: 1000000;
declare const GCL_NOVICE: 3;

declare const MODE_SIMULATION: null;
declare const MODE_WORLD: null;

declare const TERRAIN_MASK_WALL: 1;
declare const TERRAIN_MASK_SWAMP: 2;
declare const TERRAIN_MASK_LAVA: 4;

declare const MAX_CONSTRUCTION_SITES: 100;
declare const MAX_CREEP_SIZE: 50;

declare const MINERAL_REGEN_TIME: 50000;
declare const MINERAL_MIN_AMOUNT: {
    H: number,
    O: number,
    L: number,
    K: number,
    Z: number,
    U: number,
    X: number
}
declare const MINERAL_RANDOM_FACTOR: 2;

declare const MINERAL_DENSITY: {
    1: 15000,
    2: 35000,
    3: 70000,
    4: 100000
}
declare const MINERAL_DENSITY_PROBABILITY: {
    1: 0.1,
    2: 0.5,
    3: 0.9,
    4: 1.0
}
declare const MINERAL_DENSITY_CHANGE: 0.05;

declare const DENSITY_LOW: 1;
declare const DENSITY_MODERATE: 2;
declare const DENSITY_HIGH: 3;
declare const DENSITY_ULTRA: 4;

declare const TERMINAL_CAPACITY: 300000;
declare const TERMINAL_HITS: 3000;
declare const TERMINAL_SEND_COST: 0.1;
declare const TERMINAL_MIN_SEND: 100;
declare const TERMINAL_COOLDOWN: 10;

declare const CONTAINER_HITS: 250000;
declare const CONTAINER_CAPACITY: 2000;
declare const CONTAINER_DECAY: 5000;
declare const CONTAINER_DECAY_TIME: 100;
declare const CONTAINER_DECAY_TIME_OWNED: 500;

declare const NUKER_HITS: 1000;
declare const NUKER_COOLDOWN: 100000;
declare const NUKER_ENERGY_CAPACITY: 300000;
declare const NUKER_GHODIUM_CAPACITY: 5000;
declare const NUKE_LAND_TIME: 50000;
declare const NUKE_RANGE: 10;
declare const NUKE_DAMAGE: {
    0: 10000000,
    2: 5000000,
}

declare const TOMBSTONE_DECAY_PER_PART: 5;

declare const PORTAL_DECAY: 30000;

declare const ORDER_SELL: "sell";
declare const ORDER_BUY: "buy";

declare const MARKET_FEE: 0.05;

declare const FLAGS_LIMIT: 10000;

declare const SUBSCRIPTION_TOKEN: "token";

declare const RESOURCE_ENERGY: "energy";
declare const RESOURCE_POWER: "power";

declare const RESOURCE_HYDROGEN: "H";
declare const RESOURCE_OXYGEN: "O";
declare const RESOURCE_UTRIUM: "U";
declare const RESOURCE_LEMERGIUM: "L";
declare const RESOURCE_ZYNTHIUM: "Z";
declare const RESOURCE_CATALYST: "X";
declare const RESOURCE_KEANIUM: "K";
declare const RESOURCE_GHODIUM: "G";

declare const RESOURCE_HYDROXIDE: "OH";
declare const RESOURCE_ZYNTHIUM_KEANITE: "ZK";
declare const RESOURCE_UTRIUM_LEMERGITE: "UL";

declare const RESOURCE_UTRIUM_HYDRIDE: "UH";
declare const RESOURCE_UTRIUM_OXIDE: "UO";
declare const RESOURCE_KEANIUM_HYDRIDE: "KH";
declare const RESOURCE_KEANIUM_OXIDE: "KO";
declare const RESOURCE_LEMERGIUM_HYDRIDE: "LH";
declare const RESOURCE_LEMERGIUM_OXIDE: "LO";
declare const RESOURCE_ZYNTHIUM_HYDRIDE: "ZH";
declare const RESOURCE_ZYNTHIUM_OXIDE: "ZO";
declare const RESOURCE_GHODIUM_HYDRIDE: "GH";
declare const RESOURCE_GHODIUM_OXIDE: "GO";

declare const RESOURCE_UTRIUM_ACID: "UH2O";
declare const RESOURCE_UTRIUM_ALKALIDE: "UHO2";
declare const RESOURCE_KEANIUM_ACID: "KH2O";
declare const RESOURCE_KEANIUM_ALKALIDE: "KHO2";
declare const RESOURCE_LEMERGIUM_ACID: "LH2O";
declare const RESOURCE_LEMERGIUM_ALKALIDE: "LHO2";
declare const RESOURCE_ZYNTHIUM_ACID: "ZH2O";
declare const RESOURCE_ZYNTHIUM_ALKALIDE: "ZHO2";
declare const RESOURCE_GHODIUM_ACID: "GH2O";
declare const RESOURCE_GHODIUM_ALKALIDE: "GHO2";

declare const RESOURCE_CATALYZED_UTRIUM_ACID: "XUH2O";
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: "XUHO2";
declare const RESOURCE_CATALYZED_KEANIUM_ACID: "XKH2O";
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: "XKHO2";
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: "XLH2O";
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: "XLHO2";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: "XZH2O";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "ZXHO2";
declare const RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";

declare const REACTIONS: {
    H: {
        O: "OH",
        L: "LH",
        K: "KH",
        U: "UH",
        Z: "ZH",
        G: "GH"
    },
    O: {
        H: "OH",
        L: "LO",
        K: "KO",
        U: "UO",
        Z: "ZO",
        G: "GO"
    },
    Z: {
        K: "ZK",
        H: "ZH",
        O: "ZO"
    },
    L: {
        U: "UL",
        H: "LH",
        O: "LO"
    },
    K: {
        Z: "ZK",
        H: "KH",
        O: "KO"
    },
    G: {
        H: "GH",
        O: "GO"
    },
    U: {
        L: "UL",
        H: "UH",
        O: "UO"
    },
    OH: {
        UH: "UH2O",
        UO: "UHO2",
        ZH: "ZH2O",
        ZO: "ZHO2",
        KH: "KH2O",
        KO: "KHO2",
        LH: "LH2O",
        LO: "LHO2",
        GH: "GH2O",
        GO: "GHO2"
    },
    X: {
        UH2O: "XUH2O",
        UHO2: "XUHO2",
        LH2O: "XLH2O",
        LHO2: "XLHO2",
        KH2O: "XKH2O",
        KHO2: "XKHO2",
        ZH2O: "XZH2O",
        ZHO2: "XZHO2",
        GH2O: "XGH2O",
        GHO2: "XGHO2"
    },
    ZK: {
        UL: "G"
    },
    UL: {
        ZK: "G"
    },
    LH: {
        OH: "LH2O"
    },
    ZH: {
        OH: "ZH2O"
    },
    GH: {
        OH: "GH2O"
    },
    KH: {
        OH: "KH2O"
    },
    UH: {
        OH: "UH2O"
    },
    LO: {
        OH: "LHO2"
    },
    ZO: {
        OH: "ZHO2"
    },
    KO: {
        OH: "KHO2"
    },
    UO: {
        OH: "UHO2"
    },
    GO: {
        OH: "GHO2"
    },
    LH2O: {
        X: "XLH2O"
    },
    KH2O: {
        X: "XKH2O"
    },
    ZH2O: {
        X: "XZH2O"
    },
    UH2O: {
        X: "XUH2O"
    },
    GH2O: {
        X: "XGH2O"
    },
    LHO2: {
        X: "XLHO2"
    },
    UHO2: {
        X: "XUHO2"
    },
    KHO2: {
        X: "XKHO2"
    },
    ZHO2: {
        X: "XZHO2"
    },
    GHO2: {
        X: "XGHO2"
    }
};

declare const BOOSTS: {
    work: {
        UO: {
            harvest: 3
        },
        UHO2: {
            harvest: 5
        },
        XUHO2: {
            harvest: 7
        },
        LH: {
            build: 1.5,
            repair: 1.5
        },
        LH2O: {
            build: 1.8,
            repair: 1.8
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.5
        },
        GH2O: {
            upgradeController: 1.8
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
};

declare const REACTION_TIME: {
    OH: 20,
    ZK: 5,
    UL: 5,
    G: 5,
    UH: 10,
    UH2O: 5,
    XUH2O: 60,
    UO: 10,
    UHO2: 5,
    XUHO2: 60,
    KH: 10,
    KH2O: 5,
    XKH2O: 60,
    KO: 10,
    KHO2: 5,
    XKHO2: 60,
    LH: 15,
    LH2O: 10,
    XLH2O: 65,
    LO: 10,
    LHO2: 5,
    XLHO2: 60,
    ZH: 20,
    ZH2O: 40,
    XZH2O: 160,
    ZO: 10,
    ZHO2: 5,
    XZHO2: 60,
    GH: 10,
    GH2O: 15,
    XGH2O: 80,
    GO: 10,
    GHO2: 30,
    XGHO2: 150,
};

declare const PORTAL_UNSTABLE: 864000000;
declare const PORTAL_MIN_TIMEOUT: 1036800000;
declare const PORTAL_MAX_TIMEOUT: 1900800000;

declare const POWER_BANK_RESPAWN_TIME: 50000;

declare const INVADERS_ENERGY_GOAL: 100000;

declare const SYSTEM_USERNAME: 'Screeps';

//declare const SIGN_NOVICE_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.'; DEPRECATED
//declare const SIGN_RESPAWN_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.'; DEPRECATED
declare const SIGN_PLANNED_AREA: 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

declare const EVENT_ATTACK: 1;
declare const EVENT_OBJECT_DESTROYED: 2;
declare const EVENT_ATTACK_CONTROLLER: 3;
declare const EVENT_BUILD: 4;
declare const EVENT_HARVEST: 5;
declare const EVENT_HEAL: 6;
declare const EVENT_REPAIR: 7;
declare const EVENT_RESERVE_CONTROLLER: 8;
declare const EVENT_UPGRADE_CONTROLLER: 9;
declare const EVENT_EXIT: 10;

declare const EVENT_ATTACK_TYPE_MELEE: 1;
declare const EVENT_ATTACK_TYPE_RANGED: 2;
declare const EVENT_ATTACK_TYPE_RANGED_MASS: 3;
declare const EVENT_ATTACK_TYPE_DISMANTLE: 4;
declare const EVENT_ATTACK_TYPE_HIT_BACK: 5;
declare const EVENT_ATTACK_TYPE_NUKE: 6;

declare const EVENT_HEAL_TYPE_MELEE: 1;
declare const EVENT_HEAL_TYPE_RANGED: 2;

declare const BODYPARTS_ALL: string[];//MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, TOUGH, HEAL, CLAIM

declare const RESOURCES_ALL: string[];
/**
    RESOURCE_ENERGY,
    RESOURCE_POWER,

    RESOURCE_HYDROGEN,
    RESOURCE_OXYGEN,
    RESOURCE_UTRIUM,
    RESOURCE_KEANIUM,
    RESOURCE_LEMERGIUM,
    RESOURCE_ZYNTHIUM,
    RESOURCE_CATALYST,
    RESOURCE_GHODIUM,

    RESOURCE_HYDROXIDE,
    RESOURCE_ZYNTHIUM_KEANITE,
    RESOURCE_UTRIUM_LEMERGITE,

    RESOURCE_UTRIUM_HYDRIDE,
    RESOURCE_UTRIUM_OXIDE,
    RESOURCE_KEANIUM_HYDRIDE,
    RESOURCE_KEANIUM_OXIDE,
    RESOURCE_LEMERGIUM_HYDRIDE,
    RESOURCE_LEMERGIUM_OXIDE,
    RESOURCE_ZYNTHIUM_HYDRIDE,
    RESOURCE_ZYNTHIUM_OXIDE,
    RESOURCE_GHODIUM_HYDRIDE,
    RESOURCE_GHODIUM_OXIDE,

    RESOURCE_UTRIUM_ACID,
    RESOURCE_UTRIUM_ALKALIDE,
    RESOURCE_KEANIUM_ACID,
    RESOURCE_KEANIUM_ALKALIDE,
    RESOURCE_LEMERGIUM_ACID,
    RESOURCE_LEMERGIUM_ALKALIDE,
    RESOURCE_ZYNTHIUM_ACID,
    RESOURCE_ZYNTHIUM_ALKALIDE,
    RESOURCE_GHODIUM_ACID,
    RESOURCE_GHODIUM_ALKALIDE,

    RESOURCE_CATALYZED_UTRIUM_ACID,
    RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
    RESOURCE_CATALYZED_KEANIUM_ACID,
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    RESOURCE_CATALYZED_LEMERGIUM_ACID,
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    RESOURCE_CATALYZED_GHODIUM_ACID,
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE
*/

declare const COLORS_ALL: string[];//COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN, COLOR_GREY, COLOR_WHITE