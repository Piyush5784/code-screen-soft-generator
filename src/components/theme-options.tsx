
export
    const themes = {
        sunsetGlow: "bg-gradient-to-r from-[#A58EFB] to-[#E9BFF8]",
        oceanBreeze: "bg-gradient-to-r from-teal-400 to-indigo-600",
        tropicalVibe: "bg-gradient-to-r from-yellow-300 to-green-500",
        nightSky: "bg-gradient-to-r from-purple-500 to-indigo-800",
        fierySunset: "bg-gradient-to-r from-red-400 to-yellow-600",
        morningDawn: "bg-gradient-to-r from-orange-200 to-yellow-400",
        forestMist: "bg-gradient-to-r from-green-600 to-blue-700",
        candySwirl: "bg-gradient-to-r from-pink-400 to-purple-500",
        coolWave: "bg-gradient-to-r from-cyan-500 to-blue-700",
        desertSunset: "bg-gradient-to-r from-orange-500 to-red-600",
        auroraLights: "bg-gradient-to-r from-green-400 to-blue-500",
        twilightGlimmer: "bg-gradient-to-r from-indigo-400 to-purple-600",
        electricSky: "bg-gradient-to-r from-blue-400 to-violet-600",
        sunriseBliss: "bg-gradient-to-r from-yellow-400 to-pink-500",
        iceCrystal: "bg-gradient-to-r from-sky-300 to-white",
        berryBliss: "bg-gradient-to-r from-rose-400 to-indigo-500",
        coralReef: "bg-gradient-to-r from-[#F66C0D]  to-[#14B8A6]",
        autumnLeaves: "bg-gradient-to-r from-orange-500 to-brown-700",
        blueLagoon: "bg-gradient-to-r from-blue-300 to-green-600",
        summerRain: "bg-gradient-to-r from-blue-300 to-indigo-600",
        springMeadow: "bg-gradient-to-r from-green-300 to-yellow-500",
        moonlitSky: "bg-gradient-to-r from-indigo-600 to-black",
        midnightWhispers: "bg-gradient-to-r from-black to-gray-700",
        cottonCandy: "bg-gradient-to-r from-pink-200 to-cyan-400",
        oceanTide: "bg-gradient-to-r from-teal-500 to-blue-800",
        dustyRose: "bg-gradient-to-r from-rose-400 to-brown-500",
        royalEmber: "bg-gradient-to-r from-red-600 to-yellow-800",
        frozenPeak: "bg-gradient-to-r from-cyan-300 to-blue-500",
        freshMint: "bg-gradient-to-r from-teal-200 to-lime-400",
        wildberrySplash: "bg-gradient-to-r from-purple-400 to-rose-300",
        goldenHour: "bg-gradient-to-r from-yellow-500 to-orange-700",
        tranquilSea: "bg-gradient-to-r from-blue-200 to-cyan-500",
        silverMoon: "bg-gradient-to-r from-gray-300 to-blue-400",
        volcanicEruption: "bg-gradient-to-r from-red-700 to-black",
    };

export type ThemeKey = keyof typeof themes;
export type ThemeValue = string;


export const paddingOptions = [
    '4px',    // 1
    '6px',    // 1.5
    '8px',    // 2
    '10px',   // 2.5
    '12px',   // 3
    '14px',   // 3.5
    '16px',   // 4
    '20px',   // 5
    '24px',   // 6
    '28px',   // 7
    '32px',   // 8
    '36px',   // 9
    '40px',   // 10
    '44px',   // 11
    '48px',   // 12
    '56px',   // 14
    '64px',   // 16
    '80px',   // 20
    "90px"
];


export const defaultCode = `function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();
`

export const languageOptions = ["markup",
    "bash",
    "clike",
    "c",
    "cpp",
    "css",
    "javascript",
    "jsx",
    "coffeescript",
    "actionscript",
    "css-extr",
    "diff",
    "git",
    "go",
    "graphql",
    "handlebars",
    "json",
    "less",
    "makefile",
    "markdown",
    "objectivec",
    "ocaml",
    "python",
    "reason",
    "sass",
    "scss",
    "sql",
    "stylus",
    "tsx",
    "typescript",
    "wasm",
    "yaml"]