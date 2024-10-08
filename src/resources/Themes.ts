import * as themes from "@uiw/codemirror-themes-all"
import { Extension } from "@uiw/react-codemirror"

interface EditorTheme {
    [key: string]: Extension
}

export const editorThemes: EditorTheme = {
    Abcdef: themes.abcdef,
    Abyss: themes.abyss,
    "Android Studio": themes.androidstudio,
    Andromeda: themes.andromeda,
    "Atom One": themes.atomone,
    Aura: themes.aura,
    "Basic Dark": themes.basicDark,
    "Basic Light": themes.basicLight,
    BBEdit: themes.bbedit,
    Bespin: themes.bespin,
    Copilot: themes.copilot,
    Darcula: themes.darcula,
    Dracula: themes.dracula,
    "Duotone Dark": themes.duotoneDark,
    "Duotone Light": themes.duotoneLight,
    Eclipse: themes.eclipse,
    "GitHub Dark": themes.githubDark,
    "GitHub Light": themes.githubLight,
    "Gruvbox Dark": themes.gruvboxDark,
    "Gruvbox Light": themes.gruvboxLight,
    Kimbie: themes.kimbie,
    Material: themes.material,
    "Material Dark": themes.materialDark,
    "Material Light": themes.materialLight,
    Monokai: themes.monokai,
    "Monokai Dimmed": themes.monokaiDimmed,
    "Noctis Lilac": themes.noctisLilac,
    Nord: themes.nord,
    Okaidia: themes.okaidia,
    "Quiet Light": themes.quietlight,
    Red: themes.red,
    "Solarized Dark": themes.solarizedDark,
    "Solarized Light": themes.solarizedLight,
    Sublime: themes.sublime,
    "Tokyo Night": themes.tokyoNight,
    "Tokyo Night Day": themes.tokyoNightDay,
    "Tokyo Night Storm": themes.tokyoNightStorm,
    "Tomorrow Night Blue": themes.tomorrowNightBlue,
    "VS Code Dark": themes.vscodeDark,
    "White Dark": themes.whiteDark,
    "White Light": themes.whiteLight,
    "Xcode Dark": themes.xcodeDark,
    "Xcode Light": themes.xcodeLight,
}
