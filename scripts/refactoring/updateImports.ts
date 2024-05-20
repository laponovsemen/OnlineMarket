import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles(); //достаем все файлы с расширением тайпскрипта

function isAbsolute(value: string) {
    const layers = [
        "app",
        "shared",
        "entities",
        "features",
        "widgets",
        "pages",
    ];
    if (layers.some((layer) => value.startsWith(layer))) {
        return true;
    }
    return false;
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        //console.log(value);
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
